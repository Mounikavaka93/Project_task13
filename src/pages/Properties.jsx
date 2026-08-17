import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { filterProperties, properties } from '../data/properties'
import { useFavorites } from '../hooks/useFavorites'
import FilterPanel, { defaultFilters } from '../components/ui/FilterPanel'
import PageHeader from '../components/ui/PageHeader'
import PropertyCard from '../components/ui/PropertyCard'

function parseFiltersFromParams(searchParams) {
  const amenitiesParam = searchParams.get('amenities') || ''
  return {
    ...defaultFilters,
    location: searchParams.get('location') || '',
    type: searchParams.get('type') || '',
    query: searchParams.get('q') || '',
    bedrooms: searchParams.get('bedrooms') || '',
    minPrice: searchParams.get('minPrice') || '',
    maxPrice: searchParams.get('maxPrice') || '',
    amenities: amenitiesParam
      ? amenitiesParam.split(',').map((item) => item.trim()).filter(Boolean)
      : [],
  }
}

export default function Properties() {
  const [searchParams, setSearchParams] = useSearchParams()
  const { isFavorite, toggleFavorite } = useFavorites()
  const [filters, setFilters] = useState(() => parseFiltersFromParams(searchParams))
  const [applied, setApplied] = useState(() => parseFiltersFromParams(searchParams))
  const [priceError, setPriceError] = useState('')
  const [showFilters, setShowFilters] = useState(false)

  useEffect(() => {
    const next = parseFiltersFromParams(searchParams)
    setFilters(next)
    setApplied(next)
    setPriceError('')
  }, [searchParams])

  const results = useMemo(
    () => filterProperties(properties, applied),
    [applied],
  )

  const syncParams = (next) => {
    const params = new URLSearchParams()
    if (next.location) params.set('location', next.location)
    if (next.type) params.set('type', next.type)
    if (next.query) params.set('q', next.query)
    if (next.bedrooms) params.set('bedrooms', next.bedrooms)
    if (next.minPrice) params.set('minPrice', next.minPrice)
    if (next.maxPrice) params.set('maxPrice', next.maxPrice)
    if (next.amenities?.length) params.set('amenities', next.amenities.join(','))
    setSearchParams(params)
  }

  const applyFilters = () => {
    if (
      filters.minPrice !== '' &&
      filters.maxPrice !== '' &&
      Number(filters.minPrice) > Number(filters.maxPrice)
    ) {
      setPriceError('Minimum price cannot be greater than maximum price.')
      return
    }
    setPriceError('')
    setApplied(filters)
    syncParams(filters)
    setShowFilters(false)
  }

  const resetFilters = () => {
    setFilters(defaultFilters)
    setApplied(defaultFilters)
    setPriceError('')
    setSearchParams({})
    setShowFilters(false)
  }

  return (
    <section className="section-space">
      <div className="container-page">
        <PageHeader
          eyebrow="Categories & Filters"
          title="Find your Flex Living home"
          description="Filter by location, property type, price range, bedrooms, and amenities — then apply to update listings."
        />

        <div className="mb-4 flex items-center justify-between gap-3 lg:hidden">
          <p className="text-sm font-semibold text-muted">
            {results.length} properties found
          </p>
          <button
            type="button"
            onClick={() => setShowFilters((v) => !v)}
            className="rounded-xl border border-line bg-white px-3 py-2 text-sm font-semibold text-brand sm:px-4"
          >
            {showFilters ? 'Hide filters' : 'Show filters'}
          </button>
        </div>

        <div className="grid gap-5 md:gap-6 lg:grid-cols-[260px_minmax(0,1fr)] lg:items-start xl:grid-cols-[300px_minmax(0,1fr)]">
          <div className={`${showFilters ? 'block' : 'hidden'} lg:block`}>
            <FilterPanel
              filters={filters}
              onChange={(next) => {
                setFilters(next)
                if (priceError) setPriceError('')
              }}
              onApply={applyFilters}
              onReset={resetFilters}
              priceError={priceError}
            />
          </div>

          <div className="min-w-0">
            <div className="mb-5 hidden items-center justify-between gap-3 lg:flex">
              <p className="text-sm font-semibold text-muted">
                Showing{' '}
                <span className="text-ink">{results.length}</span> of{' '}
                {properties.length} properties
              </p>
            </div>

            {results.length ? (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3">
                {results.map((property) => (
                  <PropertyCard
                    key={property.id}
                    property={property}
                    isFavorite={isFavorite(property.id)}
                    onToggleFavorite={toggleFavorite}
                  />
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-line bg-white px-4 py-14 text-center sm:px-6 sm:py-16">
                <h2 className="text-xl font-bold">No properties match</h2>
                <p className="mt-2 text-sm text-muted">
                  Try adjusting your filters or resetting to see all listings.
                </p>
                <button
                  type="button"
                  onClick={resetFilters}
                  className="mt-5 text-sm font-bold text-accent hover:underline"
                >
                  Reset filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

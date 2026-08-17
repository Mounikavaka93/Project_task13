import { RotateCcw, SlidersHorizontal } from 'lucide-react'
import {
  amenitiesList,
  locations,
  propertyTypes,
} from '../../data/properties'
import Button from './Button'

const defaultFilters = {
  location: '',
  type: '',
  bedrooms: '',
  minPrice: '',
  maxPrice: '',
  amenities: [],
  query: '',
}

export { defaultFilters }

export default function FilterPanel({
  filters,
  onChange,
  onApply,
  onReset,
  priceError = '',
}) {
  const toggleAmenity = (amenity) => {
    const current = filters.amenities || []
    const next = current.includes(amenity)
      ? current.filter((item) => item !== amenity)
      : [...current, amenity]
    onChange({ ...filters, amenities: next })
  }

  const handleNumber = (key, value) => {
    if (value === '' || /^\d+$/.test(value)) {
      onChange({ ...filters, [key]: value })
    }
  }

  const activeCount = [
    filters.location,
    filters.type,
    filters.bedrooms,
    filters.minPrice,
    filters.maxPrice,
    filters.query,
    ...(filters.amenities?.length ? ['amenities'] : []),
  ].filter(Boolean).length

  return (
    <aside className="rounded-2xl border border-line bg-white p-5 shadow-sm lg:sticky lg:top-24">
      <div className="mb-5 flex items-center justify-between gap-3">
        <h2 className="flex items-center gap-2 text-lg font-bold">
          <SlidersHorizontal className="h-5 w-5 text-accent" />
          Filters
          {activeCount > 0 && (
            <span className="rounded-full bg-accent px-2 py-0.5 text-xs font-bold text-white">
              {activeCount}
            </span>
          )}
        </h2>
      </div>

      <div className="space-y-5">
        {/* Location */}
        <div>
          <label className="label-field" htmlFor="filter-location">
            Location
          </label>
          <select
            id="filter-location"
            className="input-field h-11 appearance-none"
            value={filters.location}
            onChange={(e) => onChange({ ...filters, location: e.target.value })}
          >
            <option value="">All locations</option>
            {locations.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        {/* Property type */}
        <div>
          <label className="label-field" htmlFor="filter-type">
            Property type
          </label>
          <select
            id="filter-type"
            className="input-field h-11 appearance-none"
            value={filters.type}
            onChange={(e) => onChange({ ...filters, type: e.target.value })}
          >
            <option value="">All types</option>
            {propertyTypes.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        {/* Price range */}
        <div>
          <p className="label-field">Price range (₹ / month)</p>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="mb-1.5 block text-xs font-medium text-muted" htmlFor="filter-min">
                Min
              </label>
              <input
                id="filter-min"
                inputMode="numeric"
                className={`input-field h-11 ${priceError ? 'border-danger' : ''}`}
                placeholder="e.g. 20000"
                value={filters.minPrice}
                onChange={(e) => handleNumber('minPrice', e.target.value)}
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-medium text-muted" htmlFor="filter-max">
                Max
              </label>
              <input
                id="filter-max"
                inputMode="numeric"
                className={`input-field h-11 ${priceError ? 'border-danger' : ''}`}
                placeholder="e.g. 100000"
                value={filters.maxPrice}
                onChange={(e) => handleNumber('maxPrice', e.target.value)}
              />
            </div>
          </div>
          {priceError && (
            <p className="error-text" role="alert">
              {priceError}
            </p>
          )}
        </div>

        {/* Bedrooms */}
        <div>
          <p className="label-field">Bedrooms</p>
          <div className="grid grid-cols-3 gap-2">
            <button
              type="button"
              onClick={() => onChange({ ...filters, bedrooms: '' })}
              className={`rounded-xl border px-2 py-2.5 text-xs font-bold transition ${
                !filters.bedrooms
                  ? 'border-accent bg-accent text-white'
                  : 'border-line bg-mist text-muted hover:border-accent/40'
              }`}
            >
              Any
            </button>
            {[1, 2, 3, 4, 5].map((n) => {
              const active = String(filters.bedrooms) === String(n)
              return (
                <button
                  key={n}
                  type="button"
                  onClick={() =>
                    onChange({ ...filters, bedrooms: active ? '' : String(n) })
                  }
                  className={`rounded-xl border px-2 py-2.5 text-xs font-bold transition ${
                    active
                      ? 'border-accent bg-accent text-white'
                      : 'border-line bg-mist text-muted hover:border-accent/40'
                  }`}
                >
                  {n}+
                </button>
              )
            })}
          </div>
        </div>

        {/* Amenities */}
        <div>
          <p className="label-field">Amenities</p>
          <div className="flex flex-wrap gap-2">
            {amenitiesList.map((amenity) => {
              const active = (filters.amenities || []).includes(amenity)
              return (
                <button
                  key={amenity}
                  type="button"
                  aria-pressed={active}
                  onClick={() => toggleAmenity(amenity)}
                  className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                    active
                      ? 'bg-accent text-white'
                      : 'bg-mist text-muted hover:bg-line'
                  }`}
                >
                  {amenity}
                </button>
              )
            })}
          </div>
        </div>

        {/* Keyword (optional helper) */}
        <div>
          <label className="label-field" htmlFor="filter-query">
            Keyword
          </label>
          <input
            id="filter-query"
            className="input-field h-11"
            placeholder="Search by area or title"
            value={filters.query}
            onChange={(e) => onChange({ ...filters, query: e.target.value })}
          />
        </div>

        {/* Apply / Reset */}
        <div className="grid grid-cols-2 gap-2 border-t border-line pt-4">
          <Button type="button" variant="outline" className="w-full" onClick={onReset}>
            <RotateCcw className="h-4 w-4" />
            Reset
          </Button>
          <Button type="button" className="w-full" onClick={onApply}>
            Apply
          </Button>
        </div>
      </div>
    </aside>
  )
}

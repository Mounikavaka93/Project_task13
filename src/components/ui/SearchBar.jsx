import { Building2, MapPin, Search } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { locations, propertyTypes } from '../../data/properties'
import Button from './Button'

export default function SearchBar({
  compact = false,
  initial = {},
  labeled = false,
}) {
  const navigate = useNavigate()
  const [location, setLocation] = useState(initial.location || '')
  const [type, setType] = useState(initial.type || '')
  const [query, setQuery] = useState(initial.query || '')
  const [error, setError] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    if (!location && !type && !query.trim()) {
      setError('Please choose a location, property type, or enter a keyword.')
      return
    }
    setError('')
    const params = new URLSearchParams()
    if (location) params.set('location', location)
    if (type) params.set('type', type)
    if (query.trim()) params.set('q', query.trim())
    navigate(`/properties?${params.toString()}`)
  }

  return (
    <form
      onSubmit={handleSearch}
      className="w-full rounded-2xl border border-white/25 bg-white p-3 shadow-[0_24px_60px_-28px_rgba(15,44,36,0.55)] sm:p-4 md:p-5"
      role="search"
      aria-label="Property search"
    >
      <div
        className={`grid items-end gap-3 ${
          compact
            ? 'md:grid-cols-[1.2fr_1fr_auto]'
            : 'md:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1fr_auto]'
        }`}
      >
        {!compact && (
          <div className="min-w-0">
            {labeled && (
              <label
                htmlFor="hero-query"
                className="mb-1.5 block text-xs font-bold uppercase tracking-[0.12em] text-muted"
              >
                Keyword
              </label>
            )}
            <div className="relative">
              {!labeled && <span className="sr-only">Search properties</span>}
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
              <input
                id="hero-query"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value)
                  if (error) setError('')
                }}
                placeholder="Area, landmark, or keyword"
                className="input-field h-12 pl-10"
              />
            </div>
          </div>
        )}

        <div className="min-w-0">
          {labeled && (
            <label
              htmlFor="hero-location"
              className="mb-1.5 block text-xs font-bold uppercase tracking-[0.12em] text-muted"
            >
              Location
            </label>
          )}
          <div className="relative">
            {!labeled && <span className="sr-only">Location</span>}
            <MapPin className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
            <select
              id="hero-location"
              value={location}
              onChange={(e) => {
                setLocation(e.target.value)
                if (error) setError('')
              }}
              className="input-field h-12 appearance-none pl-10"
            >
              <option value="">Any location</option>
              {locations.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="min-w-0">
          {labeled && (
            <label
              htmlFor="hero-type"
              className="mb-1.5 block text-xs font-bold uppercase tracking-[0.12em] text-muted"
            >
              Property type
            </label>
          )}
          <div className="relative">
            {!labeled && <span className="sr-only">Property type</span>}
            <Building2 className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
            <select
              id="hero-type"
              value={type}
              onChange={(e) => {
                setType(e.target.value)
                if (error) setError('')
              }}
              className="input-field h-12 appearance-none pl-10"
            >
              <option value="">Any type</option>
              {propertyTypes.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className={labeled ? 'md:col-span-2 lg:col-span-1 lg:pb-0' : ''}>
          {labeled && (
            <span className="mb-1.5 hidden text-xs font-bold uppercase tracking-[0.12em] text-transparent lg:block">
              Action
            </span>
          )}
          <Button
            type="submit"
            size="lg"
            className="h-12 w-full px-5 lg:min-w-[168px]"
          >
            <Search className="h-4 w-4" />
            Search Properties
          </Button>
        </div>
      </div>

      {error && (
        <p className="error-text px-1 pt-2" role="alert">
          {error}
        </p>
      )}
    </form>
  )
}

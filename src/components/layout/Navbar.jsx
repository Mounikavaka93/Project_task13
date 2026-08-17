import { MapPin, Menu, Search, X } from 'lucide-react'
import { useEffect, useId, useRef, useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { locations } from '../../data/properties'
import Button from '../ui/Button'

const links = [
  { to: '/', label: 'Home' },
  { to: '/properties', label: 'Properties' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [query, setQuery] = useState('')
  const [selectedLocation, setSelectedLocation] = useState('')
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const menuId = useId()
  const menuRef = useRef(null)
  const toggleRef = useRef(null)

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return undefined

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }

    const onPointerDown = (event) => {
      const target = event.target
      if (
        menuRef.current?.contains(target) ||
        toggleRef.current?.contains(target)
      ) {
        return
      }
      setOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('pointerdown', onPointerDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('pointerdown', onPointerDown)
    }
  }, [open])

  const goToSearch = (event) => {
    event.preventDefault()
    const params = new URLSearchParams()
    const trimmed = query.trim()
    if (selectedLocation) params.set('location', selectedLocation)
    if (trimmed) params.set('q', trimmed)
    navigate(params.toString() ? `/properties?${params.toString()}` : '/properties')
    setOpen(false)
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition duration-300 ${
        scrolled || open
          ? 'border-line bg-white/95 shadow-sm backdrop-blur-md'
          : 'border-transparent bg-surface/90 backdrop-blur-sm'
      }`}
    >
      <div className="container-page flex h-16 items-center gap-3 lg:h-[72px] lg:gap-5">
        {/* Brand */}
        <Link
          to="/"
          className="flex shrink-0 items-center gap-2.5"
          aria-label="Flex Living home"
        >
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand text-sm font-extrabold text-sand">
            FL
          </span>
          <span className="font-display text-base font-extrabold tracking-tight text-brand min-[360px]:text-lg sm:text-xl">
            Flex Living
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Primary"
        >
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `rounded-lg px-3 py-2 text-sm font-semibold transition ${
                  isActive
                    ? 'bg-mist text-accent'
                    : 'text-muted hover:bg-mist hover:text-ink'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop search / location */}
        <form
          onSubmit={goToSearch}
          className="ml-auto hidden min-w-0 flex-1 items-center gap-2 lg:flex lg:max-w-md xl:max-w-lg"
          role="search"
        >
          <label className="relative min-w-0 flex-[1.1]">
            <span className="sr-only">Search properties</span>
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search area or keyword"
              className="h-10 w-full rounded-xl border border-line bg-white py-2 pl-10 pr-3 text-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
            />
          </label>
          <label className="relative w-[140px] shrink-0 xl:w-[160px]">
            <span className="sr-only">Location</span>
            <MapPin className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="h-10 w-full appearance-none rounded-xl border border-line bg-white py-2 pl-9 pr-7 text-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
            >
              <option value="">Location</option>
              {locations.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </label>
          <Button type="submit" size="sm" className="h-10 shrink-0 px-4">
            Search
          </Button>
        </form>

        {/* Desktop auth */}
        <div className="hidden shrink-0 items-center gap-2 lg:flex">
          <Button to="/login" variant="ghost" size="sm">
            Login
          </Button>
          <Button to="/signup" size="sm">
            Sign Up
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          ref={toggleRef}
          type="button"
          className="ml-auto grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-line bg-white text-brand transition hover:bg-mist lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          id={menuId}
          ref={menuRef}
          className="border-t border-line bg-white lg:hidden"
        >
          <div className="container-page flex max-h-[calc(100svh-4rem)] flex-col gap-1 overflow-y-auto py-4">
            <form onSubmit={goToSearch} className="mb-3 space-y-2" role="search">
              <label className="relative block">
                <span className="sr-only">Search properties</span>
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search area or keyword"
                  className="input-field h-11 pl-10"
                />
              </label>
              <label className="relative block">
                <span className="sr-only">Location</span>
                <MapPin className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="input-field h-11 appearance-none pl-10"
                >
                  <option value="">Any location</option>
                  {locations.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </label>
              <Button type="submit" className="w-full" size="md">
                <Search className="h-4 w-4" />
                Search properties
              </Button>
            </form>

            <nav className="flex flex-col gap-1" aria-label="Mobile">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `rounded-xl px-3 py-3 text-sm font-semibold transition ${
                      isActive ? 'bg-mist text-accent' : 'text-ink hover:bg-mist'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            <div className="mt-3 grid grid-cols-2 gap-2 border-t border-line pt-3">
              <Button to="/login" variant="outline" className="w-full">
                Login
              </Button>
              <Button to="/signup" className="w-full">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

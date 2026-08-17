import {
  Bath,
  BedDouble,
  Building2,
  CalendarDays,
  Check,
  Heart,
  MapPin,
  Maximize,
  Star,
} from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getPropertyById, properties } from '../data/properties'
import { useFavorites } from '../hooks/useFavorites'
import { formatPrice, validateEmail, validatePhone } from '../utils/helpers'
import Button from '../components/ui/Button'
import ImageGallery from '../components/ui/ImageGallery'
import PropertyCard from '../components/ui/PropertyCard'

const emptyForm = {
  name: '',
  email: '',
  phone: '',
  message: '',
}

export default function PropertyDetails() {
  const { id } = useParams()
  const property = getPropertyById(id)
  const { isFavorite, toggleFavorite } = useFavorites()
  const bookingRef = useRef(null)
  const [form, setForm] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    setForm(emptyForm)
    setErrors({})
    setSubmitted(false)
  }, [id])

  if (!property) {
    return (
      <section className="section-space">
        <div className="container-page max-w-lg text-center">
          <h1 className="text-3xl font-extrabold">Property not found</h1>
          <p className="mt-3 text-muted">
            This listing may have been removed or the link is incorrect.
          </p>
          <Button to="/properties" className="mt-6">
            Back to listings
          </Button>
        </div>
      </section>
    )
  }

  const related = properties
    .filter((item) => item.id !== property.id && item.location === property.location)
    .slice(0, 3)

  const validate = () => {
    const next = {}
    if (!form.name.trim() || form.name.trim().length < 2) {
      next.name = 'Please enter your full name.'
    }
    if (!validateEmail(form.email)) {
      next.email = 'Enter a valid email address.'
    }
    if (!validatePhone(form.phone)) {
      next.phone = 'Enter a valid phone number.'
    }
    if (!form.message.trim() || form.message.trim().length < 10) {
      next.message = 'Message should be at least 10 characters.'
    }
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!validate()) return
    setSubmitted(true)
  }

  const scrollToBooking = () => {
    bookingRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="section-space">
      <div className="container-page">
        <nav className="mb-6 text-sm text-muted" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-accent">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link to="/properties" className="hover:text-accent">
            Properties
          </Link>
          <span className="mx-2">/</span>
          <span className="text-ink">{property.neighborhood}</span>
        </nav>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(300px,0.85fr)] lg:items-start">
          <div className="min-w-0">
            {/* Image gallery */}
            <ImageGallery images={property.images} title={property.title} />

            <div className="mt-8 space-y-6">
              {/* Property information */}
              <div className="rounded-2xl border border-line bg-white p-5 sm:p-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0">
                    <p className="inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-[0.14em] text-accent">
                      <Building2 className="h-4 w-4" />
                      {property.type}
                    </p>
                    <h1 className="mt-2 text-2xl font-extrabold sm:text-3xl md:text-4xl">
                      {property.title}
                    </h1>

                    {/* Location */}
                    <p className="mt-3 flex items-start gap-2 text-muted">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span>
                        {property.neighborhood}, {property.location}, India
                      </span>
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => toggleFavorite(property.id)}
                    className="inline-flex w-fit shrink-0 items-center gap-2 rounded-xl border border-line bg-white px-4 py-2.5 text-sm font-semibold transition hover:border-danger/30 hover:text-danger"
                  >
                    <Heart
                      className={`h-4 w-4 ${
                        isFavorite(property.id) ? 'fill-danger text-danger' : ''
                      }`}
                    />
                    {isFavorite(property.id) ? 'Saved' : 'Save'}
                  </button>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {[
                    { icon: BedDouble, label: `${property.bedrooms} BHK` },
                    { icon: Bath, label: `${property.bathrooms} Bathrooms` },
                    { icon: Maximize, label: `${property.area} sq ft` },
                    {
                      icon: Star,
                      label: `${property.rating} (${property.reviews} reviews)`,
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex min-h-[92px] flex-col justify-center rounded-xl border border-line bg-surface px-3 py-3 text-sm font-semibold"
                    >
                      <item.icon className="mb-2 h-4 w-4 text-accent" />
                      <span className="leading-snug">{item.label}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap items-center gap-3 lg:hidden">
                  <p className="font-display text-2xl font-extrabold text-brand">
                    {formatPrice(property.price)}
                    <span className="text-sm font-semibold text-muted"> /mo</span>
                  </p>
                  <Button type="button" onClick={scrollToBooking}>
                    Contact / Book Now
                  </Button>
                </div>
              </div>

              {/* Description */}
              <div className="rounded-2xl border border-line bg-white p-5 sm:p-6">
                <h2 className="text-xl font-bold">Description</h2>
                <p className="mt-3 leading-relaxed text-muted">
                  {property.description}
                </p>
              </div>

              {/* Availability */}
              <div className="rounded-2xl border border-line bg-white p-5 sm:p-6">
                <h2 className="text-xl font-bold">Availability</h2>
                <p className="mt-3 inline-flex items-center gap-2 rounded-xl bg-mist px-3.5 py-2.5 text-sm font-semibold text-brand">
                  <CalendarDays className="h-4 w-4 text-accent" />
                  {property.availability}
                </p>
              </div>

              {/* Amenities */}
              <div className="rounded-2xl border border-line bg-white p-5 sm:p-6">
                <h2 className="text-xl font-bold">Amenities</h2>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {property.amenities.map((amenity) => (
                    <li
                      key={amenity}
                      className="flex items-center gap-2 rounded-xl border border-line bg-surface px-3 py-2.5 text-sm font-medium text-ink"
                    >
                      <span className="grid h-6 w-6 place-items-center rounded-full bg-white text-accent">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      {amenity}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Price + Contact / Book Now */}
          <aside
            id="booking"
            ref={bookingRef}
            className="min-w-0 scroll-mt-28 lg:sticky lg:top-24 lg:self-start"
          >
            <div className="rounded-2xl border border-line bg-white p-5 shadow-sm sm:p-6">
              <p className="text-sm font-semibold text-muted">Price</p>
              <p className="mt-1 break-words font-display text-3xl font-extrabold text-brand sm:text-4xl">
                {formatPrice(property.price)}
                <span className="text-base font-semibold text-muted"> /mo</span>
              </p>

              <div className="mt-4 space-y-2 rounded-xl bg-mist p-3 text-sm">
                <p className="flex items-start gap-2 text-muted">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span>
                    {property.neighborhood}, {property.location}
                  </span>
                </p>
                <p className="flex items-start gap-2 text-muted">
                  <CalendarDays className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span>{property.availability}</span>
                </p>
              </div>

              {submitted ? (
                <div className="mt-6 rounded-xl border border-accent/20 bg-mist p-4 text-sm text-brand">
                  <p className="font-bold">Booking request sent</p>
                  <p className="mt-1 text-muted">
                    Thanks {form.name.split(' ')[0]}! Our team will contact you
                    shortly about this property.
                  </p>
                  <Button
                    type="button"
                    variant="outline"
                    className="mt-4 w-full"
                    onClick={() => {
                      setSubmitted(false)
                      setForm(emptyForm)
                    }}
                  >
                    Send another request
                  </Button>
                </div>
              ) : (
                <form className="mt-6 space-y-4" onSubmit={handleSubmit} noValidate>
                  <h2 className="text-lg font-bold">Contact / Book Now</h2>

                  <div>
                    <label className="label-field" htmlFor="book-name">
                      Full name
                    </label>
                    <input
                      id="book-name"
                      name="name"
                      className={`input-field h-11 ${errors.name ? 'border-danger' : ''}`}
                      value={form.name}
                      onChange={handleChange}
                    />
                    {errors.name && <p className="error-text">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="label-field" htmlFor="book-email">
                      Email
                    </label>
                    <input
                      id="book-email"
                      name="email"
                      type="email"
                      className={`input-field h-11 ${errors.email ? 'border-danger' : ''}`}
                      value={form.email}
                      onChange={handleChange}
                    />
                    {errors.email && <p className="error-text">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="label-field" htmlFor="book-phone">
                      Phone
                    </label>
                    <input
                      id="book-phone"
                      name="phone"
                      className={`input-field h-11 ${errors.phone ? 'border-danger' : ''}`}
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                    />
                    {errors.phone && <p className="error-text">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="label-field" htmlFor="book-message">
                      Message
                    </label>
                    <textarea
                      id="book-message"
                      name="message"
                      rows={4}
                      className={`input-field resize-y ${errors.message ? 'border-danger' : ''}`}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Share your preferred move-in dates..."
                    />
                    {errors.message && (
                      <p className="error-text">{errors.message}</p>
                    )}
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Contact / Book Now
                  </Button>
                </form>
              )}
            </div>
          </aside>
        </div>

        {related.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-extrabold sm:text-3xl">
              More in {property.location}
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3">
              {related.map((item) => (
                <PropertyCard
                  key={item.id}
                  property={item}
                  isFavorite={isFavorite(item.id)}
                  onToggleFavorite={toggleFavorite}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

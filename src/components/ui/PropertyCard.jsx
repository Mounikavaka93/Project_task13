import { Bath, BedDouble, Heart, MapPin, Maximize, Sparkles, Star } from 'lucide-react'
import { useState } from 'react'
import { formatPrice } from '../../utils/helpers'
import Button from './Button'

const FALLBACK_IMAGE =
  'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80'

export default function PropertyCard({
  property,
  isFavorite,
  onToggleFavorite,
  showFeaturedBadge = false,
}) {
  const [imgSrc, setImgSrc] = useState(property.images?.[0] || FALLBACK_IMAGE)

  if (!property) return null

  const handleFavorite = (event) => {
    event.preventDefault()
    event.stopPropagation()
    onToggleFavorite?.(property.id)
  }

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-accent/35 hover:shadow-[0_22px_44px_-24px_rgba(15,44,36,0.5)]">
      {/* Property image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-mist">
        <img
          src={imgSrc}
          alt={property.title}
          className="h-full w-full object-cover transition-transform duration-500 ease-out will-change-transform group-hover:scale-110"
          loading="lazy"
          onError={() => setImgSrc(FALLBACK_IMAGE)}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand/45 via-transparent to-transparent transition-opacity duration-300 group-hover:opacity-90" />

        {/* Property type */}
        <span className="absolute left-3 top-3 rounded-lg bg-white/95 px-2.5 py-1 text-xs font-bold text-brand shadow-sm backdrop-blur transition duration-300 group-hover:bg-white">
          {property.type}
        </span>

        {showFeaturedBadge && property.featured && (
          <span className="absolute left-3 top-12 inline-flex items-center gap-1 rounded-lg bg-sand px-2.5 py-1 text-xs font-bold text-brand shadow-sm transition duration-300 group-hover:translate-y-0.5">
            <Sparkles className="h-3 w-3" />
            Featured
          </span>
        )}

        {/* Favorite / heart icon */}
        <button
          type="button"
          aria-label={isFavorite ? 'Remove from favorites' : 'Save to favorites'}
          aria-pressed={Boolean(isFavorite)}
          onClick={handleFavorite}
          className="absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full bg-white/95 text-muted shadow-sm backdrop-blur transition duration-300 hover:scale-110 hover:text-danger group-hover:bg-white"
        >
          <Heart
            className={`h-4 w-4 transition duration-300 ${
              isFavorite ? 'fill-danger text-danger scale-110' : ''
            }`}
          />
        </button>

        {/* Price */}
        <div className="absolute bottom-3 left-3 rounded-lg bg-brand/92 px-2.5 py-1.5 text-sm font-bold text-white shadow-sm backdrop-blur transition duration-300 group-hover:translate-y-[-2px] group-hover:bg-brand">
          {formatPrice(property.price)}
          <span className="font-medium text-white/75"> /mo</span>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4 sm:p-5">
        {/* Title + rating */}
        <div className="flex items-start justify-between gap-3">
          <h3 className="min-w-0 flex-1 line-clamp-2 text-base font-bold leading-snug text-ink transition-colors duration-300 group-hover:text-accent sm:text-lg">
            {property.title}
          </h3>
          <div
            className="flex shrink-0 items-center gap-1 rounded-full bg-mist px-2.5 py-1 text-xs font-bold text-brand transition duration-300 group-hover:bg-accent/10"
            title={`${property.rating} rating from ${property.reviews} reviews`}
          >
            <Star className="h-3 w-3 fill-sand text-sand" />
            <span>{property.rating}</span>
            <span className="font-medium text-muted">({property.reviews})</span>
          </div>
        </div>

        {/* Location */}
        <p className="flex min-w-0 items-start gap-1.5 text-sm text-muted">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
          <span className="leading-snug">
            {property.neighborhood}, {property.location}
          </span>
        </p>

        {/* Details */}
        <ul className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs font-semibold text-muted">
          <li className="inline-flex items-center gap-1">
            <BedDouble className="h-3.5 w-3.5 text-accent" aria-hidden />
            {property.bedrooms} BHK
          </li>
          <li className="inline-flex items-center gap-1">
            <Bath className="h-3.5 w-3.5 text-accent" aria-hidden />
            {property.bathrooms} Bath
          </li>
          <li className="inline-flex items-center gap-1">
            <Maximize className="h-3.5 w-3.5 text-accent" aria-hidden />
            {property.area} sq ft
          </li>
        </ul>

        {/* View Details button */}
        <div className="mt-auto border-t border-line pt-4">
          <Button
            to={`/properties/${property.id}`}
            size="sm"
            variant="secondary"
            className="w-full transition duration-300 group-hover:bg-brand-soft"
          >
            View Details
          </Button>
        </div>
      </div>
    </article>
  )
}

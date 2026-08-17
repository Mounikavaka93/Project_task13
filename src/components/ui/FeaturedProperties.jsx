import { ArrowRight } from 'lucide-react'
import { properties } from '../../data/properties'
import { useFavorites } from '../../hooks/useFavorites'
import Button from './Button'
import PropertyCard from './PropertyCard'

export default function FeaturedProperties({ limit = 6 }) {
  const featured = properties.filter((property) => property.featured).slice(0, limit)
  const { isFavorite, toggleFavorite } = useFavorites()

  if (!featured.length) return null

  return (
    <section className="section-space bg-white" aria-labelledby="featured-heading">
      <div className="container-page">
        <div className="mb-6 flex flex-col gap-4 sm:mb-8 md:mb-10 md:flex-row md:items-end md:justify-between">
          <div className="min-w-0 max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-accent">
              Featured
            </p>
            <h2 id="featured-heading" className="section-title mt-2">
              Featured properties
            </h2>
            <p className="mt-2 text-sm text-muted sm:text-base">
              {featured.length} handpicked Flex Living rentals with smooth
              browsing, hover previews, and quick access to full details.
            </p>
          </div>
          <Button to="/properties" variant="outline" className="w-fit shrink-0">
            View all
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3">
          {featured.map((property, index) => (
            <div
              key={property.id}
              className="animate-fade-up h-full"
              style={{ animationDelay: `${index * 70}ms` }}
            >
              <PropertyCard
                property={property}
                isFavorite={isFavorite(property.id)}
                onToggleFavorite={toggleFavorite}
                showFeaturedBadge
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

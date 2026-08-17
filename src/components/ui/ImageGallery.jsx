import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function ImageGallery({ images = [], title }) {
  const [active, setActive] = useState(0)

  useEffect(() => {
    setActive(0)
  }, [images])

  useEffect(() => {
    if (images.length <= 1) return undefined

    const onKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        setActive((prev) => (prev - 1 + images.length) % images.length)
      }
      if (event.key === 'ArrowRight') {
        setActive((prev) => (prev + 1) % images.length)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [images.length])

  if (!images.length) return null

  const safeIndex = Math.min(active, images.length - 1)

  const go = (dir) => {
    setActive((prev) => (prev + dir + images.length) % images.length)
  }

  return (
    <div className="space-y-3" aria-label={`${title} image gallery`}>
      <div className="relative overflow-hidden rounded-2xl border border-line bg-mist">
        <img
          src={images[safeIndex]}
          alt={`${title} photo ${safeIndex + 1}`}
          className="aspect-[16/10] w-full object-cover transition duration-500"
          key={images[safeIndex]}
        />
        {images.length > 1 && (
          <>
            <button
              type="button"
              aria-label="Previous image"
              onClick={() => go(-1)}
              className="absolute left-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white/95 text-brand shadow transition hover:scale-105 hover:bg-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Next image"
              onClick={() => go(1)}
              className="absolute right-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white/95 text-brand shadow transition hover:scale-105 hover:bg-white"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}
        <div className="absolute bottom-3 right-3 rounded-lg bg-brand/85 px-2.5 py-1 text-xs font-semibold text-white">
          {safeIndex + 1} / {images.length}
        </div>
      </div>

      <div
        className={`grid gap-2 sm:gap-3 ${
          images.length <= 2
            ? 'grid-cols-2'
            : images.length === 3
              ? 'grid-cols-3'
              : 'grid-cols-2 sm:grid-cols-4'
        }`}
      >
        {images.map((image, index) => (
          <button
            key={`${image}-${index}`}
            type="button"
            aria-label={`Show image ${index + 1}`}
            aria-current={index === safeIndex}
            onClick={() => setActive(index)}
            className={`overflow-hidden rounded-xl border-2 transition duration-300 ${
              index === safeIndex
                ? 'border-accent opacity-100'
                : 'border-transparent opacity-75 hover:opacity-100'
            }`}
          >
            <img
              src={image}
              alt={`${title} thumbnail ${index + 1}`}
              className="aspect-[4/3] w-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}

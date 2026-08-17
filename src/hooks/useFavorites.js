import { useCallback, useEffect, useState } from 'react'

const STORAGE_KEY = 'flex-living-favorites'

export function useFavorites() {
  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites))
  }, [favorites])

  const toggleFavorite = useCallback((id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    )
  }, [])

  const isFavorite = useCallback(
    (id) => favorites.includes(id),
    [favorites],
  )

  return { favorites, toggleFavorite, isFavorite }
}

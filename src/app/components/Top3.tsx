'use client'

import { useEffect, useState } from 'react'
import { Album as AlbumIcon } from 'lucide-react'
import Image from 'next/image'
import {
  getTopAlbums,
  type LastFmTopAlbum
} from '../lib/lastfm'

export default function Top3() {
  const [albums, setAlbums]   = useState<LastFmTopAlbum[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      try {
        const top = await getTopAlbums(3)
        setAlbums(top)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  if (loading) {
    return (
      <div className="animate-pulse rounded-lg p-6 w-full max-w-md mx-auto border border-gray-600">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="h-4 bg-gray-800 rounded my-2" />
        ))}
      </div>
    )
  }

  return (
    <div className="m-4 rounded-lg p-3 w-full max-w-md mx-auto border border-white">
      <div className="flex items-center gap-2 mb-3">
        <AlbumIcon className="w-5 h-5 text-purple-500" />
        <h3 className="font-semibold text-base">Top 3 Albums</h3>
      </div>
      <ul className="space-y-4">
        {albums.map((album, idx) => {
          const img = album.image.find(img => img.size === 'medium')?.['#text']
          return (
            <li
              key={`${album.name}-${album.artist.name}`}
              className="flex items-center gap-3"
            >
              {img ? (
                <Image
                  src={img}
                  alt={album.name}
                  width={40}
                  height={40}
                  className="rounded"
                  unoptimized
                />
              ) : (
                <div className="w-10 h-10 bg-gray-700 rounded" />
              )}
              <div>
                <p className="font-medium">
                  {idx + 1}. {album.name}
                </p>
                <p className="text-gray-400 text-xs">
                  by {album.artist.name} • {album.playcount} plays
                </p>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

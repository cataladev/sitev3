'use client'

import { useEffect, useState } from 'react'
import { Music } from 'lucide-react'
import { getCurrentTrack, type LastFmRecentTrack } from '../lib/lastfm'
import Image from 'next/image'

export default function ListeningActivity() {
  const [currentTrack, setCurrentTrack] = useState<LastFmRecentTrack | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const track = await getCurrentTrack()
        setCurrentTrack(track || null)
      } catch (error) {
        console.error('Error fetching data:', error)
        setCurrentTrack(null)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
    const interval = setInterval(fetchData, 15000)
    return () => clearInterval(interval)
  }, [])

  if (loading) {
    return (
      <div className="animate-pulse rounded-lg p-6 w-full max-w-md mx-auto border border-gray-600">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-6 h-6 bg-gray-800 rounded-full" />
          <div className="h-5 bg-gray-800 rounded w-32" />
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="w-32 h-32 bg-gray-800 rounded-lg" />
          <div className="space-y-2 w-full text-center">
            <div className="h-6 bg-gray-800 rounded w-3/4 mx-auto" />
            <div className="h-4 bg-gray-800 rounded w-1/2 mx-auto" />
          </div>
        </div>
      </div>
    )
  }

  const artistName = currentTrack?.artist?.name ?? 'Unknown Artist'
  const albumArt = currentTrack?.image?.find(img => img.size === 'extralarge')?.['#text']

  return (
    <div className="rounded-lg p-3 w-full max-w-[220px] mx-auto border border-white">
      {currentTrack && (
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-2 mb-1">
            <Music className="w-5 h-5 text-purple-500" />
            <h3 className="font-semibold text-base"> 
              {currentTrack['@attr']?.nowplaying ? 'Now listening to' : 'Most recently Played'}
            </h3>
          </div>

          {albumArt && (
            <div className="relative w-28 h-28 rounded-lg overflow-hidden mx-auto">
              <Image
                src={albumArt}
                alt="Album art"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
                unoptimized
              />
            </div>
          )}
          
          <div className="text-center space-y-0.5"> 
            <p className="font-medium text-lg">{currentTrack.name}</p> 
            <p className="text-gray-400 text-xs"> 
              {artistName}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
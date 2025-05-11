'use client'

import { useEffect, useState } from 'react'
import { Music } from 'lucide-react'
import { getCurrentTrack, type LastFmRecentTrack } from '../lib/lastfm'
import Image from 'next/image'

export default function ListeningActivity() {
  const [currentTrack, setCurrentTrack] = useState<LastFmRecentTrack | null>(null)
  const [loading, setLoading] = useState(true)
  const [isPlaying, setIsPlaying] = useState(false)
  const [lastPlayedTime, setLastPlayedTime] = useState<string | null>(null)

  useEffect(() => {
    async function load() {
      try {
        setLoading(true)
        const track = await getCurrentTrack()
        setCurrentTrack(track || null)
        setIsPlaying(track?.['@attr']?.nowplaying === 'true')
        
        // Handle last played time
        if (track && !track?.['@attr']?.nowplaying && track.date) {
          try {
            const timestamp = Number(track.date.uts) * 1000;
            const minutes = Math.floor((Date.now() - timestamp) / 60000);
            
            if (minutes < 60) {
              setLastPlayedTime(`${minutes}m`);
            } else if (minutes < 1440) { // less than a day
              setLastPlayedTime(`${Math.floor(minutes / 60)}h`);
            } else {
              setLastPlayedTime(`${Math.floor(minutes / 1440)}d`);
            }
          } catch (e) {
            setLastPlayedTime(null);
          }
        } else {
          setLastPlayedTime(null);
        }
      } catch (error) {
        console.error('error fetching data:', error)
        setCurrentTrack(null)
        setIsPlaying(false)
        setLastPlayedTime(null)
      } finally {
        setLoading(false)
      }
    }

    load()
    const interval = setInterval(load, 15000)
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

  const artistName = currentTrack?.artist?.['#text'] || currentTrack?.artist?.name || 'unknown artist'
  const albumArt = currentTrack?.image?.find(img => img.size === 'extralarge')?.['#text']

  return (
    <div className="rounded-lg p-3 sm:p-4 w-auto min-w-[220px] sm:min-w-[260px] max-w-xs mx-auto border border-white bg-black bg-opacity-100 animate-fade-in">
      {currentTrack && (
        <div className="flex flex-col items-center gap-2 sm:gap-3">
          <div className="flex items-center gap-2 mb-1">
            <Music className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500 flex-shrink-0" />
            <h3 className="font-semibold text-sm sm:text-base lowercase"> 
              {isPlaying ? 'now listening to' : 'most recently played'}
            </h3>
          </div>

          {albumArt && (
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-lg overflow-hidden mx-auto flex-shrink-0">
              <Image src={albumArt} alt="album art" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" unoptimized />
            </div>
          )}
          
          <div className="text-center w-full"> 
            <p className="font-medium text-base sm:text-lg lowercase break-words hyphens-auto">{currentTrack.name}</p> 
            <p className="text-gray-400 text-xs sm:text-sm lowercase break-words hyphens-auto">
              by {artistName}
              {!isPlaying && lastPlayedTime && <span className="ml-1">• {lastPlayedTime} ago</span>}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
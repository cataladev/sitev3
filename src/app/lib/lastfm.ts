import axios from 'axios'
export type LastFmRecentTrack = {
    name: string
    artist: {
      '#text': string
      name?: string
    }
    image: Array<{
      '#text': string
      size: string
    }>
    '@attr'?: {
      nowplaying: 'true'
    }
  }

export async function getCurrentTrack() {
  try {
    const apiKey = process.env.NEXT_PUBLIC_LASTFM_API_KEY
    const username = process.env.NEXT_PUBLIC_LASTFM_USERNAME

    const params = new URLSearchParams({
      method: 'user.getRecentTracks',
      user: username || '',
      api_key: apiKey || '',
      limit: '1',
      format: 'json',
      extended: '1'
    })

    const response = await axios.get('https://ws.audioscrobbler.com/2.0/', { params })
    const tracks = response.data.recenttracks.track

    if (tracks.length > 0) {
      return tracks[0] as LastFmRecentTrack
    }
    return null

  } catch (error) {
    console.error('Error getting current track: ', error)
    return null
  }
}
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
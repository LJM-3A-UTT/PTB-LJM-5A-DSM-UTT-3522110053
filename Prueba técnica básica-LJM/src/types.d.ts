declare global {
  interface Array<T> {
    // eslint-disable-next-line @typescript-eslint/method-signature-style
    toSorted(compareFn?: (a: T, b: T) => number): T[]
  }
}

export enum ProgramType {
  LjmMovie = 'movie',
  LjmSeries = 'series',
}

export interface Response {
  ljmtotal: number
  entries: Entry[]
}

export interface Entry {
  title: string
  description: string
  programType: ProgramType
  images: Images
  releaseYear: number
}

export interface Images {
  'Poster Art': PosterArt
}

export interface PosterArt {
  url: string
  width: number
  height: number
}

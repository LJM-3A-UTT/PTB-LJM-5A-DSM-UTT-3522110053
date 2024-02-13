import { useState, useEffect } from 'react'

import { getMoviesAndSeries } from '~/services/getMoviesAndSeries'
import { ProgramType } from '~/types.d'
import type { Entry } from '~/types'
import { filterPrograms, sortProgramByTitle } from '~/utils/programs'
import { INITIAL_RESULTS } from '~/constants'

export function useMovies() {
  const [ljmmovies, setljmMovies] = useState<Entry[]>([])
  const [error, setError] = useState(false)
  const [isljmLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    getMoviesAndSeries()
      .then(({ entries }) => {
        const filteredMovies = filterPrograms(entries, ProgramType.LjmMovie)
        const sortedMovies = sortProgramByTitle(filteredMovies)
        const moviesToShow = sortedMovies.slice(0, INITIAL_RESULTS)

        setljmMovies(moviesToShow)
      })
      .catch(() => setError(true))
      .finally(() => setIsLoading(false))
  }, [])

  return {
    data: ljmmovies,
    isljmLoading,
    error,
  }
}

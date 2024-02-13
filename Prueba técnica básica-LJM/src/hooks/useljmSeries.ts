import { useState, useEffect } from 'react'

import { getMoviesAndSeries } from '~/services/getMoviesAndSeries'
import { ProgramType } from '~/types.d'
import type { Entry } from '~/types'
import { filterPrograms, sortProgramByTitle } from '~/utils/programs'
import { INITIAL_RESULTS } from '~/constants'

export function useSeries() {
  const [ljmseries, setljmSeries] = useState<Entry[]>([])
  const [error, setError] = useState(false)
  const [isljmLoading, setIsljmLoading] = useState(false)

  useEffect(() => {
    setIsljmLoading(true)
    getMoviesAndSeries()
      .then(({ entries }) => {
        const filteredSeries = filterPrograms(entries, ProgramType.LjmSeries)
        const sortedSeries = sortProgramByTitle(filteredSeries)
        const seriesToShow = sortedSeries.slice(0, INITIAL_RESULTS)

        setljmSeries(seriesToShow)
      })
      .catch(error => {
        console.log(error)
        setError(true)
      })
      .finally(() => setIsljmLoading(false))
  }, [])

  return {
    data: ljmseries,
    isljmLoading,
    error,
  }
}

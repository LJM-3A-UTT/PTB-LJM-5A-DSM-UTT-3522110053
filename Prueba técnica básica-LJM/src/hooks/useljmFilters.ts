import { useState } from 'react'

import { INITIAL_RELEASE_YEAR, INITIAL_RESULTS } from '~/constants'

export function useFilters() {
  const [ljmmaxResults, setljmMaxResults] = useState(INITIAL_RESULTS)
  const [ljmreleaseYear, setljmReleaseYear] = useState(INITIAL_RELEASE_YEAR)

  const handleljmMaxResults = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setljmMaxResults(Number(e.target.value))
  }

  const handleljmReleaseYear = (e: React.ChangeEvent<HTMLInputElement>) => {
    setljmReleaseYear(Number(e.target.value))
  }

  return {
    ljmmaxResults,
    handleljmMaxResults,
    ljmreleaseYear,
    handleljmReleaseYear,
  }
}

import { EmptyComponentWrapper } from '~/components/ljmEmptyComponentWrapper'
import { EmptyData } from '~/components/ljmEmptyData'
import { ErrorComponent } from '~/components/ljmErrorComponent'
import { FilterMaxResults, FilterReleaseYear } from '~/components/ljmFilters'
import { ListPrograms } from '~/components/ljmListPrograms'
import { useFilters } from '~/hooks/useljmFilters'
import { useSeries } from '~/hooks/useljmSeries'
import Layout from '~/layouts/ljmLayout'
import type { Entry } from '~/types'

export default function Series() {
  const { data, error, isljmLoading } = useSeries()
  const { handleljmMaxResults, ljmmaxResults, handleljmReleaseYear, ljmreleaseYear } = useFilters()

  const dataToShow = data.slice(0, ljmmaxResults).filter(item => item.releaseYear >= ljmreleaseYear)

  // console.log('Data:', data)
  // console.log('Error:', error)
  // console.log('isLoading:', isljmLoading)
  // console.log('ljmmaxResults:', ljmmaxResults)
  // console.log('ljmreleaseYear:', ljmreleaseYear)
  // console.log('Data to Show:', dataToShow)

  if (error) {
    return <ErrorComponent />
  }

  return (
    <Layout title="Popular Series">
      {isljmLoading ? null : (
        <div className="flex flex-wrap gap-4">
          <FilterMaxResults ljmmaxResults={ljmmaxResults} onChange={handleljmMaxResults} />
          <FilterReleaseYear releaseYear={ljmreleaseYear} onChange={handleljmReleaseYear} />
        </div>
      )}
      <EmptyComponentWrapper<Entry[]>
        data={dataToShow}
        isljmLoading={isljmLoading}
        ljmEmptyComponent={<EmptyData />}
        ljmNonEmptyComponent={<ListPrograms data={dataToShow} />}
      />
    </Layout>
  )
}

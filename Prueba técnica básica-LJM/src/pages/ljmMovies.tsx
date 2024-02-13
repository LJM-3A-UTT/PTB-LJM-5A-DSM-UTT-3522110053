import { EmptyComponentWrapper } from '~/components/ljmEmptyComponentWrapper'
import { EmptyData } from '~/components/ljmEmptyData'
import { ErrorComponent } from '~/components/ljmErrorComponent'
import { FilterMaxResults, FilterReleaseYear } from '~/components/ljmFilters'
import { ListPrograms } from '~/components/ljmListPrograms'
import { useFilters } from '~/hooks/useljmFilters'
import { useMovies } from '~/hooks/useljmMovies'
import Layout from '~/layouts/ljmLayout'
import type { Entry } from '~/types'

export default function Movies() {
  const { data, error, isljmLoading } = useMovies()
  const { handleljmMaxResults, ljmmaxResults, handleljmReleaseYear, ljmreleaseYear } = useFilters()

  const dataToShow = data.slice(0, ljmmaxResults).filter(item => item.releaseYear >= ljmreleaseYear)

  if (error) {
    return <ErrorComponent />
  }

  return (
    <Layout title="Popular Movies">
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

import isEmpty from 'lodash.isempty'

import { Loader } from './ljmLoader'

interface ComponentProps<T> {
  isljmLoading: boolean
  data: T
  ljmEmptyComponent: React.ReactNode
  ljmNonEmptyComponent: React.ReactNode
}

export function EmptyComponentWrapper<T>({
  data,
  ljmEmptyComponent,
  ljmNonEmptyComponent,
  isljmLoading,
}: ComponentProps<T>) {
  return (
    <div>
      {isljmLoading ? <Loader /> : isEmpty(data) ? ljmEmptyComponent : ljmNonEmptyComponent}
    </div>
  )
}

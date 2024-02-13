import { Link } from 'react-router-dom'

import { Card } from '~/components/Card'
import Layout from '~/layouts/ljmLayout'

export default function ljmHome() {
  return (
    <Layout title="Populares Recientemente">
      <ul className="flex gap-4">
        <li>
          <Link to="/ljmseries">
            <Card title="Las Series Más Populares">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl text-white">ljmSeries</span>
              </div>
            </Card>
          </Link>
        </li>
        <li>
          <Link to="/ljmmovies">
            <Card title="Las Peliculas Más Populares">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl text-white">ljmMovies</span>
              </div>
            </Card>
          </Link>
        </li>
      </ul>
    </Layout>
  )
}

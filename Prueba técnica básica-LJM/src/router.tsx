import { createBrowserRouter } from 'react-router-dom'

import Home from './pages/ljmHome'
import Series from './pages/ljmSeries'
import Movies from './pages/ljmMovies'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/ljmseries',
    element: <Series />,
  },
  {
    path: '/ljmmovies',
    element: <Movies />,
  },
])

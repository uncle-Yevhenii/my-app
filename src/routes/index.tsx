import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ROUTE_NAME } from './routes-name'
import { LibraryPage, StopwatchPage } from '@/pages'

const router = createBrowserRouter([
  {
    path: ROUTE_NAME.LIBRARY,
    element: <LibraryPage />,
  },
  {
    path: ROUTE_NAME.STOPWATCH,
    element: <StopwatchPage />,
  },
])

export function AppRouter() {
  return <RouterProvider router={router} />
}

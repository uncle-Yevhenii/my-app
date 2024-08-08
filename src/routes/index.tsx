import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import StopwatchRoutes from './stopwatch.routes'

const router = createBrowserRouter([...StopwatchRoutes])

export function AppRouter() {
  return <RouterProvider router={router} />
}

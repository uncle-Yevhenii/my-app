import { StopwatchPage, InfoPage, AboutPage, StatsPage, CommentsPage } from '@/pages'
import { STOPWATCH_ROUTE_PATH } from './routes-name'

export default [
  {
    path: STOPWATCH_ROUTE_PATH.STOPWATCH,
    element: <StopwatchPage />,
    children: [
      {
        path: STOPWATCH_ROUTE_PATH.ABOUT,
        element: <AboutPage />,
      },
      {
        path: STOPWATCH_ROUTE_PATH.INFO,
        element: <InfoPage />,
        children: [
          {
            path: STOPWATCH_ROUTE_PATH.STATS,
            element: <StatsPage />,
          },
          {
            path: STOPWATCH_ROUTE_PATH.COMMENTS,
            element: <CommentsPage />,
          },
        ],
      },
    ],
  },
]

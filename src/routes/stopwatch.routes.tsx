import { StopwatchPage } from '@/pages'
import { STOPWATCH_ROUTE_PATH } from './routes-name'
import { Link, Outlet } from 'react-router-dom'

export default [
  {
    path: STOPWATCH_ROUTE_PATH.STOPWATCH,
    element: <StopwatchPage />,
    children: [
      {
        path: STOPWATCH_ROUTE_PATH.ABOUT,
        element: <div>about</div>,
      },
      {
        path: STOPWATCH_ROUTE_PATH.INFO,
        element: (
          <div>
            <Link to={STOPWATCH_ROUTE_PATH.STATS}>stats</Link>
            <Link to={STOPWATCH_ROUTE_PATH.COMMENTS}>comments</Link>
            <Outlet />
          </div>
        ),
        children: [
          {
            path: STOPWATCH_ROUTE_PATH.STATS,
            element: <div>stats</div>,
          },
          {
            path: STOPWATCH_ROUTE_PATH.COMMENTS,
            element: <div>comments</div>,
          },
        ],
      },
    ],
  },
]

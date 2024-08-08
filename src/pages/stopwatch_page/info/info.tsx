import { NavLink, Outlet } from 'react-router-dom'

import { STOPWATCH_ROUTE_PATH } from '@/routes/routes-name'

import style from './style.module.css'
import clsx from 'clsx'

export default function InfoPage() {
  const isActive = ({ isActive, isPending }: { isActive: boolean; isPending: boolean }) =>
    clsx(
      style.info__link,
      isActive && style.info__linkActive,
      isPending && style.info__linkPending
    )

  return (
    <section className={style.info__container}>
      <ul className={style.info__list}>
        <li className={style.info__item}>
          <NavLink to={STOPWATCH_ROUTE_PATH.STATS} className={isActive}>
            Stats
          </NavLink>
        </li>
        <li>
          <NavLink to={STOPWATCH_ROUTE_PATH.COMMENTS} className={isActive}>
            Comments
          </NavLink>
        </li>
      </ul>

      <div>
        <Outlet />
      </div>
    </section>
  )
}

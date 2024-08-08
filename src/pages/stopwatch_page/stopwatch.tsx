import { Stopwatch } from '@/components/stopwatch/stopwatch'

import style from './style.module.css'
import { Outlet } from 'react-router-dom'

import { useAppSelector } from '@/redux/hook'

export default function StopwatchPage() {
  const state = useAppSelector((state) => state.info.info__visible)

  return (
    <div className={style.section__wrapper}>
      <Stopwatch />

      {state && <Outlet />}
    </div>
  )
}

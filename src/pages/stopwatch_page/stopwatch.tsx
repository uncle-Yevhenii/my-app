import { Stopwatch } from '@/components/stopwatch/stopwatch'

import style from './style.module.css'
import { Outlet } from 'react-router-dom'
import { useState } from 'react'

export default function StopwatchPage() {
  const [state, setState] = useState(true)

  return (
    <section className={style.section__wrapper}>
      <Stopwatch />

      {state && <Outlet />}
    </section>
  )
}

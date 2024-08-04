import { start, stop, pause, tick } from '../../redux.store/stopwatch/slice.stopwatch'
import { useAppDispatch, useAppSelector } from '../../redux.store/hook'
import { useEffect } from 'react'

export const NewStopwatch = () => {
  const INTERVAL_DELAY: number = 1000

  const state = useAppSelector((state) => state.stopwatch)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!state.running) {
      return
    }
    const ref = setTimeout(() => dispatch(tick()), INTERVAL_DELAY)
    return () => clearTimeout(ref)
  }, [state, dispatch])

  return (
    <div>
      <div>{`${state.hours}:${state.minutes}:${state.second}`}</div>
      <div>
        <button onClick={() => dispatch(start())}>Start</button>
      </div>
      <div>
        <button onClick={() => dispatch(pause())}>Pause</button>
      </div>
      <div>
        <button onClick={() => dispatch(stop())}>Stop</button>
      </div>
    </div>
  )
}

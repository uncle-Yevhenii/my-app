import { start, stop, restart, tick } from '../../redux.store/stopwatch/slice.stopwatch'
import { useAppDispatch, useAppSelector } from '../../redux.store/hook'
import { useEffect } from 'react'

export const NewStopwatch = () => {
  const state = useAppSelector((state) => state.stopwatch)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!state.running) {
      return
    }
    const ref = setTimeout(() => dispatch(tick()), 1000)
    return () => clearTimeout(ref)
  }, [state, dispatch])

  return (
    <div>
      <div>{state.ticks}s</div>
      <div>
        <button onClick={() => dispatch(start())}>Start</button>
      </div>
      <div>
        <button onClick={() => dispatch(stop())}>Stop</button>
      </div>
      <div>
        <button onClick={() => dispatch(restart())}>Restart</button>
      </div>
    </div>
  )
}

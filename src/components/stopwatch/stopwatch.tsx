import { useEffect } from 'react'

import { pause, start, tick, toggleModal } from '@redux/stopwatch/slice.stopwatch'
import { useAppDispatch, useAppSelector } from '@redux/hook'
import { formatTime } from './helpers'
import { RootModal } from './modal/root.modal'

export function Stopwatch() {
  const INTERVAL_DELAY: number = 1000

  const state = useAppSelector((state) => state.stopwatch.stopwatch__cfg)
  const modal = useAppSelector((state) => state.stopwatch.modal__cfg)
  const dispatch = useAppDispatch()
  useEffect(() => {
    if (!state.running) {
      return
    }
    const ref = setTimeout(() => dispatch(tick()), INTERVAL_DELAY)
    return () => clearTimeout(ref)
  }, [state, dispatch])

  return (
    <section>
      <div>{formatTime(state.hours, state.minutes, state.second)}</div>

      {!state.running ? (
        <button
          onClick={(e) => {
            if (state.second === 0 && state.minutes === 0 && state.hours === 0) {
              return dispatch(
                toggleModal({ modal: !modal.open, text: e.currentTarget.textContent })
              )
            }
            return dispatch(start())
          }}
        >
          Start
        </button>
      ) : (
        <button
          onClick={() => {
            dispatch(pause())
          }}
        >
          Pause
        </button>
      )}

      <button
        onClick={(e) => {
          dispatch(pause())
          dispatch(toggleModal({ modal: !modal.open, text: e.currentTarget.textContent }))
        }}
        disabled={
          state.second === 0 && state.minutes === 0 && state.hours === 0 ? true : false
        }
      >
        Stop
      </button>

      <RootModal />
    </section>
  )
}

import { useEffect } from 'react'

import { pause, start, tick, toggleModal } from '@redux/stopwatch/slice.stopwatch'
import { useAppDispatch, useAppSelector } from '@redux/hook'
import { InfoIcon, PauseIcon, PlayIcon, QueryStatsIcon, StopIcon } from '../images'
import { formatTime } from './helpers'
import { RootModal } from './modal/root.modal'

import style from './style.module.css'

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
    <>
      <section className={style.stopwatch__container}>
        <div className={style.stopwatch__display}>
          <p>{formatTime(state.hours, state.minutes, state.second)}</p>
        </div>
        <div className={style.stopwatch__control}>
          <button className={style.stopwatch__buttonSecondary}>
            <InfoIcon size={20} color="#534d46" />
          </button>
          <div className={style.stopwatch__controlPrimary}>
            {!state.running ? (
              <button
                className={style.stopwatch__button}
                onClick={(e) => {
                  if (state.second === 0 && state.minutes === 0 && state.hours === 0) {
                    return dispatch(
                      toggleModal({
                        modal: !modal.open,
                        buttonText: e.currentTarget.children[0].id,
                      })
                    )
                  }
                  return dispatch(start())
                }}
              >
                <PlayIcon size={60} color="#534d46" />
              </button>
            ) : (
              <button
                className={style.stopwatch__button}
                onClick={() => {
                  dispatch(pause())
                }}
              >
                <PauseIcon size={30} color="#534d46" />
              </button>
            )}

            <button
              className={style.stopwatch__button}
              onClick={(e) => {
                dispatch(pause())
                dispatch(
                  toggleModal({
                    modal: !modal.open,
                    buttonText: e.currentTarget.children[0].id,
                  })
                )
              }}
              disabled={
                state.second === 0 && state.minutes === 0 && state.hours === 0
                  ? true
                  : false
              }
            >
              <StopIcon size={30} color="#534d46" />
            </button>
          </div>
          <button className={style.stopwatch__buttonSecondary}>
            <QueryStatsIcon size={15} color="#534d46" />
          </button>
        </div>
      </section>
      <RootModal />
    </>
  )
}

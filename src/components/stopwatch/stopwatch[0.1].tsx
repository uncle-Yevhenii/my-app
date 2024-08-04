import { useState, useEffect, useRef } from 'react'
import { formatTime, pause, start, stop } from './helpers'
import { PlayIcon, PauseIcon, StopIcon } from '../images'

import style from './style.module.css'
import { ButtonStopwatch } from './button.stopwatch/button'

export function Stopwatch() {
  const INTERVAL_DELAY: number = 10

  const [isRunning, setIsRunning] = useState<boolean>(false)
  const [elapsedTime, setElapsedTime] = useState<number>(0)
  const intervalIdRef = useRef<number>(0)
  const startTimeRef = useRef<number>(0)

  useEffect(() => {
    if (isRunning) {
      intervalIdRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current)
      }, INTERVAL_DELAY)
    }

    return () => {
      clearInterval(intervalIdRef.current)
    }
  }, [isRunning])

  return (
    <div className={style.stopwatch_container}>
      <div className={style.display}>{formatTime(elapsedTime)}</div>
      <div className={style.controls}>
        {!isRunning ? (
          <ButtonStopwatch
            children={<PlayIcon size={20} color="#37332f" />}
            btnClickType={() => start(setIsRunning, startTimeRef, elapsedTime)}
            variant={'start'}
          />
        ) : (
          <ButtonStopwatch
            children={<PauseIcon size={20} color="#37332f" />}
            btnClickType={() => pause(setIsRunning)}
            variant={'pause'}
          />
        )}
        <ButtonStopwatch
          children={<StopIcon size={20} color="#37332f" />}
          btnClickType={() => stop(setElapsedTime, setIsRunning)}
          variant={'stop'}
        />
      </div>
    </div>
  )
}

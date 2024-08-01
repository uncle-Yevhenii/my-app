import { useState, useEffect, useRef } from 'react'
import { formatTime, pause, start, stop } from './helpers'

export function Stopwatch() {
  const [isRunning, setIsRunning] = useState<boolean>(false)
  const [elapsedTime, setElapsedTime] = useState<number>(0)
  const intervalIdRef = useRef<number>(0)
  const startTimeRef = useRef<number>(0)

  useEffect(() => {
    if (isRunning) {
      intervalIdRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current)
      }, 10)
    }

    return () => {
      clearInterval(intervalIdRef.current)
    }
  }, [isRunning])

  return (
    <div className="stopwatch">
      <div className="display">{formatTime(elapsedTime)}</div>
      <div className="controls">
        <button onClick={() => start(setIsRunning, startTimeRef, elapsedTime)} className="start-button">
          Start
        </button>
        <button onClick={() => pause(setIsRunning)} className="stop-button">
          Pause
        </button>
        <button onClick={() => stop(setElapsedTime, setIsRunning)} className="reset-button">
          Stop
        </button>
      </div>
    </div>
  )
}

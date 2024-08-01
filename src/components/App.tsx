import { useEffect, useRef, useState } from 'react'
import style from './App.module.css'

export default function App() {
  const [isRunning, setIsRunning] = useState(false)
  const [elapsedTime, setElapsedTime] = useState(0)
  const intervalIdRef = useRef(null)
  const startTimeRef = useRef(0)

  useEffect(() => {
    if (isRunning) {
      intervalIdRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current)
      }, 10)
    }

    return () => clearInterval(intervalIdRef.current)
  }, [isRunning])

  function start() {
    setIsRunning(true)
    startTimeRef.current = Date.now() - elapsedTime
  }
  function stop() {
    setIsRunning(false)
  }
  function reset() {
    setElapsedTime(0)
    setIsRunning(false)
  }
  function formatTime() {
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60))
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60)
    let seconds = Math.floor((elapsedTime / 1000) % 60)
    let milliseconds = Math.floor((elapsedTime % 1000) / 10)

    hours = String(hours).padStart(2, '0')
    minutes = String(minutes).padStart(2, '0')
    seconds = String(seconds).padStart(2, '0')
    milliseconds = String(milliseconds).padStart(2, '0')

    return `${hours}:${minutes}:${seconds}:${milliseconds}`
  }

  return (
    <>
      <section>
        <div>{formatTime()}</div>
        <div>
          <button type="button" onClick={start}>
            Start
          </button>
          <button type="button" onClick={stop}>
            Stop
          </button>
          <button type="button" onClick={reset}>
            Reset
          </button>
        </div>
      </section>
    </>
  )
}
// ;<section className={style.section}>
//   <div className={style.display}>DISPLAY</div>
//   <div className={style.btn_navigation}>
//     <div className={style.btn_wrapper}>
//       <button type="button" className={style.btn}>
//         PLAY
//       </button>
//       <button type="button" className={style.btn}>
//         STOP
//       </button>
//     </div>
//   </div>
// </section>

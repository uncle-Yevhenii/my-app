import React, { Dispatch } from 'react'

export const formatTime = (elapsedTime: number): string => {
  const h = String(Math.floor(elapsedTime / (1000 * 60 * 60))).padStart(2, '0')
  const m = String(Math.floor((elapsedTime / (1000 * 60)) % 60)).padStart(2, '0')
  const s = String(Math.floor((elapsedTime / 1000) % 60)).padStart(2, '0')
  const ms = String(Math.floor((elapsedTime % 1000) / 10)).padStart(2, '0')

  return `${h}:${m}:${s}:${ms}`
}

export const start = (
  setIsRunning: Dispatch<React.SetStateAction<boolean>>,
  startTimeRef: React.MutableRefObject<number>,
  elapsedTime: number
): void => {
  setIsRunning(true)
  startTimeRef.current = Date.now() - elapsedTime
}

export const pause = (setIsRunning: Dispatch<React.SetStateAction<boolean>>): void => {
  setIsRunning(false)
}

export const stop = (
  setElapsedTime: Dispatch<React.SetStateAction<number>>,
  setIsRunning: Dispatch<React.SetStateAction<boolean>>,
  openModal: Dispatch<React.SetStateAction<boolean>>
): void => {
  setElapsedTime(0)
  setIsRunning(false)
  openModal(true)
}

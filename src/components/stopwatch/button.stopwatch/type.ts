import { Dispatch } from 'react'

interface StateStopwatch {
  isRunning?: boolean
  setRunning?: Dispatch<React.SetStateAction<boolean>>
  elapsedTime?: number
  setElapsedTime?: Dispatch<React.SetStateAction<number>>
  startTimeRef?: React.MutableRefObject<number>
  intervalIdRef?: React.MutableRefObject<number>
}

export interface ButtonStopwatchProps extends StateStopwatch {
  variant: 'start' | 'pause' | 'stop'
  children: JSX.Element
  btnClickType: () => void
}

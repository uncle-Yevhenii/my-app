import { configureStore } from '@reduxjs/toolkit'
import stopwatchReducer from './stopwatch/slice.stopwatch'
import infoReducer from './stopwatch/slice.info'

export const store = configureStore({
  reducer: {
    stopwatch: stopwatchReducer,
    info: infoReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store

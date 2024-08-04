import { configureStore } from '@reduxjs/toolkit'
import stopwatchReducer from './stopwatch/slice.stopwatch'

export const store = configureStore({
  reducer: {
    stopwatch: stopwatchReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store

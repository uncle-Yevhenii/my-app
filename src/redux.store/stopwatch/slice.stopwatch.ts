import { createSlice } from '@reduxjs/toolkit'

export const stopwatchSlice = createSlice({
  name: 'stopwatch',
  initialState: {
    running: false,
    second: 0,
    minutes: 0,
    hours: 0,
  },
  reducers: {
    start: (state) => {
      state.running = true
    },
    pause: (state) => {
      state.running = false
    },
    stop: (state) => {
      state.running = false
      state.second = 0
      state.minutes = 0
      state.hours = 0
    },
    tick: (state) => {
      state.second += 1

      if (state.second === 60) {
        state.second = 0
        state.minutes += 1
      }

      if (state.minutes === 60) {
        state.minutes = 0
        state.hours += 1
      }
    },
  },
})

export const { start, stop, pause, tick } = stopwatchSlice.actions

export default stopwatchSlice.reducer

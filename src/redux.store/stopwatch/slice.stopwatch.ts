import { createSlice } from '@reduxjs/toolkit'

export const stopwatchSlice = createSlice({
  name: 'stopwatch',
  initialState: {
    running: false,
    ticks: 0,
  },
  reducers: {
    start: (state) => {
      state.running = true
    },
    stop: (state) => {
      state.running = false
    },
    restart: (state) => {
      state.running = false
      state.ticks = 0
    },
    tick: (state) => {
      state.ticks += 1
    },
  },
})

export const { start, stop, restart, tick } = stopwatchSlice.actions

export default stopwatchSlice.reducer

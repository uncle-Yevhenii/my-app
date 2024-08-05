import { createSlice } from '@reduxjs/toolkit'

export const stopwatchSlice = createSlice({
  name: 'stopwatch',
  initialState: {
    stopwatch__cfg: {
      running: false,
      second: 0,
      minutes: 0,
      hours: 0,
    },
    modal__cfg: {
      open: false,
      buttonText: '',
    },
  },
  reducers: {
    start: (state) => {
      state.stopwatch__cfg.running = true
    },
    pause: (state) => {
      state.stopwatch__cfg.running = false
    },
    stop: (state) => {
      state.stopwatch__cfg.second = 0
      state.stopwatch__cfg.minutes = 0
      state.stopwatch__cfg.hours = 0
    },
    tick: (state) => {
      state.stopwatch__cfg.second += 1

      if (state.stopwatch__cfg.second === 60) {
        state.stopwatch__cfg.second = 0
        state.stopwatch__cfg.minutes += 1
      }

      if (state.stopwatch__cfg.minutes === 60) {
        state.stopwatch__cfg.minutes = 0
        state.stopwatch__cfg.hours += 1
      }
    },

    toggleModal: (state, action) => {
      state.modal__cfg.open = action.payload.modal
      state.modal__cfg.buttonText = action.payload.buttonText
    },
  },
})

export const { start, stop, pause, tick, toggleModal } = stopwatchSlice.actions

export default stopwatchSlice.reducer

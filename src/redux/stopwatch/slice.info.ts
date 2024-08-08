import { createSlice } from '@reduxjs/toolkit'

export const infoSlice = createSlice({
  name: 'info',
  initialState: {
    info__stats: {},
    info__comments: {},
    info__visible: false,
  },
  reducers: {
    toggleInfo: (state, action) => {
      state.info__visible = action.payload
    },
  },
})

export const { toggleInfo } = infoSlice.actions

export default infoSlice.reducer

import {createSlice, PayloadAction} from '@reduxjs/toolkit'

import {RootState} from '../store'

interface CommonState {
  value: number
}

const initialState: CommonState = {
  value: 0,
}

export const common = createSlice({
  name: 'common',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})

export const {increment, decrement, incrementByAmount} = common.actions

export const selectCount = (state: RootState) => state.common.value

export default common.reducer

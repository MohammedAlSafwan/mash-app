import { Item } from "@mashedapp/models"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const cartSlice = createSlice({
  name: "cart",
  initialState: [] as Item[],
  reducers: {
    addItem: (state, { payload }: PayloadAction<Item>) => {
      state.push(payload)
    },
    removeItem: (state, { payload }: PayloadAction<{ id: number }>) => {
      const index = state.findIndex(item => item.id === payload.id)
      if (index !== -1) {
        state.splice(index, 1)
      }
    },
  },
  extraReducers: {},
})

export const { addItem, removeItem } = cartSlice.actions

export const cartReducer = cartSlice.reducer

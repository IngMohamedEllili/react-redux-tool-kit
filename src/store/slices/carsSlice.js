import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    data: [],
    searchTerm: ''
  },
  reducers: {
    addCar(state, action) {
      state.data.push({ id: nanoid(), ...action.payload })
    },
    removeCar(state, action) {
      state.data.splice(action.payload, 1)
    },
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload
    }
  }
})

export const { addCar, removeCar, changeSearchTerm } = carsSlice.actions
export const carsReducer = carsSlice.reducer
import { configureStore } from "@reduxjs/toolkit";
import { addCar, removeCar, carsReducer, changeSearchTerm } from "./slices/carsSlice";
import { formReducer, changeName, changeCost } from "./slices/formSlice";
const store = configureStore({
  reducer: {
    form: formReducer,
    cars: carsReducer
  }
})

export { store, changeName, changeCost, changeSearchTerm, addCar, removeCar }
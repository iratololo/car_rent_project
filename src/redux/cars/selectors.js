import { createSelector } from "@reduxjs/toolkit";

export const selectorCars = (state) => state.cars.cars.items;
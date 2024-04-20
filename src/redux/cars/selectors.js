import { createSelector } from "@reduxjs/toolkit";

const PER_PAGE = 4;

export const selectorAllCars = (state) => state.cars.cars.items;

export const selectorCarsPage = (state) => state.cars.cars.page;

export const selectorCars = createSelector(selectorAllCars, selectorCarsPage, (items, page) => {
    const start = PER_PAGE * (page - 1);
    const end = start + PER_PAGE;
    const paginatedData = items.slice(start, end);
    return paginatedData;
})
// export const handleGetCars = (state, { payload }) => {
//     state.cars.items.push(...payload);
// }

export const handleGetCars = (state, { payload }) => {
    state.cars.items=payload;
}
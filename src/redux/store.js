import { configureStore } from "@reduxjs/toolkit";
// import { persistStore, persistReducer, FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER, } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'

import { rootReducer } from "./root/slice";
import { carsReducer } from "./cars/sliceCars";

// const persistConfig = {
//     key: 'favorite',
//     storage,
//     whitelist: ['token']
// }

// const persistedReducer = persistReducer(persistConfig, authReducer)

const reducer = {
    cars: carsReducer,
    root: rootReducer,
}

// export const store = configureStore({ reducer, middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });
    
// export const persistor = persistStore(store)
export const store = configureStore({ reducer });

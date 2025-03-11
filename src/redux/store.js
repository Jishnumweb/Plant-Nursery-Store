import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./Features/Cartslice"; 
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// 🔹 Combine reducers (in case you add more reducers in the future)
const rootReducer = combineReducers({
  cart: cartReducer,
});

// 🔹 Persist Config
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"], // Only persist the cart
};

// 🔹 Apply persistReducer to the rootReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// 🔹 Create the store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Required for redux-persist
    }),
});

// 🔹 Persistor
export const persistor = persistStore(store);

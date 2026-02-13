import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage";

// persist config
const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

// combine reducers
const rootReducer = combineReducers({
  user: userReducer,
});

// persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
        ],
      },
    }),
});7

// persistor
   export const persistor = persistStore(store);

   export default store;



import { combineReducers, configureStore } from "@reduxjs/toolkit";
import postReducer from "../reducers/postReducer";
import storage from "redux-persist/lib/storage";
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, persistStore } from "redux-persist";

const persistConfig = {
    key: "root",
    version: 1,
    storage
};

const reducer = combineReducers({
    posts: postReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export default store;
export const persistor = persistStore(store);
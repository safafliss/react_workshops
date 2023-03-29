import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { persistReducer } from "redux-persist";
import rootReducers from "./reducers"
import storage from "redux-persist/lib/storage"

const persistConfig = {
    key: "root",
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducers)
export default configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
})
import { configureStore } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import authSlice from "./slices/authSlice/authSlice"

const store = configureStore({
    reducer: {
        authorization: authSlice.reducer
    },
    devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch
export const Dispatch = () => useDispatch<AppDispatch>()
export default store
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { formToggle, IAuthState, IForm } from "./types";

export const asyncSignIn = createAsyncThunk(
    'authorization/asyncSignIn',
    async (_, thunkAPI)=>{
        return {
            accessToken: 'accToken',
            refreshToken: 'refToken',
            id: '1',
            message: 'mess signIn'
        }
    } 
)
export const asyncSignUp = createAsyncThunk(
    'authorization/asyncSignUp',
    async (_, thunkAPI)=>{
        return {
            accessToken: 'accToken',
            refreshToken: 'refToken',
            id: '1',
            message: 'mess signUp'
        }
    } 
)

const initialState:IAuthState = {
    typeForm: formToggle.SIGN_UP,
    login: '',
    password: '',
    role: '',
    error: '',
}

const authSlice = createSlice({
    name: 'authorization',
    initialState,
    reducers:{
        changeLogin:(state, action:PayloadAction<string>) => {
            state.login = action.payload
        },
        changePassword:(state, action:PayloadAction<string>) => {
            state.password = action.payload
        },
        changeRole:(state, action:PayloadAction<string>) => {
            state.role = action.payload
        },
        toggle:(state, action:PayloadAction<IForm>) => {
            state.typeForm = action.payload
        },
        logout:state => {
            localStorage.clear()
        }
    },
    extraReducers:{
        [asyncSignUp.fulfilled.type]:(state, action:PayloadAction<any>)=>{
            localStorage.setItem('accessToken', JSON.stringify(action.payload.accessToken))
            localStorage.setItem('refreshToken', JSON.stringify(action.payload.refreshToken))
            localStorage.setItem('id', JSON.stringify(action.payload.id))
            state.login = ''
            state.error = ''
            state.password = ''
            state.role = ''
        },
        [asyncSignIn.fulfilled.type]:(state, action:PayloadAction<any>)=>{
            localStorage.setItem('accessToken', JSON.stringify(action.payload.accessToken))
            localStorage.setItem('refreshToken', JSON.stringify(action.payload.refreshToken))
            localStorage.setItem('id', JSON.stringify(action.payload.id))
            state.login = ''
            state.error = ''
            state.password = ''
            state.role = ''
        }
    }
})

export const {
    changeLogin,
    changePassword,
    changeRole,
    toggle,
    logout
} = authSlice.actions
export default authSlice
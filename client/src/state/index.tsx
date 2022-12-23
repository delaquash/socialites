import { createSlice } from "@reduxjs/toolkit";

interface State {
    mode: string,
    user: string | null,
    token: string | null,
    post: []
}

const initialState:State= {
    mode: "light",
    user: null,
    token: null,
    post: []

}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setMode: (state) => {
            state.mode = state.mode === "light" ? "dark" : "light";
        },
        setLogin: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token
        },
        setLogout: (state, action) => {
            state.user = null;
            state.token = null; 
        }
    }
})
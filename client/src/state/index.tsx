import { createSlice } from "@reduxjs/toolkit";
import { RootState } from './store';

interface State {
    mode: string,
    user:  any,
    token: string | null,
    posts: any[]
}

const initialState= {
    mode: "light",
    user: null,
    token: null,
    posts: []
} as State

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
        },
        setFriends: (state, action) => {
            if(state.user) {
                state.user.friends = action.payload.friends
            } else {
                console.error("User doesn't exist :(")
            }
        }, 
        setPosts: (state, action) => {
            state.posts = action.payload.post
        },
        setPost: (state, action)=> {
            const updatedPost = state.posts.map((post: any) => {
                if(post._id ===action.payload._id) return action.payload.post
                return post
            })
            state.posts = updatedPost
        }
    }
})

export const { setPost, setPosts, setFriends, setLogout, setLogin, setMode } = authSlice.actions;
export const selectRoot = (state: RootState ) => state.auth
export default authSlice.reducer;
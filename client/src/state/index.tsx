import { createSlice } from "@reduxjs/toolkit";

interface State {
    mode: string,
    user:  any,
    token: string | null,
    posts: []
}

const initialState:State= {
    mode: "light",
    user: null,
    token: null,
    posts: []

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
        // setPost: (state, action)=> {
        //     const updatedPost = state.posts.map((post) => {
        //         if(post._id ===)
        //     })
        // }
    }
})
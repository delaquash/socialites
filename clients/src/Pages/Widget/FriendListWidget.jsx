import { Box, Typography, useTheme } from "@mui/material";
import Friend from "./Friend";
import WidgetWrapper from "../../Components/WidgetWrapper";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFriends } from "../../state/authSlice";
import { useEffect } from "react";

const FriendListWidget = () => {
    const dispatch = useDispatch();
    const token = useSelector((state)=> state.token);
    const friends = useSelector((state)=> state.user.friends);
    const { palette } = useTheme();

    const getFriend = async() => {
        const res = await fetch (`http://localhost:5000/users/${userId}/friends`, {
            method: "GET",
            headers: { Authorization: `Bearer ${token}`}
        })
        const data = res.json()
        dispatch(setFriends({ friends: data}))
    }

    useEffect(()=> {
        getFriend()
    },[])
  return (
    <div>FriendListWidget</div>
  )
}

export default FriendListWidget
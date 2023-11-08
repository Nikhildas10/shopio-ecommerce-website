import { createSlice } from "@reduxjs/toolkit";

const wishSlice=createSlice({
    name:"wish",
    initialState:[],
    reducers:{
        addToWish:(state,action)=>{
            state.push(action.payload)
        },
        removeWish:(state,action)=>{
            return state.filter(i=>i.id!=action.payload)
        }
    }
})

export default wishSlice.reducer
export const {addToWish}=wishSlice.actions
export const {removeWish}=wishSlice.actions
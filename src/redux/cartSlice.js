import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },
    removeCart: (state, action) => {
      return state.filter((i) => i.id != action.payload);
    },
    clearCart:(state,action)=>{
        
        return []
         
    }
  }
});

export default cartSlice.reducer

export const {addToCart}=cartSlice.actions
export const {removeCart}=cartSlice.actions
export const {clearCart}=cartSlice.actions
import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import wishList from "./wishList";
import productSlice from "./productSlice";

const store=configureStore({
    reducer:{
cart:cartSlice,
wish:wishList,
productSlice
    }
})

export default store
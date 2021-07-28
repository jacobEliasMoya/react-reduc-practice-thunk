import  favoriteButton  from "./features/inputStringSlice";
import  {configureStore}  from "@reduxjs/toolkit";

export default configureStore ({
    reducer: {
        favorite: favoriteButton
    }
})
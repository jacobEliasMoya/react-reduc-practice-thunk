import { createSlice } from "@reduxjs/toolkit";

export const favoriteButton = createSlice({
    name: 'myfavorites',
    initialState:[],
    reducers:{
        addFavorite: (state,action) => {
            state.push(action.payload)
        }
    }
}) 

export const displayFavoriteButton = state => state;
export const {addFavorite} = favoriteButton.actions;
export default favoriteButton.reducer;

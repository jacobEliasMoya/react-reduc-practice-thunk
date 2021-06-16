import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
    isOneClicked : false,
    isTwoClicked : false,
    isThreeClicked : false,
}

const rootReducer = (state = initialState,action) => {
    switch(action.type){
        case 'oneclick':{
            return {
                ...state, 
                isOneClicked: state.isOneClicked = true,
            }
        } 
        case 'twoclick':{
            return {
                ...state, 
                isTwoClicked: state.isTwoClicked = true,
            }
        } 
        case 'threeclick':{
            return {
                ...state, 
                isThreeClicked: state.isThreeClicked = true,
            }
        } 
        default:
            return state
    }
}

export const store = createStore(rootReducer,applyMiddleware(thunk));
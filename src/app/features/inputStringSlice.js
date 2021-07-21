export const initialState = [];

export const enterTextReducer = (state=initialState,action) => {
    switch (action.type){
        case 'searchTerm/clearSearchTerm':
            return [...state.filter(elm=>!elm)];
        case 'searchTerm/enterSearchTerm':
            return [...state, action.payload];
        case 'searchTerm/backspace':
            return [...state.splice(0,state.length - 1)];
        case 'searchTerm/space':
            return [...state, ' '];
        default:
            return state
    }
}

export const clearSearchTerm = () => {return {type:'searchTerm/clearSearchTerm'}}

export const enterSearchTerm = (term) => {return {type:'searchTerm/enterSearchTerm',payload:term}}

export const insertSpace = () => {return {type:'searchTerm/space'}}

export const backSpaceText = () => {return {type:'searchTerm/backspace'}}



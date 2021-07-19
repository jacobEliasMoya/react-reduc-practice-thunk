const initialState = '';

export const enterTextReducer = (state=initialState,action) => {
    switch (action.type){
        case 'searchTerm/clearSearchTerm':
            return '';
        case 'searchTerm/enterSearchTerm':
            return action.payload;
    }
}

export const clearSearchTerm = () => {return {type:'searchTerm/clearSearchTerm'}}

export const enterSearchTerm = (term) => {return {type:'searchTerm/enterSearchTerm',payload:term}}



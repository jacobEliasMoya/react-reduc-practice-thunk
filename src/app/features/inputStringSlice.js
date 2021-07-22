export const initialState = {
    letters:[],
    words:[]
};

export const enterTextReducer = (state=initialState,action) => {
    switch (action.type){
        case 'searchTerm/clearSearchTerm':
            return {
                ...state,letters :[
                    ...state.letters.filter(elm=> !elm)
                ],
            }
        case 'searchTerm/enterSearchTerm':
            return {
                ...state,letters :[
                    ...state.letters, action.payload
                ]
            }
        case 'searchTerm/backspace':
            return {
                ...state,letters:[
                    ...state.letters.splice(0,state.letters.length - 1)
                ]
            };
        case 'searchTerm/space':
            return {
                ...state,letters :[
                    ...state.letters,' '
                ]
            }
        case 'searchTerm/search':
            return {
                ...state,words :[
                    ...state.words, state.letters.join('')
                ]
            }
        default:
            return state
    }
}

export const selectLetters = (state) => state.letters;

export const selectWords = (state) => state.words;

export const clearSearchTerm = () => {return {type:'searchTerm/clearSearchTerm'}}

export const enterSearchTerm = (term) => {return {type:'searchTerm/enterSearchTerm',payload:term}}

export const insertSpace = () => {return {type:'searchTerm/space'}}

export const backSpaceText = () => {return {type:'searchTerm/backspace'}}

export const searchText = () => {return {type:'searchTerm/search'}}



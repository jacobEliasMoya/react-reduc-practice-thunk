import React from 'react';
import { store } from './store';
import './style/styles.css'


export default function Buttonarea(props) {


    const oneClicked = () => {
        return {type: 'oneclick'};
    }

    const handleOneClick = () => {
        store.dispatch(oneClicked());
    } 

    const handleTwoClick = () => {
        store.dispatch(twoClicked());
    } 
    
    const handleThreeClick = () => {
        store.dispatch(threeClicked());
    } 

    const twoClicked = () => {
        return {type: 'twoclick'};
    }

    const threeClicked = () => {
        return {type: 'threeclick'};
    }



    return (
        <div >
            <button onClick={handleOneClick}>
                Switch 1
            </button>

            <button onClick={handleTwoClick}>
                Switch 2
            </button>

            <button onClick={handleThreeClick}>
                Switch 3
            </button>
        </div>    
    )
}

const showState = () => {
    console.log(store.getState());
}

store.subscribe(showState)

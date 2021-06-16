import React,{useState} from 'react';
import { store } from './store';
import './style/styles.css'


export default function Buttonarea() {




    const oneClicked = () => {
        return {type: 'oneclick'};
    }
    const twoClicked = () => {
        return {type: 'twoclick'};
    }

    const threeClicked = () => {
        return {type: 'threeclick'};
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
    let x = store.getState();
    console.log(x.isSubClicked);
}

store.subscribe(showState)

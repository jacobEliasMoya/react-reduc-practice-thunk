import React from 'react';
import './style/styles.css';
import {store} from './store';

// this will change the state based on click of the submit button, and change the button innerHTML to reflect the state

export default function Inputarea() {


    const subaction = () => {
        return {
            type: 'submitclick',
            payload: document.querySelector('input').value
        }
    }

    const changeButton = () => {
        document.querySelector('button').innerHTML = store.getState().isSubClicked;
    }

    const handleSubAction = () => {
        store.dispatch(subaction());
        changeButton();
        console.log(store.getState());
    }

    return (
        <div>
            <input></input>
            <button onClick={handleSubAction}>This is a button</button>
        </div>
    )
}

const showState = () => {
    let x = store.getState();
    console.log(x.isSubClicked);
}

store.subscribe(showState);

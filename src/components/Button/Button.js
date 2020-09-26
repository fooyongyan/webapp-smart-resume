import React from 'react';
import './Button.css';

export default function button ( props ) {
    return <button className="Button" onClick = {props.click}> {props.text} </button>
}
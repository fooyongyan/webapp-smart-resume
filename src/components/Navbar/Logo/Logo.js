import React from 'react';
import './Logo.css';
import Logo from '../../../resources/simple.svg'
export default function logo ( props ) {
    return (
        <div className="Logo"> 
            <img src= {Logo} alt="no"/>
        </div>
    );
}
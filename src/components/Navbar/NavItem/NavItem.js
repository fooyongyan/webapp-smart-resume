import React from 'react';
import './NavItem.css'
import {NavLink} from 'react-router-dom';
export default function navItem (props) {

    const activeStyle = {
        fontWeight: "bold",
    }
    return ( 
        <NavLink className = "NavItem" to={props.route} activeStyle={activeStyle}> {props.title}   </NavLink>
    )
}
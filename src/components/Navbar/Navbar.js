import React from 'react';
import NavItem from './NavItem/NavItem'
import Logo from './Logo/Logo'
import Aux from '../hoc/Auxiliary/Auxiliary'
import './Navbar.css'
export default function navbar ( props) {

    const links = [
        {title: "About Me", route: "/about"},
        {title: "Tech Proficiencies", route: "/proficiency"},
        {title: "My Portfolio", route: "/portfolio"},
        {title: "Contact Me", route: "/contacts"},
        {title: "Availability", route: "/availability"},
    ];

    return ( 
        <Aux>
            <Logo />
            <div className = "Navbar"> 
                {links.map(e => <NavItem title={e.title} route={e.route}/>)}
            </div>
        </Aux>
    )
}
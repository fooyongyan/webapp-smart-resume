import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import AboutMe from './AboutMe/AboutMe';
import Availability from './Availability/Availability';
import TechProficiency from './TechProficiency/TechProficiency';
import MyPortfolio from './Portfolio/Portfolio';
import ContactMe from './ContactMe/ContactMe';
/************************
 *  Routing for the Applicaiton
 */
export default function routing ( props ) {
    return (
        <Switch> 
            <Route path="/about" exact component = {AboutMe}/>
            <Route path="/proficiency" exact component = {TechProficiency}/>
            <Route path="/portfolio" exact component = {MyPortfolio}/>
            <Route path="/contacts" exact component = {ContactMe}/>
            <Route path="/availability" exact component = {Availability}/>
            <Redirect to="/about" />
        </Switch>
    );
}
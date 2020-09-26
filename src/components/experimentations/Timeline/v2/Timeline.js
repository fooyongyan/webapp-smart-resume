
import React from 'react';
import './Timeline.scss'
import Milestone from './Milestone/Milestone'

export default function timeline ( props ) {
    return ( 
    <section id="cd-timeline" class="cd-container">
        {props.data.map(e=><Milestone data = {e}/>)}
    </section> );
}
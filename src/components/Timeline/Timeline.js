
import React from 'react';
import './Timeline.scss'
import Milestone from './Milestone/Milestone'

/**************************
 *  A Timeline Component, which displays milestone(s) in a proper order:
 *  props
 *      - data = An Array of Milestone Objects designed to handle and manage all incoming information
 */
export default function timeline ( props ) {
    return ( 
    <section id="cd-timeline" class="cd-container">
        {props.data.map(e=><Milestone data = {e}/>)}
    </section> );
}
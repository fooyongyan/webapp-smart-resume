import React from 'react';
import { Link } from 'react-router-dom';
import Timeline from '../../components/Timeline/Timeline';
import {careerData} from '../../data/CareerData'
import {educationData} from '../../data/EducationData'
import './AboutMe.css'

export default function AboutMe ( props ) {

    React.useEffect ( e => {
        ///TODO : Pull Content from API Links instead of relying on stored hard coded data
        return ( () => {
            ///Clean Up 
        });
    })

    const mapEducationToComponent = () => {
        return educationData.map( item => {
            return {
                id: item.id,
                title: item.instituition,
                subTitles: [item.period, ...item.certifications],
                description: item.description
            }
        })
    }

    const mapCareerData = () => {
        return careerData.map ( item => {
            return {
                id: item.id,
                title: item.company,
                subTitles: [item.title, item.timePeriod],
                description: item.description,
                tags: [...item.stacks], 
                notes: item.notes,
            }
        })
    } 

    return (
        <div className = "AboutMe"> 
            <div className = "Side">
                 <h2> My Side Bar </h2>
            </div>
            <div className = "Main">
                <h3> Career History </h3>
                    <Timeline data={mapCareerData()}/>
                <h3> Education History </h3>
                    <Timeline data={mapEducationToComponent()}/>
                <h3> Hobbies </h3>
            </div>
            <div className = "Foot">
                  <Link to = "/proficiency"> Technical Proficiencies </Link>
            </div>
        </div>
    );
}
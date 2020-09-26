import React, {useState} from 'react';
import '../Timeline.scss'
import Button from '../../Button/Button'
export default function Milestone ( props ) {

    const data = {...props.data};
    const [showMore, setShowMore ] = useState ( false );

    const renderDetails = () => {
        return showMore ?  
            <div> 
                <ul> 
                    {data.notes.map( e => <li> {e} </li>)}
                </ul> 
            </div> : null;
    };

    const renderTags = () => {
        let comp = null;
        if ( data.tags) {
            comp = <ul className="content-skills">
                            {data.tags.map( info => <li> {info} </li>)}
                </ul>;
        }
        return comp;
    }

    const renderNotes = () => {
        return data.notes ? 
                (
                    <section>
                        {data.notes ? <Button click={ev => setShowMore(!showMore)} text = {showMore ? "Hide" : "Read more.."} /> : null }
                        {renderDetails()}
                    </section>
                )
                : null;
    }

    return (
            <div className="cd-timeline-block">
                <div className="cd-timeline-img cd-picture" />
                <div className="cd-timeline-content">
                <h2> {data.title} </h2>
                <div className="timeline-content-info">
                    {data.subTitles.map( item => { return <span className="timeline-content-info-title"> {item} </span> })}   
                    {data.description ? <p> {data.description} </p> : null }
                    {renderNotes()}
                </div>
                {renderTags()}
                
            </div> 
        </div> 
    )
}
import React from 'react'
import './stylesheets/components.css'

export const AudioPanel = (props) => {
    return (
        <div className="media-panel">
            <div className="text">
                <h2>{props.title}</h2>
                <h2>{props.subtitle}</h2>
                <audio src={props.audio} controls controlsList="nodownload" className="media-player"/>
                <p>{props.bodytext}</p>
            </div>
        </div>
    )
}

export const VideoPanel = (props) => {
    return (
        <div className="media-panel">
            <div className="text">
                <h2>{props.title}</h2>
                <h2>{props.subtitle}</h2>
                <iframe src={props.video} className="media-player" title={props.title}></iframe>
                <p>{props.bodytext}</p>
            </div>
        </div>
    )
}

export const InfoPanel = (props) => {
    return (
        <div className="media-panel" id="info-panel">
            <div className="text">
                <h2>{props.title}</h2>
                <p>{props.bodytext}<a href="mailto:bernar5@clemson.edu">bernar5@clemson.edu</a>.</p>
                <br/>
                <p>{props.bodytext2}<a href="https://www.clemson.edu/caah/academics/performing-arts/index.html">here</a>.</p>
            </div>
        </div>
    )
}
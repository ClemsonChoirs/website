import React from 'react'
import { Link } from "gatsby"

import CustomButton from '../components/custom-button'
import './stylesheets/components.css'


const EnsemblePanel = (props) => {
    return (
        <div className="wide-ensemble">
            <img src={props.image} alt={"Image of " + props.title}/>
            <div className="text">
                <h2>{props.title}</h2>
                <p>{props.bodytext}</p>
                <div className="button-wrapper">
                {props.internal ?
                        <Link to={props.link} target={props.target}><CustomButton label="Learn More"/></Link>
                        :
                        <a href={props.link} target={props.target} aria-label="Learn more"><CustomButton label="Learn More"/></a>
                    }
                </div>
            </div>
        </div>
    )
}

export default EnsemblePanel;
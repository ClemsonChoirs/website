import React from 'react'
import CustomButton from '../components/custom-button'
import { Link } from "gatsby"

import './stylesheets/components.css'

const SmallEnsemblePanel = (props) => {
    return (
        <div className="small-ensemble">
            <img src={props.image} alt={"Image of " + props.title}/>
            <div className="text">
                <h2>{props.title}</h2>
                <p>{props.bodytext}</p>
                <div className="small-button-wrapper">
                    {props.internal ?
                        <Link to={props.link} target={props.target}><CustomButton label="Learn More"/></Link>
                        :
                        <a href={props.link} target={props.target}><CustomButton label="Learn More"/></a>
                    }
                </div>
            </div>
        </div>
    )
}

export default SmallEnsemblePanel;
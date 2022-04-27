import * as React from "react"

import { EnsembleInfo } from '../ensemble-info'
import Footer from '../components/footer'
import Navbar from "../components/navbar"
import SmallEnsemblePanel from '../components/small-ensemble-panel'

import Div100vh from 'react-div-100vh'

import './stylesheets/ensembles.css'


const Ensembles = () => {
    return (
        <Div100vh>

        <div className="navbar">
            <Navbar/>
        </div>

        <div className="ensembles-wrapper">
            <h1>Choral Ensembles</h1>
            <hr className="solid"></hr>
            <div className="ensembles-content">
                {EnsembleInfo.map((item, index) => {
                    return(
                        <SmallEnsemblePanel title={item.name} image={item.image} bodytext={item.body} link={item.link} target={item.target}/> 
                    )
                })}
            </div>

            <div className="ensembles-foot">
                <Footer/>
            </div>
        </div>

        
        </Div100vh>
    )
}

export default Ensembles
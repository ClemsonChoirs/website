import * as React from "react"
import { Link } from "gatsby"

import BigButton from '../components/big-button'
import Footer from '../components/footer'
import { VideoPanel } from '../components/media-panels'
import Navbar from "../components/navbar"

import Div100vh from 'react-div-100vh'

import './stylesheets/ensemble-page.css'

const MensChoir = () => {
    return (
    <Div100vh>
         <div class="navbar">
            <Navbar/>
        </div>

        <div class="ensemble-wrapper">
            <div className="ensemble-subwrapper">
                <div class="mens-feature">
                    <div className="ensemble-header">
                        <h1>Men's Choir</h1>
                    </div>
                </div>
                <div class="ensemble-content">
                    <div className="ensemble-left">
                        <h2>Men's Choir (MUSC 3720) is a non-auditioned, all-male ensemble.</h2>
                        <p>Begun in 1896, Men's Choir is the oldest musical organization at Clemson University. This choir performs a wide variety of traditional choral literature representing multiple genres, style periods, and nationalities. No audition is required and students from all majors are encouraged to join. CU Men's Choir is conducted by Dr. Anthony Bernarducci.</p>
                        <p>To participate, register for the course and attend the first rehearsal on the first Thursday of each semester at 12:30 p.m.</p>
                        <div className="ensemble-buttons">
                            <Link to="../auditions"><BigButton label="Audition Information"/></Link>
                            <Link to="mailto:bernar5@clemson.edu"><BigButton label="Email the Conductor"/></Link>
                        </div>
                        
                    </div>
                    <div className="ensemble-right">
                        {/* <AudioPanel title={"Evening Gale Mvt. 1,"} subtitle={"“Night Song”"} audio={nightSong} bodytext="“Night Song” is the first movement in a three movement piece titled “Evening Gale” by Dr. Anthony Bernarducci. “Evening Gale” was premiered by Cantorei in the fall of 2019."/> */}
                        <VideoPanel title={"Wild Mountain Thyme & O Mistress Mine"} subtitle={""} video={"https://www.youtube.com/embed/ymT4mUm8_aQ"} bodytext="The CU Men's Choir performs “Wild Mountain Thyme” arranged by Karen Marrolli and “O Mistress Mine” by Matthew Harris in the spring of 2021."/>
                    </div>
                </div>
            </div>

            <div className="ensemble-foot" id="mens-foot">
                <Footer/>
            </div>

        </div>
        
       
        
        </Div100vh>
    )
}

export default MensChoir
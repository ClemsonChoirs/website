import * as React from "react"

import CustomButton from '../components/custom-button'
import Footer from '../components/footer'
import { InfoPanel } from '../components/media-panels'
import Navbar from "../components/navbar"

import Div100vh from 'react-div-100vh'

import './stylesheets/major.css'

import caroline from '../images/caroline-ritchie-stahl.jpg'
import whitney from '../images/whitney-davis.jpg'

const Major = () => {
    return (
        <Div100vh>

        <div class="navbar">
            <Navbar/>
        </div>
        
        <div class="major-wrapper">
            <div class="major-feature">
                <div className="major-header">
                    <h1>Performing Arts Major</h1>
                </div>
            </div>
            <div class="major-content">
                <div className="major-left">
                    <h2>Vocal Studies in Performing Arts</h2>
                    <p>The B.A. in Performing Arts - Music Concentration allows you to create your own future in the Performing Arts. Our innovative Music degree combines performance (lessons and ensembles), music theory, music history, music technology (Finale, MIDI, recording), and arts administration (music business, entrepreneurship, and marketing).</p>
                    <p>Music students collaborate with Theater and Audio students and get hands-on experience in our professional roadhouse, the Brooks Center for the Performing Arts, our on-site learning laboratory.</p>
                    <p>Students also participate in masterclasses, develop connections with professional artists, and work alongside dynamic faculty who are leaders in their field. Most importantly, our students are prepared for today’s highly competitive job market after graduation.</p>
                </div>
                <div className="major-right">
                    <div class="side-content">
                        <InfoPanel 
                            title="Audition Information" 
                            bodytext="Prospective voice students should prepare two songs of contrasting styles. At least one of the selections MUST be a classical folk song, art song or aria. Foreign language art songs encouraged. The second can be from a musical. Make sure the selections adequately demonstrate musicality, tone quality, and technical abilities. In addition to the prepared pieces, students will be asked to sight read a short excerpt. For repertoire suggestions, please contact Dr. Anthony Bernarducci at "
                            bodytext2="More Information regarding applications and auditions can be found "
                        />
                    </div>
                </div>
            </div>
            <div class="major-stories">
                <h2>Alumni Stories</h2>
                <div className="story">
                    <h3>Caroline Ritchie Stahl</h3>
                    <hr className="solid"></hr>
                    <div className="story-content">
                        <img src={caroline} alt="Image of alum, Caroline Ritchie Stahl, in Carnegie Hall"/>
                        <p>I attended Clemson from Fall 2005 to Spring 2009. My favorite part of the degree—and perhaps of my college experience in general!—was participating in Clemson Choirs. I looked forward to every rehearsal, as it was always a highlight of my day and a much-needed respite from the stress of academic life. There is nothing like singing and making music with your peers. I made some of my very best friends in Clemson Choirs, many of whom I still keep up with to this day! After college, I moved to New York City and pursued a career in Arts Administration. I spent 5 years in the Development department at Carnegie Hall, where I worked in foundation relations, corporate sponsorships, and individual giving. In the fall of 2021, I was thrilled to return to the Brooks Center, where I now work as Director of Public Relations.</p>
                    </div>
                </div>
                <div className="story">
                    <h3>Whitney Davis</h3>
                    <hr className="solid"></hr>
                    <div className="story-content">
                        <img src={whitney} alt="Image of alum, Whitney Davis"/>
                        <p>I attended Clemson from Fall 2008 to Spring 2012. One of the biggest benefits of this degree for me was the size of the department. Because of the smaller class sizes, I felt more included in the department. The camaraderie between the disciplines was enjoyable and led me to have a varied experience with opportunities exploring theatre and audio technology on top of music. I currently am an an adjunct professor at Francis Marion University where I teach music appreciation as well as voice lessons. I also run a private vocal studio in Hartsville, SC, and am the contemporary music director for a local church.</p>
                    </div>
                </div>
            </div>
            <div className="major-foot">
                <Footer/>

            </div>
            
        </div>

        
        </Div100vh>
    )
}

export default Major
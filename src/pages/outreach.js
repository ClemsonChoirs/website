import * as React from "react"
import BigButton from '../components/big-button'
import CustomButton from '../components/custom-button'
import Footer from '../components/footer'
import Navbar from "../components/navbar"

import Div100vh from 'react-div-100vh'

import './stylesheets/outreach.css'

import choralarts from '../images/choralarts.jpg'
import institute from '../images/vocalinstitute.jpg'
import triart from '../images/triartchoralclinic.jpg'

import choralartsBrochure from '../images/choral-arts-exchange.pdf'
import instituteBrochure from '../images/vocal-institute.pdf'
import triartBrochure from '../images/tri-art-choral-clinic.pdf'

const Outreach = () => {
    return (
        <Div100vh>

        <div class="navbar">
            <Navbar/>
        </div>

        <div className="outreach-wrapper">
            <h1>Outreach Programs</h1>
            

            <div className="outreach-content">
                <h2>Choral Arts Exchange</h2>
                <hr className="solid" id="top-divider"></hr>
                <div className="outreach-info">
                    <div className="outreach-media">
                        <img src={choralarts} alt="Graphic for the Clemson Choral Arts Exchange"/>
                        <a href={choralartsBrochure} download target="_blank" rel="noreferrer">
                            <BigButton label="Download Brochure" id="brochure-button"/>
                        </a>
                    </div>                    
                    
                    <div className="outreach-text">
                        <p>Each year the Clemson Choral Department in partnership with the Brooks Center for the Performing Arts selects a high school choral program for a year long artistic collaboration. This program has three goals: to build relationships with performing arts programs in the upstate area, offer instruction and performance opportunities, and provide various ways for students to engage in the rich concert season presented at the Brooks Center each year.</p>
                        <p>Selected schools will benefit from the following:</p>
                        <ul>
                            <li>Two choral workshops with Dr. Bernarducci</li>
                            <li>One voice masterclass with Dr. Odom</li>
                            <li>Group tickets for two Brooks Center Shows</li>
                            <li>A joint concert experience with a Clemson Choir</li>
                            <li>Private tour of the university campus and Brooks Center for the Performing Arts</li>
                            <li>T-Shirts</li>
                        </ul>
                    </div>
                    
                </div>
            </div>
            <div className="outreach-content">
                <h2>Summer Vocal Institute</h2>
                <hr className="solid" id="top-divider"></hr>
                <div className="outreach-info">
                    <div className="outreach-media">
                        <img src={institute} alt="Graphic for the Clemson Vocal Institute"/>
                        <a href={instituteBrochure} download target="_blank" rel="noreferrer">
                            <BigButton label="Download Brochure" id="brochure-button"/>
                        </a>
                        
                    </div>      
                    <div className="outreach-text">
                        <p>This program is open to all rising 9th- 12th grade students. At the Clemson Vocal Institute, you will grow as a singer while participating in an exciting choral experience and having the unique opportunity to study solo vocal performance in a masterclass setting. Come prepare yourself for future auditions, enjoy a college level musical experience at the Brooks Center for the Performing Arts, and meet other students with the same passions as you!</p>
                        <p>Summer 2022 Dates: July 18 – 22</p>
                        <p>See more information on Summer Scholars and register <a href="https://www.clemson.edu/summer/summer-scholars/index.html" target="_blank" rel="noreferrer">here</a>.</p>
                    </div>
                    
                </div>
            </div>
            <div className="outreach-content">
                <h2>Tri-ART and Choral Clinic</h2>
                <hr className="solid" id="top-divider"></hr>
                <div className="outreach-info">
                    <div className="outreach-media">
                        <img src={triart} alt="Graphic for the Clemson Tri-ART and Choral Clinic"/>
                        <a href={triartBrochure} download target="_blank" rel="noreferrer">
                            <BigButton label="Download Brochure" id="brochure-button"/>
                        </a>
                        
                    </div>      
                    <div className="outreach-text">
                        <p>Each year the Clemson Choral Program hosts a concert on the Eskridge Tri-Art Series at the Brooks Center for the Performing Arts. In addition, a handful of choirs attending will receive a masterclass with Dr. Bernarducci on the Brooks Center stage upon request. This concert and clinic is at no cost to the schools. We look forward to sharing a day of choral music together!</p>
                        <p>If you have questions concerning reservations or seating availability, please contact Tri-ART Coordinator Nancy Martin at nmartin@clemson.edu or by phone at 864-656-7787 for more information.</p>
                    </div>
                </div>
                
            </div>
            <div className="outreach-foot">
                <Footer/>
            </div>
        </div>

        
        </Div100vh>
    )
}

export default Outreach
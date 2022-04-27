import * as React from 'react'

import { Link } from 'gatsby'

import CustomButton from '../components/custom-button'
import { EnsembleInfo } from '../ensemble-info'
import EnsemblePanel from '../components/ensemble-panel'
import Footer from '../components/footer'
import Navbar from "../components/navbar"
import SmallEnsemblePanel from '../components/small-ensemble-panel'

import Div100vh from 'react-div-100vh'

import './stylesheets/index.css'

import picLogo from '../images/background-wide.jpg'


const IndexPage = () => {
  return (
    <Div100vh>
    <div className="navbar">
      <Navbar/>
    </div>

    <div className="wrapper">
      <img className="feature" src={picLogo} alt="Images of Clemson Choirs rehearsing with logo"/>
        <div className="content">
          
          <div className="left">
            <div className="side-content">
              <h3>Mission Statement</h3>
              <hr className="solid"></hr>
              <p>Our mission is to provide the highest quality artistic experience through ensemble and solo singing to all Clemson students. This includes performing diverse and inclusive repertoire, commissioning new works, and collaborating with other art forms. Finally, our outreach programs aim to enrich the music education of students throughout the region.</p>
            </div>
            <div className="side-content">
              <h3>Vocal Arts Series</h3>
              <hr className="solid"></hr>
              <p>The Clemson Vocal Arts Series is a showcase of our choral ensembles, voice majors, and talent from within our choirs. The goal with this online music series is to connect with our community and create another avenue for everyone to have access to music.</p>
              <div id="custom-button">
                <a href="https://youtube.com/playlist?list=PLJI3Pv0gkD2CPArkG0ui87QUeIPaojqy7" target="_blank" rel="noreferrer" aria-label="View on YouTube"><CustomButton label="View on YouTube"/></a>
              </div>
            </div>
            <div className="side-content">
              <h3>Interest Form</h3>
              <hr className="solid"></hr>
              <p>If you would like more information about Clemson Choirs, please fill out this short form to receive a personal email from our director.</p>
              <div id="custom-button">
                <Link to={"../interest-form"}><CustomButton label="Go to Form"/></Link>
              </div>
            </div>
            <div className="side-content">
              <h3>Support Clemson Choirs</h3>
              <hr className="solid"></hr>
              <p>The choral program is growing each year, now with six credit-earning ensembles and more than 200 students singing each week! In the past five years, we have established the Clemson Cantorei chamber ensemble, presented an annual Sounds of the Season holiday concert, developed outreach programs in our public schools, and created the Vocal Arts Series on YouTube, which brings quality music right to your home.</p>
              <p>Through a donation to our CABA Account (Choir Activities Booster Association), you can make a difference in our students’ experience. Future projects you may consider supporting are commissioning a new work, funding domestic and international travel, establishing student scholarships, sponsoring a large masterwork with orchestra, helping students purchase concert attire, and more!</p>
              <p>Follow the link below to make a gift online, or if sending a gift by mail, please make your check payable to the Clemson University Foundation, and specify the Choral Activities Booster Association (CABA) in the subject line. Mail to the Clemson University Foundation; PO Box 1889; Clemson, SC 29633-1889.</p>
              <div id="custom-button">
                <a href="https://iamatiger.clemson.edu/giving/giving-to-clemson?id=1a887640-aeee-4534-8e42-4d1a9a45bffa" target="_blank" rel="noreferrer" aria-label="Make a Gift"><CustomButton label="Make a Gift"/></a>
              </div>
            </div>
          </div>
          <div className="right-wide">
            <h2>Choral Ensembles</h2>
            {EnsembleInfo.map((item, index) => {
              return(
                <EnsemblePanel title={item.name} image={item.image} bodytext={item.body} link={item.link} target={item.target}/>
              )
            })}
          </div>
          <div className="right-tall">
            <h2>Choral Ensembles</h2>
            {EnsembleInfo.map((item, index) => {
              return(
                <SmallEnsemblePanel title={item.name} image={item.image} bodytext={item.body} link={item.link} target={item.target}/>
              )
            })}
          </div>
        </div>
        
        <div className="foot">
          <Footer/>
        </div>
    </div>
      
        
    </Div100vh>
  )
}

export default IndexPage
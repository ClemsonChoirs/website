import React from "react"
import { useState, useEffect } from "react"
import { Link } from 'gatsby'

import CustomButton from '../components/custom-button'
import Footer from '../components/footer'
import Navbar from "../components/navbar"

import Div100vh from 'react-div-100vh'

import './stylesheets/auditions.css'

import sopranoFile from '../audio/soprano-and-tenor.mp3'
import altoFile from '../audio/alto.mp3'
import bassFile from '../audio/bass.mp3'

import sopranoTenorSheet from "../images/soprano-tenor-key.pdf"
import altoSheet from "../images/alto-key.pdf"
import bassSheet from "../images/bass-key.pdf"

const Auditions = () => {
    return (
        <Div100vh>
        <div class="navbar">
            <Navbar/>
        </div>
        
        <div class="audition-wrapper">
            <div class="audition-feature">
                <div className="audition-header">
                    <h1>Join a Choir</h1>
                </div>
            </div>
            <div class="audition-content">
                <div className="audition-left">
                    <h2>Thank you for your interest in Clemson Choirs! Each of our choral ensembles are open to ALL students at Clemson University.</h2>
                    <p>Auditions for CU Singers (MUSC 3700) and Cantorei (MUSC 3450) for the Fall 2022 Semester will be announced later this Spring.</p>
                    <p>If you would like to be a part of Men's Choir (MUSC 3720) or Women’s Choir (MUSC 3710), no audition is necessary! Simply register for the class on iRoar.</p>
                    <p>For more information on Tigeroar and TakeNote auditions contact Dr. David Conley.</p>
                </div>
                <div className="audition-right">
                    <div class="side-content">
                        <h3>Interest Form</h3>
                        <hr class="solid"></hr>
                        <p>If you would like more information about Clemson Choirs, please fill out this short form to receive a personal email from our director.</p>
                        <div id="custom-button">
                            <Link to={"../interest-form"}><CustomButton label="Go to Form"/></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="audition-foot">
                <Footer/>
            </div>
        </div>

       
        </Div100vh>
    )
}

const FullAuditions = () => {

    const [soprano, setSoprano] = useState(null);
    const [sopPlaying, setSopPlaying] = useState(false);

    const [alto, setAlto] = useState(null);
    const [altoPlaying, setAltoPlaying] = useState(false);

    const [tenor, setTenor] = useState(null);
    const [tenPlaying, setTenPlaying] = useState(false);

    const [bass, setBass] = useState(null);
    const [bassPlaying, setBassPlaying] = useState(false);

    useEffect(() => {

        setSoprano(new Audio(sopranoFile))
        setAlto(new Audio(altoFile))
        setTenor(new Audio(sopranoFile))
        setBass(new Audio(bassFile)) // only call client
    
    }, [])

    var allAudios = [soprano, alto, tenor, bass];

    function stopAllAudio() {
        console.log(allAudios);
        
        if (sopPlaying) {
            allAudios[0].pause();
            setSopPlaying(false);
        } else if (altoPlaying) {
            allAudios[1].pause();
            setAltoPlaying(false);
        } else if (tenPlaying) {
            allAudios[2].pause();
            setTenPlaying(false);
        } else if (bassPlaying) {
            allAudios[3].pause();
            setBassPlaying(false);
        }
    }

    const playSoprano = () => {
        if (sopPlaying) {
            stopAllAudio();
        } else {
            stopAllAudio();
            allAudios[0].play();
            setSopPlaying(true);
        }
        
    }

    const playAlto = () => {
        if (altoPlaying) {
            stopAllAudio();
        } else {
            stopAllAudio();
            allAudios[1].play();
            setAltoPlaying(true);
        }
        
    }

    const playTenor = () => {
        if (tenPlaying) {
            stopAllAudio();
        } else {
            stopAllAudio();
            allAudios[2].play();
            setTenPlaying(true);
        }
        
    }

    const playBass = () => {
        if (bassPlaying) {
            stopAllAudio();
        } else {
            stopAllAudio();
            allAudios[3].play();
            setBassPlaying(true);
        }
        
    }

    useEffect(() => {
        if (allAudios[0] && allAudios[1] && allAudios[2] && allAudios[3]) {
            allAudios[0].addEventListener('ended', () => setSopPlaying(false));
            allAudios[1].addEventListener('ended', () => setAltoPlaying(false));
            allAudios[2].addEventListener('ended', () => setTenPlaying(false));
            allAudios[3].addEventListener('ended', () => setBassPlaying(false));
        }
        
    });

    useEffect(() => {
        
    });

    return (
        <Div100vh>
        <div class="navbar">
            <Navbar/>
        </div>
        
        <div class="audition-wrapper">
            <div class="audition-feature">
                <div className="audition-header">
                    <h1>Join a Choir</h1>
                </div>
            </div>
            <div class="audition-content">
                <div className="audition-left">
                    <h2>Thank you for your interest in Clemson Choirs! Each of our choral ensembles are open to ALL students at Clemson University.</h2>
                    <p> If you would like to be a part of CU Singers (MUSC 3700) or Cantorei (MUSC 3450), please read the audition instructions below. Audition forms and videos will be due on July 28, 2021. We recommend that you register for the class(es) that you are auditioning for now to avoid scheduling conflicts.</p>
                    <p>If you would like to be a part of Men's Choir (MUSC 3720) or Women’s Choir (MUSC 3710), no audition is necessary. Simply register for the class on iRoar.</p>
                    <p>For more information on Tigeroar and TakeNote auditions contact Dr. David Conley.</p>
                </div>
                <div className="audition-right">
                    <div class="side-content">
                        <h3>Interest Form</h3>
                        <hr class="solid"></hr>
                        <p>If you would like more information about Clemson Choirs, please fill out this short form to receive a personal email from our director.</p>
                        <div id="custom-button">
                            <Link to={"../interest-form"}><CustomButton label="Go to Form"/></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="audition-instructions">
                <h2>Audition Instructions</h2>
                <p className="questions">Audition forms and videos will be due on August 1, 2022 at 11:59pm.</p>
                <p className="questions">If you have any questions about the audition process, please email Dr. Bernarducci (bernar5@clemson.edu).</p>
                <div className="instruction-panels">
                    <AuditionPanel
                        steps={true}
                        title="Step One"
                        subtitle="Record Your Video"
                        bodytext="In your video, please introduce yourself and sing “My Country ’Tis of Thee”. Please use the sheet music and starting pitch that correspond to your preferred voice part, found below."
                    />
                    <AuditionPanel
                        steps={true}
                        title="Step Two"
                        subtitle="Upload Your Video"
                        bodytext="Upload the video to either YouTube OR Google Drive. Please include your first and last name in the title of your video. On YouTube, set the video’s visibility to “Unlisted”. On Google Drive, set link sharing permissions to “Anyone with link can view”."
                    />
                    <AuditionPanel
                        steps={true}
                        title="Step Three"
                        subtitle="Fill Out Your Form"
                        bodytext="Copy the link to your video and paste it in the last field, after answering some questions about your past choir/singing experience."
                        btnlabel="Audition Form"
                        link="https://docs.google.com/forms/d/e/1FAIpQLSc7BHT8F-D5c35ByvFm_dyq2pORIQVWZ38I5nUHkCkr29Uj8A/viewform?usp=sf_link"
                    />
                </div>
                <div className="sheet-music">
                    <h3>My Country 'tis of Thee Sheet Music</h3>
                    <div className="music-buttons">
                        <a href={sopranoTenorSheet} download target="_blank" rel="noreferrer">
                            <CustomButton label="See Soprano"/>
                        </a>
                        <a href={altoSheet} download target="_blank" rel="noreferrer">
                            <CustomButton label="See Alto"/>
                        </a>
                        <a href={sopranoTenorSheet} download target="_blank" rel="noreferrer">
                            <CustomButton label="See Tenor"/>
                        </a>
                        <a href={bassSheet} download target="_blank" rel="noreferrer">
                            <CustomButton label="See Bass"/>
                        </a>
                    </div>
                </div>
                <div className="starting-pitches">
                    <h3>Starting Pitches</h3>
                    <div className="pitch-players">
                            <a onClick={playSoprano}><AudioButton playing={sopPlaying}label="Hear Soprano"/></a>
                            
                            <a onClick={playAlto}><AudioButton playing={altoPlaying} label="Hear Alto"/></a>
                        
                            <a onClick={playTenor}><AudioButton playing={tenPlaying} label="Hear Tenor"/></a>
                        
                            <a onClick={playBass}><AudioButton playing={bassPlaying} label="Hear Bass"/></a>
                    </div>
                </div>
                <div className="next-steps">
                    <h2>Sight-Reading Audition</h2>
                    <div className="sight-reading-panels">
                        <AuditionPanel 
                            steps={false}
                            title="Cantorei"
                            bodytext="If you are auditioning for Cantorei, Dr. Bernarducci will email you in the days following the initial submission deadline to schedule a sight-reading audition. These will occur either on Zoom, or in person in the Brooks Center."
                        />
                        <AuditionPanel 
                            steps={false}
                            title="CU Singers"
                            bodytext="If you are auditioning only for CU Singers, in the days following the initial submission deadline with a link to sign up for a day to sight-read. On these days, August 12th and 13th, at 11:00 am, a short sight-reading example will be emailed to you, and you will have exactly 2 hours to record a video of yourself singing the example a capella, post it to YouTube or Google Drive, and submit the link to a form that will be included in the email, along with more detailed instructions. If you have a conflict with either of these times, please let Dr. Bernarducci know as soon as possible."
                        />
                    </div>
                </div>
            </div>
            <div className="auditions-foot">
                <Footer/>
            </div>
           
        </div>

       
        </Div100vh>
    )
}

export default FullAuditions

const AuditionPanel = (props) => {
    return (
        <div className={props.steps ? "audition-steps" : "sight-reading"}>
            <div className="text">
                <h3>{props.title}</h3>
                {props.subtitle ?
                    <h4>{props.subtitle}</h4> : ''
                }
                <p>{props.bodytext}</p>
                
            </div>
            {props.btnlabel ?
                <a href={props.link} target="_blank"><CustomButton label={props.btnlabel}/></a> : ''
            }
        </div>
    )
}

const AudioButton = (props) => {
    return (
        <>
            <button className={props.playing ? "audio-button-active" : "audio-button"}>{props.label}</button>
        </>
    )
}
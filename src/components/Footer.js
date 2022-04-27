import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

import instagram from '../images/instagram.png'
import facebook from '../images/facebook.png'
import youtube from '../images/youtube.png'
import './stylesheets/components.css'

const Footer = () => {
    return (
        <>
            <div className="footer-wrapper">
                <div className="dr-b">
                    <p>Dr. Anthony Bernarducci</p>
                    <p>Director of Choral and Vocal Studies</p>
                    <p><a href="mailto:bernar5@clemson.edu">bernar5@clemson.edu</a></p>
                </div>
                <div className="socials">
                    <a href="https://www.instagram.com/clemsonchoirs/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
                    <a href="https://www.youtube.com/c/ClemsonChoirsandVocalArts" target="_blank" rel="noreferrer"><img src={youtube} alt="youtube logo"/></a>
                    <a href="https://www.facebook.com/clemsonchoirs" target="_blank" rel="noreferrer"><img src={facebook} alt="facebook logo"/></a>
                </div>
                <div className="dr-b-second">
                    <p>Dr. Anthony Bernarducci</p>
                    <p>Director of Choral and Vocal Studies</p>
                    <p><a href="mailto:bernar5@clemson.edu">bernar5@clemson.edu</a></p>
                </div>
                <div className="brooks">
                    <p>Brooks Center for the Performing Arts</p>
                    <p>Clemson University</p>
                    <p>Suite 119B</p>
                </div>
            </div>
        </>
    )
}

export default Footer;
import React, {useState, useEffect} from "react"
import { Link } from "gatsby"

import './stylesheets/components.css'
import logo from '../images/whitelogo.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    const [ensembles, showEnsembles] = useState(false);
    const [hoverOnEns, setHoverOnEns] = useState(false);
    const [hoverOnOptions, setHoverOnOptions] = useState(false);
    const [dropdown, showDropdown] = useState(false);


    const ensemblesHover = () => {
        setHoverOnEns(true);
    }

    const optionsHover = () => {
        setHoverOnOptions(true);
    }

    const ensemblesUnhover = () => {
        setHoverOnEns(false);
    }

    const optionsUnhover = () => {
        setHoverOnOptions(false);
    }

    useEffect (() => {
        if (hoverOnEns || hoverOnOptions) {
            showEnsembles(true);
        } else {
            showEnsembles(false);
        }
    }, [hoverOnEns, hoverOnOptions])

    const setShowDropdown = () => {
        showDropdown(!dropdown);
    }

    const [join, showJoin] = useState(false);
    const [hoverOnJoin, setHoverOnJoin] = useState(false);
    const [hoverOnAuditions, setHoverOnAuditions] = useState(false);


    const joinHover = () => {
        setHoverOnJoin(true);
    }

    const auditionsHover = () => {
        setHoverOnAuditions(true);
    }

    const joinUnhover = () => {
        setHoverOnJoin(false);
    }

    const auditionsUnhover = () => {
        setHoverOnAuditions(false);
    }

    useEffect (() => {
        if (hoverOnJoin || hoverOnAuditions) {
            showJoin(true);
        } else {
            showJoin(false);
        }
    }, [hoverOnJoin, hoverOnAuditions])

    
    return (
        <>
        <header>
            <div className="reduced-nav">
                <Link to={"../"}><img src={logo} className="logo" alt="Clemson Choirs logo"/></Link>
                <button className={dropdown ? "dropdown-button-active" : "dropdown-button"}>
                   <FontAwesomeIcon icon={faCaretDown} onClick={setShowDropdown}/> 
                </button>
                
            </div>
            <ul className={dropdown ? "dropdown-active" : "dropdown-hidden"}>
                    <li><Link to={'../'} onClick={setShowDropdown}>Home</Link></li>

                    <hr className="solid"></hr>
                    <li><Link to={'../ensembles'} onClick={setShowDropdown}>Ensembles</Link></li>

                    <hr className="solid"></hr>
                    <li><Link to={'../auditions'} onClick={setShowDropdown}>Join a Choir</Link></li>

                    <hr className="solid"></hr>
                    <li><Link to={'../major'} onClick={setShowDropdown}>Major</Link></li>

                    <hr className="solid"></hr>
                    <li><Link to={'../staff'} onClick={setShowDropdown}>Staff</Link></li>

                    <hr className="solid"></hr>
                    <li><Link to={'../outreach'} onClick={setShowDropdown}>Outreach Programs</Link></li>
                </ul>

            <nav>
                <Link to={"../"}><img src={logo} className="logo" alt="Clemson Choirs logo"/></Link>
                
                <ul className="pages">
                    <li><Link to={'../'}>Home</Link></li>
                    <li><Link to={'../ensembles'} onMouseEnter={ensemblesHover} onMouseLeave={ensemblesUnhover} className={ensembles ? "active" : ""}>Ensembles</Link></li>
                    <li><Link to={'../auditions'} onMouseEnter={joinHover} onMouseLeave={joinUnhover} className={join ? "active" : ""}>Join a Choir</Link></li>
                    <li><Link to={'../major'}>Major</Link></li>
                    <li><Link to={'../staff'}>Staff</Link></li>
                    <li><Link to={'../outreach'}>Outreach Programs</Link></li>
                </ul>
            </nav>
        </header>

        <ul className={ensembles ? "ensembles-active" : "ensembles-hidden"} onMouseEnter={optionsHover} onMouseLeave={optionsUnhover}>
            <li><Link to={'../cu-singers'}>CU Singers</Link></li>
            <li><Link to={'../cantorei'}>Cantorei</Link></li>
            <li><Link to={'../mens-choir'}>Men's Choir</Link></li>
            <li><Link to={'../womens-choir'}>Women's Choir</Link></li>
            <li><a href={'https://www.clemsontakenote.com/'} target="_blank" rel="noreferrer">TakeNote</a></li>
            <li><a href={'https://www.clemsontigeroar.com/'} target="_blank" rel="noreferrer">Tigeroar</a></li>
        </ul>

        <ul className={join ? "auditions-active" : "auditions-hidden"} onMouseEnter={auditionsHover} onMouseLeave={auditionsUnhover}>
            <li><Link to={'../auditions'}>Auditions</Link></li>
            <li><Link to={'../interest-form'}>Interest Form</Link></li>
            
        </ul>
        
        </>

        
    )

  
}



export default Navbar;
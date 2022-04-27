import * as React from "react"
import { useState } from 'react'
import CustomButton from '../components/custom-button'
import Footer from '../components/footer'
import Navbar from "../components/navbar"

import Div100vh from 'react-div-100vh'

import './stylesheets/interest-form.css'

import picLogo from '../images/background-wide.jpg'

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const InterestForm = () => {
  const [status, setStatus] = useState("Submit");

  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [voicepart, setVoicePart] = useState('');
  // const [grade, setGrade] = useState('');
  // const [highschool, setHighSchool] = useState('');
  // const [foundUs, setFoundUs] = useState('');
  // const [currentmember, setCurrentMember] = useState('');
  // const [other, setOther] = useState('');
  // const [comments, setComments] = useState('');

  const [state, setState] = React.useState({})

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  // const handleChangeMacro = (changeValue) => (e) => changeValue(e.target.value)

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "Interest", ...state})
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));
    setStatus("Submitted");
  };

    return (
      <Div100vh>
      <div className="navbar">
        <Navbar/>
      </div>
  
      <div className="interest-wrapper">
        <img className="feature" src={picLogo} alt="Images of Clemson Choirs rehearsing with logo"/>
        <h1>Interest Form</h1>
        {status === 'Submit' ?
          <div className="unfilled">
            <h3>Please fill out this form if you're interested in learning more about Clemson Choirs.</h3>

            <form onSubmit={handleSubmit} name="Interest" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
              <input type="hidden" name="form-name" value="Interest" />
              <div className="form-wrapper"> 
                <div className="form-left">
                  <label htmlFor="name">Full Name: *</label>
                  <input type='text' id="name" className="text-input" name="Name" onChange={handleChange}/>

                  <label htmlFor="email">Email: *</label>
                  <label htmlFor="email2" id="sublabel">(Preferably clemson.edu address)</label>
                  <input type="text" id="email" className="text-input" name="Email" onChange={handleChange}/>

                  <label htmlFor="voice-part">Voice Part: *</label>
                    <div className="voice-part">
                      <input type="radio" id="voicepart" name="voicepart" value="Soprano" onChange={handleChange}/>
                      <p>Soprano</p>
                    </div>
                    <div className="voice-part">
                      <input type="radio" id="voicepart" name="voicepart" value="Alto" onChange={handleChange}/>
                      <p>Alto</p>
                    </div>
                    <div className="voice-part">
                      <input type="radio" id="voicepart" name="voicepart" value="Tenor" onChange={handleChange}/>
                      <p>Tenor</p>
                    </div>
                    <div className="voice-part">
                      <input type="radio" id="voicepart" name="voicepart" value="Bass" onChange={handleChange}/>
                      <p>Bass</p>
                    </div>
                    <div className="voice-part">
                      <input type="radio" id="voicepart" name="voicepart" value="Not sure" onChange={handleChange}/>
                      <p>Not sure</p>
                    </div>

                    <label htmlFor="class-standing" id="grade-label">Class Standing: *</label>
                    <div className="grade">
                      <input type="radio" id="grade" name="grade" value="High School" onChange={handleChange}/>
                      <p>High School</p>
                    </div>
                    <div className="grade">
                      <input type="radio" id="grade" name="grade" value="Freshman" onChange={handleChange}/>
                      <p>Freshman</p>
                    </div>
                    <div className="grade">
                      <input type="radio" id="grade" name="grade" value="Sophomore" onChange={handleChange}/>
                      <p>Sophomore</p>
                    </div>
                    <div className="grade">
                      <input type="radio" id="grade" name="grade" value="Junior" onChange={handleChange}/>
                      <p>Junior</p>
                    </div>
                    <div className="grade">
                    <input type="radio" id="grade" name="grade" value="Senior" onChange={handleChange}/>
                      <p>Senior</p>
                    </div>
                    <div className="grade">
                      <input type="radio" id="grade" name="grade" value="Graduate" onChange={handleChange}/>
                      <p>Graduate</p>
                    </div>
                </div>
                    
                <div className="form-right">
                  <label htmlFor="high-school" id="highschool-label">If you participated in choir in high school, what high school did you attend?</label>
                  
                  <input type="text" id="highschool" className="text-input" name="High School" onChange={handleChange}/>
                    
                  <label htmlFor="foundUs" id="how-hear-label">How did you hear about us?</label>

                  <div className="how-hear">
                    <input type="radio" id="foundUs" name="foundUs" value="Socials" onChange={handleChange}/>
                    <p>Social Media</p>
                  </div>

                  <div className="how-hear">
                    <input type="radio" id="foundUs" name="foundUs" value="Current Member: " onChange={handleChange}/>
                    <p id="current-member-label">Current Member:</p>
                    <input type="text" id="currentmember" className="specify" placeholder="What is the member's name?" name="Current member" onChange={handleChange}/>
                  </div>

                  <div className="how-hear">
                    <input type="radio" id="foundUs" name="foundUs" value="Email" onChange={handleChange}/>
                    <p>Received an Email from us</p>
                  </div>

                  <div className="how-hear">
                    <input type="radio" id="foundUs" name="foundUs" value="Letter" onChange={handleChange}/>
                    <p>Received a Letter from us</p>
                  </div>

                  <div className="how-hear">
                    <input type="radio" id="foundUs" name="foundUs" value="Advisor" onChange={handleChange}/>
                    <p>Academic Advisor</p>
                  </div>

                  <div className="how-hear">
                    <input type="radio" id="foundUs" name="foundUs" value="Other: " onChange={handleChange}/>
                    <p>Other:</p>
                    <input type="text" className="specify" id="other" placeholder="Please specify" name="other" onChange={handleChange}/>
                  </div>
                    

                  <label htmlFor="comments" id="comments-label">Is there anything you'd like us to know?</label>

                  <textarea id="comments" name="comments" onChange={handleChange}/>
                </div>  
              </div>

              <button type="submit"><CustomButton label="Submit Form"/></button>

            </form>
            <div className="interest-foot">
              <Footer/>
            </div>
          </div>
          :
          <div className="filled">
            <h3>Your response has been submitted. Thank you!</h3>
            <div className="interest-foot">
              <Footer/>
            </div>
        </div>
        }
        
    </div>
      
        
    </Div100vh>
  )
}

export default InterestForm
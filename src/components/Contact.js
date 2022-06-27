import React from 'react'
import profile from '../Assests/profile1.png'
import Footer from './Footer'
import Formm from './Formm'
export default function Contact() {
  return (
    <div className='bodycon'>
       <center > Good to see you here! If you have anything to ask/say, drop a message below 🖊</center>
        <div className="main">
            <div className="image">
                <img id='pro' src={profile} alt="" />
            </div>
            <div className="form">
            <Formm />
            </div>
        </div>
        <div className="foot">
            <div className="names">
                <Footer />
            </div>
        </div>
    </div>
  )
}

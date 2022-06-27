import React from 'react'
import MovingComponent from 'react-moving-text'
import homeill from '../Assests/homeill.webp'
import Buttonn from './Buttonn'
export default function Home() {
  return (
    <div className='homecont'>
        
        Hey 👋! Welcome to 
        <MovingComponent
  type="effect3D"
  duration="1000ms"
  delay="0s"
  direction="normal"
  timing="ease"
  iteration="5"
  fillMode="none">
  FUNZONE
</MovingComponent>


<Buttonn />
<div className="tag">🎊One way to uplift your mood, make you happy, setting up a date or chilling with friends! Dive in to the Fun🎊</div>


    </div>
  )
}

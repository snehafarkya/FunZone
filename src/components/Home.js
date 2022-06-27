import React from 'react'
import MovingComponent from 'react-moving-text'
import Navb from './Navb'

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
        </div>
  )
}

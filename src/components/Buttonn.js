import React from 'react'
import homeill from '../Assests/homeill.webp'
import MovingComponent from 'react-moving-text'

export default function Buttonn() {
  return (
    <div>
        <div className="button">
            <div className="btn11">
            <a className='btn1'  href="./Music">Music</a>
            </div>
            <div className="btn13">
                
            <MovingComponent
                 type="popIn"
                 duration="1000ms"
                 delay="0s"
                 direction="normal"
                 timing="ease"
                 iteration="1"
                  fillMode="none">
                        <img src={homeill} width={380} height={380}  />
            </MovingComponent>
            
            </div>
            <div className="btn12">
            <a className='btn2' href="./Music.js">Movie</a>

            </div>
</div>
</div>
  )
}

import React from 'react'
import {useState,useEffect} from "react";
import MovingComponent from 'react-moving-text'

export default function Music() {

    const musicc = [
        {
            title : "Closer",
            vido : "https://www.youtube.com/embed/0zGcUoRlhmw"
        },
        {
            title : "As it was",
            vido : "https://www.youtube.com/embed/Qfm6nfz1QNQ"
        },
        {
            title : "Woman",
            vido : "https://www.youtube.com/embed/g7X9X6TlrUo"
        },
        {
            title : "Closer",
            vido : "https://www.youtube.com/embed/0zGcUoRlhmw"
        },
        {
            title : "As it was",
            vido : "https://www.youtube.com/embed/Qfm6nfz1QNQ"
        },
        {
            title : "Woman",
            vido : "https://www.youtube.com/embed/g7X9X6TlrUo"
        }
    ];
    const [songs,setSongs] = useState(musicc) 
    return (
        <>
        <div className="mainc">
        <h3>Getting into the mood or wanna dance on your foot? Everything is Here!    </h3>
        <div className="choice">
        <MovingComponent
            type="slideInFromLeft"
            duration="2000ms"
            delay="1s"
            direction="normal"
            timing="ease"
            iteration="1"
            fillMode="none">
            <div className="bolly">
                <a  className='choiceLink' href="">Bollywood</a>
            </div>
        </MovingComponent>
        <MovingComponent
            type="slideInFromRight"
            duration="2000ms"
            delay="1s"
            direction="normal"
            timing="ease"
            iteration="1"
            fillMode="none">
           <div className="holly">
                <a className='choiceLink' href="#holy">Hollywood</a>
            </div>
        </MovingComponent>
        <MovingComponent
            type="slideInFromLeft"
            duration="2000ms"
            delay="1s"
            direction="normal"
            timing="ease"
            iteration="1"
            fillMode="none">
            <div className="pun">
                <a  className='choiceLink' href="">Punjabi</a>
            </div>
        </MovingComponent>
        </div>
        <div className='grid' id='holy'>

        {
        songs.map((value) => {
        return  (
        <div className = 'h2'>
        <iframe  src={value.vido} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <p className="tit">{value.title}</p>
        </div>
        )
         })
        }
        </div>
        </div>
        </>
       
      )
    
  
}

import React from 'react'
import {useState,useEffect} from "react";
import MovingComponent from 'react-moving-text'

export default function Music() {
    const bollywood = [{
        title : "Bekhayali",
        vido : "https://www.youtube.com/embed/Ps4aVpIESkc"
    },
    {
        title : "Tujhe Kitna Chahein Aur",
        vido : "https://www.youtube.com/embed/92J9p0VplTo"
    },
    {
        title : "Agar Tum Saath Ho",
        vido : "https://www.youtube.com/embed/xRb8hxwN5zc"
    },
    {
        title : "Main Rahoon Ya Na Rahoon ",
        vido : "https://www.youtube.com/embed/Dp6lbdoprZ0"
    },
    {
        title : "Gajab Ka Hai Din",
        vido : "https://www.youtube.com/embed/d2p2Lh9AbSY"
    },
    {
        title : "Jaan Ban Gaye",
        vido : "https://www.youtube.com/embed/a6cJAFFQn_I"
    }
];

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
            title : "Perfect",
            vido : "https://www.youtube.com/embed/2Vv-BfVoq4g"
        },
        {
            title : "Love me like you do",
            vido : "https://www.youtube.com/embed/725WlG1idPc"
        },
        {
            title : "Until I found you",
            vido : "https://www.youtube.com/embed/MlThQTo6D8A"
        }
    ];
    const punjabi = [{
        title : "Bekhayali",
        vido : "https://www.youtube.com/embed/Ps4aVpIESkc"
    },
    {
        title : "Tujhe Kitna Chahein Aur",
        vido : "https://www.youtube.com/embed/92J9p0VplTo"
    },
    {
        title : "Agar Tum Saath Ho",
        vido : "https://www.youtube.com/embed/xRb8hxwN5zc"
    },
    {
        title : "Main Rahoon Ya Na Rahoon ",
        vido : "https://www.youtube.com/embed/Dp6lbdoprZ0"
    },
    {
        title : "Gajab Ka Hai Din",
        vido : "https://www.youtube.com/embed/d2p2Lh9AbSY"
    },
    {
        title : "Jaan Ban Gaye",
        vido : "https://www.youtube.com/embed/a6cJAFFQn_I"
    }
];

    const party = [
        {
            title : "Ek Do Teen",
            vido : "https://www.youtube.com/embed/q2gICJFG6uw"
        },
        {
            title : "Bom Diggy Diggy",
            vido : "https://www.youtube.com/embed/yIIGQB6EMAM"
        },
        {
            title : "Badtameez Dill",
            vido : "https://www.youtube.com/embed/II2EO3Nw4m0"
        },
        {
            title : "Tamma Tamma",
            vido : "https://www.youtube.com/embed/EEX_XM6SxmY"
        },
        {
            title : "Love me like you do",
            vido : "https://www.youtube.com/embed/EEX_XM6SxmY"
        },
        {
            title : "Until I found you",
            vido : "https://www.youtube.com/embed/MlThQTo6D8A"
        }
    ];
    const [Bsongs,setBsongs] = useState(bollywood) 
    const [Psongs,setPsongs] = useState(punjabi) 
    const [Pasongs,setPasongs] = useState(party) 

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
                <a  className='choiceLink' href="#boly">Bollywood</a>
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
                <a  className='choiceLink' href="#pun">Punjabi</a>
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
           <div className="part">
                <a className='choiceLink' href="#part">Party Poppers</a>
            </div>
        </MovingComponent>
        </div>
        {/* bollywood songs */}
        <section className='bollysec' id='boly'>
         <div className='h4'>Desi Tadka</div>
        <div className='grid' >

        {
            Bsongs.map((valu) => {
                return  (
                <div className = 'h2'>
                <iframe  src={valu.vido} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <p className="tit">{valu.title}</p>
                </div>
                )
                 })
        }
         </div>
         </section>
         {/* hollywood songs */}
         <section className='hollysec' id='holy'>
         <div className='h4'>Get the Bang on with the top pop Music!</div>
         <div className='gridd' >
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
        </section>
        {/* punjabi */}
        <section className='punsec' id='pun'>
         <div className='h4'>Desi Tadka</div>
        <div className='grid' >

        {
            Psongs.map((val) => {
                return  (
                <div className = 'h2'>
                <iframe  src={val.vido} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <p className="tit">{val.title}</p>
                </div>
                )
                 })
        }
         </div>
         </section>
         {/* party songs */}
         <section className='partysec' id='part'>
         <div className='h4'>Get the Bang on with the top pop Music!</div>
         <div className='gridd' >
            {
        Pasongs.map((vall) => {
        return  (
            
        <div className = 'h2'>
         
        <iframe  src={vall.vido} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <p className="tit">{vall.title}</p>
        </div>
        )
         })
        }
      
        </div>
        </section>
        </div>
        </>
       
      )
      
    
  
}

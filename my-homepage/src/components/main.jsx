import React from 'react'
import myIcon from "../resource/image/icon.png"

//components
import About from './about/About'
import Works from './works/Works'

import "./main.css"

const Main = () => {
    return (
        <div className='main'>
            <div className='main-op'>
                <br />
                <div className='main-icon'>
                    <img className='my-icon' src={myIcon} alt="icon" />
                </div>
                <div className='introduce'>
                    <h1>Hello! <br /> I'm Nimono!</h1>
                </div>
                <br />
            </div>
            <About></About>
            <Works></Works>
        </div>
    )
}

export default Main
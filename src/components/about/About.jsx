import React from 'react'
import Introduce_myself from './Introduce_myself';
import Skills from './Skills';

const About = () => {
    return (
        <div className='w-screen h-screen bg-white flex flex-col items-center pt-40'>
            <h1 className='text-5xl font-bold pb-32'>About</h1>
            <Introduce_myself />
            <Skills />
        </div>
    )
}

export default About
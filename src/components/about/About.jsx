import React from 'react'
import Introduce_myself from './Introduce_myself';
import Skills from './Skills';

const About = () => {
    return (
        <div className='w-screen h-auto min-h-screen bg-white flex flex-col items-center pt-8 md:pt-12 lg:pt-16 xl:pb-20 2xl:pb-24'>
            <h1 className='text-5xl font-bold pb-8 md:pb-12 lg:pb-16 xl:pb-20 2xl:pb-24'>About</h1>
            <Introduce_myself />
            <Skills />
        </div>
    )
}

export default About
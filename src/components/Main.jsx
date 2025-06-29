import React from 'react'

import Top from './Top'
import About from './about/About'
import Works from './works/Works'
import Contact from './Contact'

const Main = () => {
    return (
        <div className='bg-black'>
            <section id="top">
                <Top />
            </section>
            <section id="about">
                <About />
            </section>
            <section id="works">
                <Works />
            </section>
            <section id="contact">
                <Contact />
            </section>
        </div>
    )
}

export default Main
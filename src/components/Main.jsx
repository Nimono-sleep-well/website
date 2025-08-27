import React from 'react'

import Top from './Top'
import About from './about/About'
import Works from './works/Works'
import Contact from './Contact'

const Main = () => {
    return (
        <div className='bg-black'>
            <section id="top" className=''>
                <Top />
            </section>
            <section id="about" className=''>
                <About />
            </section>
            <section id="works" className=''>
                <Works />
            </section>
        </div>
    )
}

export default Main
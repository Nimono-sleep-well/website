import React from 'react'

import "./header.css"

const Header = () => {
    return (
        <div className='header'>
            <ul className='header-list'>
                <li>
                    <a className='header-button' href="#ABOUT">
                        <h3>ABOUT</h3>
                    </a>
                </li>
                <li>
                    <a className='header-button' href="#WORKS">
                        <h3>WORKS</h3>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Header
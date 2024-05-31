import React from 'react'

import blender from "../../resource/image/blender.svg"
import twitter from "../../resource/image/twitter.svg"
import github from "../../resource/image/github-icon.svg"
import python from "../../resource/image/python.svg"
import aviutl from "../../resource/image/AviUtl.svg"
import YouGotRickRolled from "../../resource/image/youtube.svg"

import "./About.css"
//import 'react-tabs/style/react-tabs.css';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

const About = () => {
    return (
        <div className='about'>
            <div className='about-inner'>
                <div className='title'>
                    <br /><br />
                    <a className="title-sign" name="ABOUT">
                        <h1>ABOUT</h1>
                        <hr />
                    </a>
                    <br /><br />
                </div>
                <div className='about-tab'>
                    <Tabs>
                        <TabList>
                            <Tab><h3 className='about-list'>LINKS</h3></Tab>
                            <Tab><h3 className='about-list'>FAVORITE</h3></Tab>
                            <hr />
                        </TabList>

                        <TabPanel>
                            <ul>
                                <li className='tab-list'>
                                    <a href="https://twitter.com/Nimono_blend">
                                        <img className='link-icon' src={twitter} alt="Twitter-Logo" />
                                        <h4 className='link-alt'>Twitter</h4>
                                    </a>
                                </li>
                                <li className='tab-list'>
                                    <a href="https://github.com/Nimono-sleep-well">
                                        <img className='link-icon' src={github} alt="github-Logo" />
                                        <h4 className='link-alt'>GitHub</h4>
                                    </a>
                                </li>
                                <li className='tab-list'>
                                    <a href="https://youtu.be/dQw4w9WgXcQ?si=2Sl7ebNu5JwdSZI8&t=0">
                                        <img className='link-icon' src={YouGotRickRolled} alt="YouTube-logo" />
                                        <h4 className='link-alt'>YouTube</h4>
                                    </a>
                                </li>
                            </ul>
                            <br />
                        </TabPanel>
                        <TabPanel>
                            <ul>
                                <li>
                                    <img className='favo-icon' src={blender} alt="Blender-Logo" />
                                    <h4 className='favo-alt'>Blender</h4>
                                </li>
                                <li>
                                    <img className='favo-icon' src={python} alt="Python-Logo" />
                                    <h4 className='favo-alt'>Python</h4>
                                </li>
                                <li>
                                    <img className='favo-icon' src={aviutl} alt="AviUtl-Logo" />
                                    <h4 className='favo-alt'>AviUtl</h4>
                                </li>
                            </ul>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}

export default About
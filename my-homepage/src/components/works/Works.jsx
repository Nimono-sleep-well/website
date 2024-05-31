import React from 'react'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

import cg from "../../resource/image/works-list/clock.png"
import prog from "../../resource/image/works-list/valorant_logo_originl.png"

import "./Works.css"

const Works = () => {
    return (
        <div className='works'>
            <div className='works-inner'>
                <div className='title'>
                    <br /><br />
                    <a className='title-sign' name="WORKS">
                        <h1>WORKS</h1>
                        <hr />
                    </a>
                    <br /><br />
                </div>
                <div className='works-tab'>
                    <Tabs>
                        <TabList>
                            <Tab>
                                <div className='works-parents'>
                                    <img className='works-img' src={prog} alt="prog" />
                                    <div className='mask'>
                                        <h3>Programming</h3>
                                    </div>
                                </div>
                            </Tab>
                            <Tab>
                                <div className='works-parents'>
                                    <img className='works-img' src={cg} alt="clock" />
                                    <div className='mask'>
                                        <h3>3DCG</h3>
                                    </div>
                                </div>
                            </Tab>
                        </TabList>
                    </Tabs>
                    <ul>
                        <li>
                            <div className='works-parents'>
                                <img className='works-img' src={prog} alt="prog" />
                                <div className='mask'>
                                    <h3>Programming</h3>
                                </div>
                            </div>
                        </li>
                        <li>
                            
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Works
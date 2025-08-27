import React from 'react'
import { useState } from 'react'
import Aurora from '../Aurora/Aurora'
import Orb from '../Orb/Orb'
import Products from './Products'
import Highlights from './Highlights'

import generateRandomPositions from '../../functions/generateRandomPositions'
import { div } from 'three/tsl'

const AuroraColor = [
    ["#3A29FF", "#FF94B4", "#FF3232"],
    ["#D747FF", "#FF1A1A", "#FB8E6A"],
    ["#47B9FF", "#291AFF", "#FF47F0"]
];

const Works = () => {
    // useState を関数コンポーネント内に移動
    const [randomPosition, setrandomPosition] = useState([]);
    const [toggleInfo, setToggleInfo] = useState(0)
    
    const toggle = () => {
        if (toggleInfo == 0) {
            setToggleInfo(1);
        } else {
            setToggleInfo((toggleInfo) => toggleInfo % 2 + 1);
        }
        console.log(toggleInfo)
    }
    

    return (
        <div className='relative w-screen h-auto min-h-screen flex items-center justify-center bg-black'>
            <Aurora
                colorStops={AuroraColor[Number(toggleInfo)]}
                blend={0.5}
                amplitude={1.0}
                speed={0.5}
            />
            <button className='absolute text-white z-30 flex flex-col justify-center items-center' onClick={toggle}>
                <Orb
                    hoverIntensity={0.5}
                    rotateOnHover={true}
                    hue={Number(toggleInfo) * 200}
                    forceHoverState={false}
                />
            </button>
            {toggleInfo == 1 && 
                <div className='absolute text-white z-10 flex flex-col justify-center items-center pointer-events-none'>
                    <Products toggleInfo={toggleInfo}></Products>
                </div>
            }
            {toggleInfo == 2 &&
                <div className='absolute text-white z-10 flex flex-col justify-center items-center pointer-events-none'>
                    <Highlights toggleInfo={toggleInfo}></Highlights>
                </div>
            }
        </div>
    )
}

export default Works
import React from 'react'
import MetaBalls from './MetaBalls/MetaBalls'
import OpeningAnimation from './OpeningAnimation'
import SplitText from './SplitText/SplitText'

const handleAnimationComplete = () => {
    console.log('All letters have animated!');
};

const Top = () => {
    return (
        <div className='relative w-screen h-screen'>
            <SplitText
                text={"Howdy!👋 \n I'm Nimono!"}
                className='absolute z-50 text-9xl w-full h-full translate-y-1/3 text-white font-semibold text-center pointer-events-none mix-blend-difference'
                delay={100}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
                onLetterAnimationComplete={() => console.log("Animation complete")}
            />
            <MetaBalls 
                className='overflow-hidden'
                color="#00FFFF" 
                cursorBallColor="#0000FF" 
                speed={0.3} 
                enableMouseInteraction={true} 
                hoverSmoothness={0.05} 
                animationSize={30} 
                ballCount={15} 
                clumpFactor={1} 
                cursorBallSize={3} 
                enableTransparency={true}
            />
        </div>  
    ) 
}

export default Top
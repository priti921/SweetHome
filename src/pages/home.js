import React from 'react'
import leftSvg from '../images/SVG/LeftSvg.svg'

function home() {
    return (
        <div className="landing-page">
            <p className="landing-text">Homemade cakes to order</p>

            <div className="landing-button" >
                <button >choose a cake</button>
             </div>
             <img className="left-svg" src={leftSvg} alt="left-svg"></img>
        </div>
    )
}

export default home

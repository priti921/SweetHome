import React from 'react'
import leftSvg from '../images/SVG/LeftSvg.svg';
import rightSvg from '../images/SVG/RightSvg2.svg';

function home() {
    return (
        <div className="landing-page">
            <div className="landing-page-details">
                <p className="landing-text">Homemade cakes to order</p>

                <div className="landing-button" >
                    <button >choose a cake</button>
                </div>
            </div>

             <img className="left-svg" src={leftSvg} alt="left-svg"></img>
             <img className="right-svg" src={rightSvg} alt="right-svg"></img>
        </div>
    )
}

export default home

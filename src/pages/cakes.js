import React from 'react'
import leftSvg from '../images/SVG/LeftSvg.svg'
import rightSvg from '../images/SVG/RightSvg.svg'

function cakes() {
    return (
        <div className="cake-page">
            <div className="cake-page-title">
                    <p className="cake-page-text">Get your favorite cakes here</p>
            </div>
            <img className="left-svg" src={leftSvg} alt="left-svg"></img>
             <img className="right-svg" src={rightSvg} alt="right-svg"></img>
            <div className="landing-page-cake-cards">
                    <div className="cake-card"></div>
                    <div className="cake-card"></div>
                    <div className="cake-card"></div>
                    <div className="cake-card"></div>
                    <div className="cake-card"></div>
                    <div className="cake-card"></div>
                    <div className="cake-card"></div>
                    <div className="cake-card"></div>
                    <div className="cake-card"></div>
                    <div className="cake-card"></div>
             </div>
        </div>
    )
}

export default cakes

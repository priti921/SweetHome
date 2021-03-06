import React from 'react'
import { Link } from 'react-router-dom';
import Copyright from '../components/Copyright';
import leftSvg from '../images/SVG/LeftSvg.svg';
import rightSvg from '../images/SVG/RightSvg2.svg';

function home() {
    return (
        <div className="landing-page">
            <div className="landing-page-details">
                
                    <p className="landing-text">Homemade cakes to order</p>

                <div className="landing-button" >
                    <Link to='/cakes'>
                        <button >choose a cake</button>
                    </Link>
                </div>
            </div>

             <img className="left-svg" src={leftSvg} alt="left-svg"></img>
             <img className="right-svg" src={rightSvg} alt="right-svg"></img>

             <div className="landing-page-cake-cards">
                    <div className="cake-card"></div>
                    <div className="cake-card"></div>
                    <div className="cake-card"></div>
                    <div className="cake-card"></div>
                    <div className="cake-card"></div>
             </div>
             <Copyright/>
        </div>
    )
}

export default home

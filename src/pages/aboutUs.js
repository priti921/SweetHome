import React from 'react'
import Copyright from '../components/Copyright'
import leftSvg from '../images/SVG/LeftSvg.svg'
import rightSvg from '../images/SVG/RightSvg.svg'

function aboutUs() {
    return (
        <div className="about-us">
            <div className="about-us-title">
                <p>About Us</p>
            </div>
            <div className="about-us-text-box">
                <p className="about-us-text">
                Welcome to [store name], your number one source for all things [product, ie: shoes, bags, dog treats]. We're dedicated to giving you the very best of [product], with a focus on [three characteristics, ie: dependability, customer service and uniqueness.]
                Founded in [year] by [founder's name], [store name] has come a long way from its beginnings in a [starting location, ie: home office, toolshed, Houston, TX.]. When [store founder] first started out, his/her passion for [passion of founder, ie: helping other parents be more eco-friendly, providing the best equipment for his fellow musicians] drove him to [action, ie: do intense research, quit her day job], and gave him the impetus to turn hard work and inspiration into to a booming online store.

                We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.

                Sincerely,
                Name, [title, ie: CEO, Founder, etc.]
                </p>
            </div>
            <Copyright/>
             <img className="left-svg" src={leftSvg} alt="left-svg"></img>
             <img className="right-svg" src={rightSvg} alt="right-svg"></img>

        </div>
    )
}

export default aboutUs

import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/NewsHub.css"

const NewsHub = () => {
    return (
        <div>
            <div className="main">
                <div className="container">
                    <div className="upr-text">
                        News Hub
                    </div>
                    <div className="mid-text">
                        "Stay Informed, Stay Ahead."
                    </div>
                    <div className="lwr-text">
                        At NewsHub, we bring you the latest headlines, personalized stories, and in-depth reports to keep you informed and ahead of the curve.
                    </div>
                    <div className="btn">
                        <Link to="/Home"> <button>Get to page</button></Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default NewsHub

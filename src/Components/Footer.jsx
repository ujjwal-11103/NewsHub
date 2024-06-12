import React from 'react'
import "../styles/Footer.css"

const Footer = () => {
    return (
        // <div>
        //     <div className="foot-container">
        //         <div className="copyright">

        //         </div>
        //         <div className="gotoTop">

        //         </div>
        //     </div>
        // </div>
        <div className="cat-footer">
            <p>&copy; {new Date().getFullYear()} Ujjwal Upadhyay. All rights reserved.</p>
        </div>
    )
}

export default Footer

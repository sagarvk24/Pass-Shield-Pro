import React from 'react'
import './Footer.css'
// import "./Shootingstars.scss"

const Footer = () => {
    return (
        <footer>
            <div className="background-video">
                <video autoPlay muted loop className="video">
                    <source src="./nebula.mp4" type="video/mp4" />
                </video>
                <div className='foot'>

                    <div className="headline">Powered By : </div>
                    <div className="logo-box">
                        <img id="cordova" src="./cordova.png" alt="" />
                        <img id="vite" src="./Vite.png" alt="" />
                        <img id="plus" src="./plus.png" alt="" />
                        <img src="./react-logo.png" alt="" />
                        <img id='jsx' src="./jsx.png" alt="" />
                        <img id="tail" src="./tailwindcss.png" alt="" />
                        {/* <img id='three' src="./Threejs.png" alt="" /> */}
                        <img src="./nodejs.png" alt="" />
                        <img id="ex" src="./expressjs.png" alt="" />
                        <img id="mongo" src="./mongodb.png" alt="" />
                        <img id="toast" src="./Toastify.png" alt="" />
                    </div>
                    {/* <div className="created">
                    Created By Sagar
                </div> */}

                </div>

            </div>
        </footer>
    )
}

export default Footer

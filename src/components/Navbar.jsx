import React, { useEffect, useState } from 'react';
import "./Navbar.css";

const Navbar = () => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
    }, []);



    return (
        <nav className='bg-gradient-to-r from-blue-800 to-blue-600'>
            <div className="navbar flex justify-between items-center">
            <div className="dropdown">
                    <button className="drop btn btn-secondary dropdown-toggle dropdown-btn" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                        ABOUT
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <li><a className="dropdown-item" target='_blank' href="https://react.dev/">Learn React</a></li>
                        <li><a className="dropdown-item" target='_blank' href="https://vitejs.dev/">What is Vite?</a></li>
                        <li><a className="dropdown-item" target='_blank' href="https://nodejs.org/en">NodeJS</a></li>
                        <li><a className="dropdown-item" target='_blank' href="https://www.npmjs.com/">npm</a></li>
                        <li><a className="dropdown-item" target='_blank' href="https://cordova.apache.org/">Apache Cordova</a></li>
                        <li><a className="dropdown-item" target='_blank' href="https://www.mongodb.com/">MongoDB</a></li>
                        <li><a className="dropdown-item" target='_blank' href="https://tailwindcss.com/">Tailwind CSS</a></li>
                        <li><a className="dropdown-item" target='_blank' href="https://expressjs.com/">Express JS</a></li>
                    </ul>
                </div>
                {/* <img id='lion' src="./lion.png" alt="GitHub" /> */}
                <div className={`flex items-center`}>
                    {/* <img src="./lion1.png" height={60} width={80} style={{ marginLeft: '5px' }} alt="" className={`${animate ? 'strike2-animation' : ''}`} /> */}
                    <div className={`text-white title font-extrabold text-2xl font-poppins  ${animate ? 'strike-animation' : ''}`}>
                        {/* <span className='text-charcoal-gray'>&lt;</span> */}
                        <img id='lock' src="./padlock.png" width={30} alt="" />
                        <span >PassShield</span>
                        <span >Pro</span>



                    </div>
                    <div className="button border border-slate-900 ">
                        <a href="https://github.com/sagarvk18/Pass-Shield-Pro/" target="_blank">
                            <img src="./github.png" alt="GitHub" />
                        </a>
                        <span>Contribute</span>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

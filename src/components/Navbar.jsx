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
                <div className={`flex items-center`}>
                    {/* <img src="./lion1.png" height={60} width={80} style={{ marginLeft: '5px' }} alt="" className={`${animate ? 'strike2-animation' : ''}`} /> */}
                    <div className={`text-white title font-extrabold text-2xl font-poppins  ${animate ? 'strike-animation' : ''}`}>
                        {/* <span className='text-charcoal-gray'>&lt;</span> */}
                        <img id='lock' src="./padlock.png" width={30} alt="" />
                        <span >PassShield</span>
                        <span >Pro</span>

                        <div className="button border  border-slate-900">
                            <img width={50} src="./github.png" alt="" />
                            Contribute
                        </div>

                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

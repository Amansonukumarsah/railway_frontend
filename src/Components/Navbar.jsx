import React from 'react'
import { NavLink } from "react-router-dom";
import logo from './Imagedata/logo.png'
import secondry from './Imagedata/secondry.png'
import { useState,useEffect } from 'react';
const Navbar = () => {
    var [date,setDate] = useState(new Date());
    
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light" >
                <div>
                    <img style={{ height: '60px' }} src={logo} alt="" srcset="" />
                </div>
                <div className='mx-5'>
                    <NavLink className="navbar-brand " exact to="/">Home</NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>

                <div className="collapse navbar-collapse mainnav" style={{ marginLeft: '50px' }} id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <NavLink className="nav-link" exact to="/login">LOGIN </NavLink>
                        </li>
                        <li className="nav-item mx-2">
                            <NavLink className="nav-link" exact to="/reg">REGISTRATION</NavLink>
                        </li>
                        <li className="nav-item mx-2">
                            <NavLink className="nav-link " exact to="/con" tabindex="-1" >Contact_us</NavLink>
                        </li>
                        <li className="nav-item mx-2">
                            <NavLink className="nav-link " exact to="/train" tabindex="-1" >Train</NavLink>
                        </li>
                        <li className="nav-item mx-2">
                            <NavLink className="nav-link disabled" to="#" tabindex="-1" aria-disabled="true">ALERTS: {date.toLocaleTimeString()}</NavLink>
                        </li>

                    </ul>
                </div>
                
                <div>
                    <img style={{ height: '60px' }} src={secondry} alt="" />
                </div>
            </nav>
        </>
    )
}

export default Navbar;
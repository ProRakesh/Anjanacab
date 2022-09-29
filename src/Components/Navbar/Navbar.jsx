import React from 'react'
import '../Navbar/Navbar.css'
import { NavLink, Link } from 'react-router-dom'
import { useState } from 'react'


const Navbar = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false)   
     return (
        <>
            <div className="Navhead">
                <div className="navleft">
                    <Link to="/"> <span className='logo'>Anjanacab
                    </span>    </Link>


                </div>

                <div className="navright" >
                    <ul className= {isNavExpanded===false ?'  navlink  activebtn':'navlink'} >
                        <li >
                            <NavLink to=''>Home</NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='./About'> About Us </NavLink>
                        </li>
                        <li> <NavLink to='./Services'> Services </NavLink></li>
                        <li> <NavLink to='./Tourplaces'> Tour Places </NavLink></li>
                        <li> <NavLink to='./Bookcab'>Book Now </NavLink></li>
                        <li><NavLink to='./Contact'>Contact</NavLink> </li>

                    </ul>

                </div>

                <div className="menubar" onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </div>


        </>
    )
}

export default Navbar
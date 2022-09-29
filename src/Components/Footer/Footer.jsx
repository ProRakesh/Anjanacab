import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import { FaEnvelope, FaPhoneAlt, FaFacebook,FaInstagram,FaLinkedin } from 'react-icons/fa'

const Footer = () => {
const dat=new Date()
    function MY_Date(){
        return (
            dat.getFullYear()
        )
    }
    return (
        <>
            <div className="footer">
                <div className="foot">
                    <div className="ftitle">
                        <span>About Us</span>

                        <span>We provide driven A/C and non-A/C Cabs


                            at the best price. <br />Our Drivers are well-mannered
                            and courteous in their<br /> interactions
                            and have thorough knowledge of the
                            local routes <br />and travel destinations.
                            We provide a complete and
                            reliable cab <br />services which make your
                            journey enjoyable.We provide<br /> services 24*7
                            for your cab.</span>


                    </div>
                    <div className="footlink">
                        <span>Quick Links</span>
                        <ul>


                            <li><Link to='/'>Home</Link></li>
                            <li><Link to=''>About</Link></li>
                            <li><Link to=''>Serrvices</Link></li>
                            <li><Link to=''>Contact</Link></li>
                        </ul>
                    </div>

                    <div className="adres">
                        <span>ADDRESS</span>
                        <span>245,NewYork,jalori Gate ,Pal Road ,Jodhpur(Rajasthan)
                        </span>
                        <span><FaPhoneAlt />+91941234567</span>
                        <span> <FaEnvelope /> rakeshpatel583@gmail.com</span>
<div className="social">
                    <span><a rel="noreferrer"  href='https://www.facebook.com/' target='_blank'><FaFacebook/></a></span>
                    <span><a rel="noreferrer"  href='https://www.Instagram.com/' target='_blank'><FaInstagram/></a></span>
                    <span><a rel="noreferrer"  href='https://www.linkedin.com/login' target='_blank'><FaLinkedin/></a></span>
                    </div>
                    </div>

                </div>




            </div>
            <div className="copyright">
    <span>{MY_Date()}-</span><span> Rakesh-All Rights Reserved</span>
</div>

        </>
    )
}

export default Footer
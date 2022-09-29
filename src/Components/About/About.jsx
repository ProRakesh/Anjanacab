import React from 'react'
import './About.css'
import WhyChooseus from '../WhyChooseus/WhyChooseus'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
const About = () => {
  return (
    <>
   
    <div className="aboutheader">

<span>About Us</span>
<span>Safe/trusty/Reliable/well-trained/Punctual</span>

    </div>

    <div className="aboutdetail">
<span>Anjancab</span>
<p>Aanjanacabs is a trusted car agency and taxi rental company in Jodhpur. We provide driven A/C and non-A/C Cabs at the best price. Our Drivers are well-mannered and courteous in their interactions and have thorough knowledge of the local routes and travel destinations. We provide a complete and reliable cab services which make your journey enjoyable.We provide services 24*7 for your cab, car and taxi rental needs and queries about online cab booking for Rajasthan.Our chauffeurs are well-mannered and have thorough knowledge of the local routes and travel destinations. Many of our customers return to avail our services on a regular basis. We use the latest equipments and technology to facilitate your travel in and around the city of Jodhpur, Rajasthan. Our transparent pricing policy ensures a loyal customers base. Our growing base of loyal clients and riders is a testimony in itself that we are the cab service provider in Jodhpur. our cab are very Clean and Safe, Comfortable, Cheap and Economical. so you can enjoy your trip.</p>
<button className='button'><Link  to='../Bookcab/'>book now</Link></button>

    </div>

<WhyChooseus/>

<Footer/>

    </>
  )
}

export default About
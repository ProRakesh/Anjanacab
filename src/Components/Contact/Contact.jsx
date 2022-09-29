import React from 'react'
import './Contact.css'

import { FaPhoneAlt  } from 'react-icons/fa'
import {FaEnvelope } from 'react-icons/fa'
import Contacthome from '../ContactHome/Contacthome'
import Footer from '../Footer/Footer'
const Contact = () => {
  return (
    <>
<div className="contactmain">
  <span>CONTACT US</span>
  <span>We Are Here To Help And Answer Any Question Related Booking Or Rental
</span>
  </div>   

  <div className="leftcontact">
  <div className="contaddr">
  
  <label className='conttitle'>ADDRESS</label>
                        <span>245,NewYork,jalori Gate ,Pal Road ,Jodhpur(Rajasthan)
                        </span>
                        <label className='conttitle'>MOBILE</label>

                        <span><FaPhoneAlt />+91941234567</span>
                        <label className='conttitle'>EMAIL</label>

                        <span> <FaEnvelope /> rakeshpatel83@gmail.com</span>
  </div>


  <div className="contmap">

  <div className="mapouter">
    <div className="gmap_canvas">
      <iframe className="gmap_iframe" frameBorder="0"   scrolling="no"
       marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=University of Oxford&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
        </iframe>
        </div>
       </div></div>
  </div>

<Contacthome/>


<Footer/>
   
    </>
  )
}

export default Contact
import React from 'react'
import './Home.css'
import { FaPhoneAlt } from 'react-icons/fa';
import Bookcabonline from '../Bookcabonline/Bookcabonline';
import Serviceshome from '../serviceshome/Serviceshome';
import Sdata from '../Sdata';
import WhyChooseus from '../WhyChooseus/WhyChooseus';
import Tourhome from '../TourHome/Tourhome';
import TourData from '../TourHome/tourdata';
import Tourplaces from '../TourPlaces/Tourplaces';
import { Link } from 'react-router-dom';
import Contacthome from '../ContactHome/Contacthome';
import inova from'../img/ma.png'
import Footer from '../Footer/Footer';

function nacard(val,index) {

  return (
    <Serviceshome
    key={index}
      imagename={val.img}
      Card_title={val.Title}
      Card_text={val.Ctext}

    />
  )
}



const Home = (props) => {

  return (
    <>
   
      <div className="header">
        <div className="title">
          <span>Welcome to Anjanacab!</span>
          <span>book online cab and save time & money </span>
          <div className="btnheader">
            <button className='btn' >Tour Places</button>
            <button className='btn'>Book Cab</button>
          </div>
        </div>
      </div>
   <div className="callpart">
        <span>Directly Call Us For Booking Cab</span>
        <span><FaPhoneAlt />+919412546251</span>
      </div>

      
      <div className="book_cab">
<Bookcabonline />
</div>
      
   
       <div className="aboutpart">
        <div className="aboutdesc">
          <span>About us</span>
          <p>Aanjanacabs is a trusted car agency and taxi rental
            company in Jodhpur. We provide driven A/C and non-A/C Cabs at the best price. Our Drivers are well-mannered and courteous in their interactions and have thorough knowledge of the local routes and travel destinations. We provide a complete and reliable cab services which make your journey enjoyable.We provide services 24*7 for your cab, car and taxi rental needs and queries about online cab booking for Rajasthan.Our chauffeurs are well-mannered and have thorough knowledge of the local routes and travel destinations. Many of our customers
            return to avail our services on a regular basis.

          </p>
          <button className='abbtn'>Readmore </button>



        </div>
        <div className="aboutimg">
          <img src={inova} alt="" />
        </div>

      </div> 
 
      <div className="servicetitle">
        <span>AVAILABLE CABS</span>
        <span>CLEAN,SAFE AND COMFORTABLE CARS

        </span>
      </div>

      <div className="service_car">

        {Sdata.map(nacard)}

      </div>

 <div>
  <WhyChooseus/>
</div> 

<div className="tourtitle">

<span>JODHPUR TOURISM</span>
<span>HIRE CARS FOR POPULAR DESTINATION OF JODHPUR
</span>
   </div>

   <div className="courtour">

{TourData.map((val,index)=>{
   return( <Tourhome 
    key={val.index}
    Desc={val.Desc}
    Title={val.title}
    Img1={val.Image1}
    Img2={val.Image2}
    />)
})}
  
 
   </div>
   <div className='TBtn'>
   <button className='TourBtn'><Link to={Tourplaces}>View All PLaces</Link></button>
   </div>

<div>
  <Contacthome/>
</div>
<div><Footer/></div>
    </>
  )
}

export default Home
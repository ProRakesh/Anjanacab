import React from 'react'
import Serviceshome from '../serviceshome/Serviceshome'
import './Services.css'
import Footer from '../Footer/Footer';

import { Link } from 'react-router-dom';
import Bookcabonline from '../Bookcabonline/Bookcabonline';



const Services = () => {
  return (
    <>
      <div className="services">
        <span>SERVICES</span>
        <span>Best Reliable And Secure Services In The City
        </span>
      </div>
      <div className="srdetail">
        <span>SERVICES
        </span>
        <p>Aanjanacab is one of the most searching and booking cab by clients because of trusted,kind,secure and expert Drivers. We have not disappointed any client yet, when he needed a cab, we would reach him on time and reach him at the destination on time, so today all the clients are happy with us. you can book a cab with ease on our website, or call us if you’d like to discuss your itinerary with our executives in detail. When you book an outstation cab with us,Our expert drivers will guide you through some of the best experiences Rajasthan has to offer. From the time you make a booking with us to the time you get back home, we’ll make sure you have a great road trip.We want you to go on a road trip at most and enjoy the trip with a good cab. You can travel anywhere from Jodhpur to outstation or anywhere in Rajasthan. If you want to, you can book cab on our website because about our driver outstation and Rajasthan and they know the local route and highways and trips of every city and if you want to go outside of Rajasthan also you can book the cab We can give you comfort, clean and best rate of cab facility We will provide you and believe that your trip will be safe and with comfort.</p>
      </div>
      <div className="sermore">
        <span>Services of Tour and Trips-</span>
        <ol>
          <li>Local Tour/Outstation Tour/Vacation Tour</li>
          <li>Religion places</li>
          <li>Events or Functions</li>
          <li>Airport/Railways pickup</li>
          <li>Scorporate tours</li>
          <li>Wedding Functions.</li>
          <li>For Celbrities need luxry cab</li>






        </ol>
      </div>

      <div className='back'>
      <Bookcabonline/>
      </div>


<Footer/>
    </>
  )
}

export default Services
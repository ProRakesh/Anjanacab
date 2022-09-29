import React from 'react'
import { useState } from 'react'
import Bookcabonline from '../Bookcabonline/Bookcabonline'
import './Bookcab.css'
import { FaPhoneAlt } from 'react-icons/fa'

import Footer from '../Footer/Footer'


const Bookcab = () => {

  return(
    <>


<div className="bookheader">
<span>CALL US 24/7</span>
<span><FaPhoneAlt/>
+(91)9414294262

</span>
<span>For any query related to booking and car renteal
</span>

</div>

        <Bookcabonline/>
        <div className='footon'> <Footer/></div>

       
    </>

  )
}


export default Bookcab
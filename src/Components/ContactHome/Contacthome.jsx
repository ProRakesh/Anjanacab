import React from 'react'
import './Contacthome.css'
const Contacthome = () => {
    return (
        <>
            <div className="contact">
                <div className="contacttitle">
                    <span>CONTACT US</span>
                    <span>We are here to help and answer any question you might have . 
                        <span>
                         we look forward to hearing from you.</span>

                    </span>
                </div>
                <div className="formcontact">
                    <form action="" method="post">
                        <input type="text" placeholder='Name' />
                        <input type="email" placeholder='Email' />
                        <input type="textarea" placeholder='Message' />



                        <button className="cobtn"type="submit">Book Now</button>

                    </form>
                </div>
            </div>


        </>
    )
}

export default Contacthome
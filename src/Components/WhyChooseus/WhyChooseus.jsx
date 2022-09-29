import React from 'react'
import './why.css'
import { FaShieldAlt, FaIdCard, FaCarAlt, FaCreditCard, FaThumbsUp, FaHeadphones } from 'react-icons/fa';

const WhyChooseus = () => {
    return (
        <>

            <div className="choose">
                <div className="chtitle">

                    <span>Why Choose Us</span>
                    <span>Best services in the city</span>

                </div>

                <div className="ch_info">
                    <div className="ch_details">
                        <span className='falogo'> <FaShieldAlt /></span>
                        <strong>Secured booking</strong>
                        <p>  You can make a successful booking here. We will not share your information like email,mobile and
                            other information to anyone else </p>
                    </div>
                    <div className="ch_details">
                        <span className='falogo'> <FaIdCard /></span>
                        <strong>trained Drivers</strong>
                        <p>  Our driver is well-trianed and experienced drivers and have driving license and
                        you will feel comfortable,safe them, you will not face any problem with our driver</p>
                    </div>
                    <div className="ch_details">
                        <span className='falogo'> <FaCarAlt /></span>
                        <strong> Luxury cars</strong>
                        <p>  Various cars and cabs, SUVs, MUV, mini cab, coaches and small car taxi and all cabs,
                        cars and taxis integrated with quality GPS tracking system.</p>
                    </div>
                    <div className="ch_details">
                        <span className='falogo'> <FaCreditCard /></span>
                        <strong>online payment accepted</strong>
                        <p>  we are Accept various payment options like debit card, credit cards, online banking and various
                        online money wallets and
                        cash.</p>
                    </div>
                    
                    <div className="ch_details">
                        <span className='falogo'> <FaThumbsUp /></span>
                        <strong> Reliable services</strong>
                        <p>  Cab booking services for travels like scorporate tours, event tours,
                        marriage ceremony tours or travels, holiday travel
                        and many more. </p>
                    </div>
                    <div className="ch_details">
                        <span className='falogo'> <FaHeadphones /></span>
                        <strong>Customer service</strong>
                        <p>  If any problem related to cabs,Drivers and tour related then you can contact us we will
                        help us.We provide transparent and quality customer service. </p>
                    </div>



                </div>






            </div>


            {/* <div className="m_detail">
                    <div className='falogo'> <FaShieldAlt />

                    </div>
                    <strong>Secured booking</strong>
                </div>

                <div className='falogo'> <FaIdCard /></div>
                <div className='falogo'> <FaCarAlt /></div>
                <div className='falogo'> <FaCreditCard /></div>
                <div className='falogo'> <FaThumbsUp /></div>
                <div className='falogo'> <FaHeadphones /></div>

*/}





        </>
    )
}

export default WhyChooseus
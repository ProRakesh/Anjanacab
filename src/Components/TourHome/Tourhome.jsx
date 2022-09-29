import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import 'swiper/css';
import 'swiper/css/pagination';
import './Tourhome.css'


const Tourhome = (props) => {
    return (
        <>
          
          <div className='trtitle'>
            <span>{props.Title}</span>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                       
                        modules={[Autoplay]}
                        className="mySwiper"
                    >
                      
                        <SwiperSlide>
                            
           
          
          
                            <span className="desc">{props.Desc} </span>
                            <img src={props.Img1} alt="image" />
                            
                            </SwiperSlide>
                        <SwiperSlide>
                        <span>{props.Desc}</span>
                            <img src={props.Img2} alt="" /></SwiperSlide>
                       
                       
                    </Swiper>
                  
                    </div>

                  
              
        </>
    )
}

export default Tourhome
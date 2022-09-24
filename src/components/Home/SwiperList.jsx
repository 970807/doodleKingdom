import React from 'react'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import './SwiperList.css'

export default function SwiperList(props) {
  return (
    <div className="swiper-wrapper" style={props.style}>
      <div className="container">
        <Swiper
          className="swiper"
          modules={[Navigation]}
          allowTouchMove={false}
          navigation
          loop
        >
          {props.swiperList.map((item) => (
            <SwiperSlide key={item.id}>
              <a href={item.linkUrl} target="_blank" rel="noreferrer">
                <img src={item.imgUrl} alt="" />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

"use client"
import React, { useState } from 'react'
import SectionHeading from '../SectionHeading/SectionHeading'
import Image from 'next/image';
// import StarRatingComponent from 'react-star-rating-component';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';
import { Pagination, Navigation } from 'swiper/modules';
import StarRating from '../StarRating/StarRating';

export default function Testimonials() {
  

  return (
    <div className="bg-white my-16 px-6 sm:px-10">
      <div className='max-w-[1320px] mx-auto '>
        <SectionHeading title="Let our customers speak for us" color="text-black" />

        <div className='my-10 flex flex-col lg:flex-row'>

          <div className='w-full lg:w-1/2'>
            <h3 className='font-montserrat text-2xl text-black font-bold'>Dev Staff Augmentation for Flight & Hotels Management System</h3>

            <div className='my-8'>
              <div className='flex items-center my-2'>
                <Image src="/images/Ellipse-7.png" height={16} width={16} alt={''} className='w-4 h-4' />
                <p className='font-montserrat text-sm font-normal text-black pl-4'>Sweden</p>
              </div>
              <div className='flex items-center my-2'>
                <Image src="/images/travel-icon-1.png" height={16} width={16} alt={''} className='w-4 h-4' />
                <p className='font-montserrat text-sm font-normal text-black pl-4'>Leisure, Travel, & Tourism</p>
              </div>
            </div>

            <div className='mb-4 w-3/4'>
              <h6 className="font-montserrat font-semibold text-base leading-[25px] ">Project summary:</h6>
              <p className='font-montserrat text-sm leading-6 font-normal'>To scale and augment internal development teams, pwrteams provided resources to help develop a travel system to manage flights and hotels. The tech stack includes AngularJS, C#, SQL, and RabbitMQ.</p>
            </div>

            <div className='mb-4 w-3/4'>
              <h6 className="font-montserrat font-semibold text-base leading-[25px] ">Feedback summary:</h6>
              <p className='font-montserrat text-sm leading-6 font-normal'>pwrteams has helped deliver on a major project along with some minor ones. They're able to adapt well to client feedback and treat the relationship as a two-way street.</p>
            </div>

          </div>


          <div className='w-full lg:w-1/2'>
            <Swiper
              pagination={{
                type: 'fraction',
              }}
              navigation={true}
              loop={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className='bg-lightRed max-w-[600px] p-8 rounded-[20px]'>
                  <StarRating />
                  <h4 className='font-bold text-[32px] leading-[42px] mt-2 mb-6'>“ They are very professional and are always interested in understanding the problem that we are solving.”</h4>
                  <div className='flex items-center'>
                    <Image src="/images/Dp.png" height={74} width={74} className='w-[75px] h-[75px] rounded-full' alt='profile' />
                    <div className='pl-4'>
                      <h4 className="font-montserrat font-semibold text-lg leading-[22px] mb-2">Daniel Dandemar</h4>
                      <p className="font-montserrat text-sm leading-[15px] font-normal mb-1">Tech Manager</p>
                      <p className="font-montserrat text-sm leading-[15px] font-normal">Nordic Leisure Travel Group</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className='bg-lightRed max-w-[600px] p-8 rounded-[20px]'>
                <StarRating />

                  <h4 className='font-bold text-[32px] leading-[42px] mt-2 mb-6'>“ They are very professional and are always interested in understanding the problem that we are solving.”</h4>
                  <div className='flex items-center'>
                    <Image src="/images/Dp.png" height={74} width={74} className='w-[75px] h-[75px] rounded-full' alt='profile' />
                    <div className='pl-4'>
                      <h4 className="font-montserrat font-semibold text-lg leading-[22px] mb-2">Daniel Dandemar</h4>
                      <p className="font-montserrat text-sm leading-[15px] font-normal mb-1">Tech Manager</p>
                      <p className="font-montserrat text-sm leading-[15px] font-normal">Nordic Leisure Travel Group</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <div className='flex items-center justify-end max-w-[600px] my-6'>
                {/* <button className='bg-lightRed w-[52px] h-[52px] rounded-full flex justify-center items-center '><Image src="/images/Previous-arrow.svg" height={18} width={14} alt='previous' /></button> */}
                {/* <p className='text-primary font-montserrat font-medium text-lg leading-[21px] mx-6'>1/5</p> */}
                {/* <button className='bg-lightRed w-[52px] h-[52px] rounded-full flex justify-center items-center ' ><Image src="/images/Next-arrow.svg" height={18} width={14} alt='next' /></button> */}
              </div>

            </Swiper>
          </div>
        </div>
      </div>

    </div>
  )
}

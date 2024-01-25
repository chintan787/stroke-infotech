"use client"
import React, { useState } from 'react'
import SectionHeading from '../SectionHeading/SectionHeading'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';
import StarRating from '../StarRating/StarRating';

export default function Testimonials() {


  return (
    <div className="bg-white my-16 px-6 sm:px-10">
      <div className='max-w-[1320px] mx-auto '>
        <SectionHeading title="Let our customers speak for us" color="text-black" />

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
            <div className='my-10 flex flex-col lg:flex-row gap-10 lg:gap-12 justify-between items-start'>

              <div className='w-full lg:w-2/5'>
                <h3 className='font-secondaryFont text-xl md:text-2xl text-black font-bold'>Dev Staff Augmentation for Flight & Hotels Management System</h3>

                <div className='my-8'>
                  <div className='flex items-center my-2'>
                    <Image src="/images/Ellipse-7.png" height={16} width={16} alt={''} className='w-4 h-4' />
                    <p className='font-secondaryFont text-sm font-normal text-black text-black pl-4'>Sweden</p>
                  </div>
                  <div className='flex items-center my-2'>
                    <Image src="/images/travel-icon-1.png" height={16} width={16} alt={''} className='w-4 h-4' />
                    <p className='font-secondaryFont text-sm font-normal text-black pl-4'>Leisure, Travel, & Tourism</p>
                  </div>
                </div>

                <div className='mb-4 w-3/4'>
                  <h6 className="font-secondaryFont font-semibold text-base leading-[25px] text-black">Project summary:</h6>
                  <p className='font-secondaryFont text-sm leading-6 font-normal text-black'>To scale and augment internal development teams, pwrteams provided resources to help develop a travel system to manage flights and hotels. The tech stack includes AngularJS, C#, SQL, and RabbitMQ.</p>
                </div>

                <div className='mb-4 w-3/4'>
                  <h6 className="font-secondaryFont font-semibold text-base leading-[25px]  text-black">Feedback summary:</h6>
                  <p className='font-secondaryFont text-sm leading-6 font-normal text-black'>pwrteams has helped deliver on a major project along with some minor ones. They're able to adapt well to client feedback and treat the relationship as a two-way street.</p>
                </div>

              </div>


              <div className='w-full lg:w-1/2  pt-0.5'>

                <div className='bg-lightRed max-w-[590px] ml-auto mr-auto lg:ml-auto lg:mr-0  p-6 md:p-8 rounded-[20px]'>
                  <StarRating />
                  <h4 className='font-bold text-2xl md:text-[2rem] leading-[2.125rem] md:leading-[2.625rem] mt-2 mb-6 text-black'>“ They are very professional and are always interested in understanding the problem that we are solving.”</h4>
                  <div className='flex items-center'>
                    <Image src="/images/Dp.png" height={74} width={74} className='w-[65px] md:w-[75px] h-[65px] md:h-[75px] rounded-full' alt='profile' />
                    <div className='pl-4'>
                      <h4 className="font-secondaryFont font-semibold text-base md:text-lg  leading-5 md:leading-[1.375rem] mb-2 text-black">Daniel Dandemar</h4>
                      <p className="font-secondaryFont text-sm leading-[0.938rem] font-normal mb-1 text-black">Tech Manager</p>
                      <p className="font-secondaryFont text-sm leading-[0.938rem] font-normal text-black">Nordic Leisure Travel Group</p>
                    </div>
                  </div>
                </div>

                <div className='flex items-center justify-end max-w-[600px] my-6'>
                </div>

              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='my-10 flex flex-col lg:flex-row gap-10 lg:gap-12 justify-between items-start'>

              <div className='w-full lg:w-2/5'>
                <h3 className='font-secondaryFont text-xl md:text-2xl text-black font-bold'>Dev Staff Augmentation for Flight & Hotels Management System</h3>

                <div className='my-8'>
                  <div className='flex items-center my-2'>
                    <Image src="/images/Ellipse-7.png" height={16} width={16} alt={''} className='w-4 h-4' />
                    <p className='font-secondaryFont text-sm font-normal text-black text-black pl-4'>Sweden</p>
                  </div>
                  <div className='flex items-center my-2'>
                    <Image src="/images/travel-icon-1.png" height={16} width={16} alt={''} className='w-4 h-4' />
                    <p className='font-secondaryFont text-sm font-normal text-black pl-4'>Leisure, Travel, & Tourism</p>
                  </div>
                </div>

                <div className='mb-4 w-3/4'>
                  <h6 className="font-secondaryFont font-semibold text-base leading-[25px] text-black">Project summary:</h6>
                  <p className='font-secondaryFont text-sm leading-6 font-normal text-black'>To scale and augment internal development teams, pwrteams provided resources to help develop a travel system to manage flights and hotels. The tech stack includes AngularJS, C#, SQL, and RabbitMQ.</p>
                </div>

                <div className='mb-4 w-3/4'>
                  <h6 className="font-secondaryFont font-semibold text-base leading-[25px]  text-black">Feedback summary:</h6>
                  <p className='font-secondaryFont text-sm leading-6 font-normal text-black'>pwrteams has helped deliver on a major project along with some minor ones. They're able to adapt well to client feedback and treat the relationship as a two-way street.</p>
                </div>

              </div>


              <div className='w-full lg:w-1/2  pt-0.5'>

                <div className='bg-lightRed max-w-[590px] ml-auto mr-auto lg:ml-auto lg:mr-0  p-6 md:p-8 rounded-[20px]'>
                  <StarRating />
                  <h4 className='font-bold text-2xl md:text-[2rem] leading-[2.125rem] md:leading-[2.625rem] mt-2 mb-6 text-black'>“ They are very professional and are always interested in understanding the problem that we are solving.”</h4>
                  <div className='flex items-center'>
                    <Image src="/images/Dp.png" height={74} width={74} className='w-[65px] md:w-[75px] h-[65px] md:h-[75px] rounded-full' alt='profile' />
                    <div className='pl-4'>
                      <h4 className="font-secondaryFont font-semibold text-base md:text-lg  leading-5 md:leading-[1.375rem] mb-2 text-black">Daniel Dandemar</h4>
                      <p className="font-secondaryFont text-sm leading-[0.938rem] font-normal mb-1 text-black">Tech Manager</p>
                      <p className="font-secondaryFont text-sm leading-[0.938rem] font-normal text-black">Nordic Leisure Travel Group</p>
                    </div>
                  </div>
                </div>

                <div className='flex items-center justify-end max-w-[600px] my-6'>
                </div>

              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='my-10 flex flex-col lg:flex-row gap-10 lg:gap-12 justify-between items-start'>

              <div className='w-full lg:w-2/5'>
                <h3 className='font-secondaryFont text-xl md:text-2xl text-black font-bold'>Dev Staff Augmentation for Flight & Hotels Management System</h3>

                <div className='my-8'>
                  <div className='flex items-center my-2'>
                    <Image src="/images/Ellipse-7.png" height={16} width={16} alt={''} className='w-4 h-4' />
                    <p className='font-secondaryFont text-sm font-normal text-black text-black pl-4'>Sweden</p>
                  </div>
                  <div className='flex items-center my-2'>
                    <Image src="/images/travel-icon-1.png" height={16} width={16} alt={''} className='w-4 h-4' />
                    <p className='font-secondaryFont text-sm font-normal text-black pl-4'>Leisure, Travel, & Tourism</p>
                  </div>
                </div>

                <div className='mb-4 w-3/4'>
                  <h6 className="font-secondaryFont font-semibold text-base leading-[25px] text-black">Project summary:</h6>
                  <p className='font-secondaryFont text-sm leading-6 font-normal text-black'>To scale and augment internal development teams, pwrteams provided resources to help develop a travel system to manage flights and hotels. The tech stack includes AngularJS, C#, SQL, and RabbitMQ.</p>
                </div>

                <div className='mb-4 w-3/4'>
                  <h6 className="font-secondaryFont font-semibold text-base leading-[25px]  text-black">Feedback summary:</h6>
                  <p className='font-secondaryFont text-sm leading-6 font-normal text-black'>pwrteams has helped deliver on a major project along with some minor ones. They're able to adapt well to client feedback and treat the relationship as a two-way street.</p>
                </div>

              </div>


              <div className='w-full lg:w-1/2  pt-0.5'>

                <div className='bg-lightRed max-w-[590px] ml-auto mr-auto lg:ml-auto lg:mr-0  p-6 md:p-8 rounded-[20px]'>
                  <StarRating />
                  <h4 className='font-bold text-2xl md:text-[2rem] leading-[2.125rem] md:leading-[2.625rem] mt-2 mb-6 text-black'>“ They are very professional and are always interested in understanding the problem that we are solving.”</h4>
                  <div className='flex items-center'>
                    <Image src="/images/Dp.png" height={74} width={74} className='w-[65px] md:w-[75px] h-[65px] md:h-[75px] rounded-full' alt='profile' />
                    <div className='pl-4'>
                      <h4 className="font-secondaryFont font-semibold text-base md:text-lg  leading-5 md:leading-[1.375rem] mb-2 text-black">Daniel Dandemar</h4>
                      <p className="font-secondaryFont text-sm leading-[0.938rem] font-normal mb-1 text-black">Tech Manager</p>
                      <p className="font-secondaryFont text-sm leading-[0.938rem] font-normal text-black">Nordic Leisure Travel Group</p>
                    </div>
                  </div>
                </div>

                <div className='flex items-center justify-end max-w-[600px] my-6'>
                </div>

              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

    </div>
  )
}

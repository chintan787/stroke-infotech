"use client"
import React from 'react'
import SectionHeading from '../SectionHeading/SectionHeading'
import SectionParagraph from '../SectionHeading/SectionParagraph'
import Button from '../Button/Button'
import Image from 'next/image'
// import Slider from "react-draggable-slider";
// import Draggable from 'react-draggable';
// import { Resizable } from 're-resizable';

import { Pagination, Navigation } from 'swiper/modules';
import FacebookIcon from '../../../../icons/FacebookIcon'
import TwitterIcon from '../../../../icons/TwitterIcon'
// import SliderDemo from './SliderDemo'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function OurWork() {



    // const projectList = [
    //     {
    //       title: "Nature's Life",
    //       image: FacebookIcon,
    //       description:
    //         "Praesent quis congue nisi. Vivamus dapibus suscipit magna at imperdiet. Mauris consectetur pharetra metus eu suscipit. Maecenas augue tortor, consequat vitae lacus id, pharetra tempor mauris. Suspendisse sodales commodo erat, non imperdiet nisl scelerisque at. Nulla porttitor gravida diam, in ornare ipsum accumsan bibendum. Morbi ut ante metus. "
    //     },
    //     {
    //       title: "Into The Waters",
    //       image: TwitterIcon,
    //       description:
    //         "Duis at tellus vitae velit aliquet varius. Fusce luctus libero et ligula tristique lobortis. Vestibulum eu placerat risus, eu semper augue. Integer at purus sit amet elit pretium viverra. Suspendisse id fringilla nibh, nec dictum urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. "
    //     },
    //     {
    //       title: "Higher Than The Stars",
    //       image: FacebookIcon,
    //       description:
    //         "Praesent quis congue nisi. Vivamus dapibus suscipit magna at imperdiet. Maecenas augue tortor, consequat vitae lacus id, pharetra tempor mauris. Suspendisse sodales commodo erat, non imperdiet nisl scelerisque at. Nulla porttitor gravida diam, in ornare ipsum accumsan bibendum. Morbi ut ante metus. Proin rhoncus magna lectus, nec consequat augue ultricies eu."
    //     },
    //     {
    //       title: "Miniature Wonders",
    //       image: TwitterIcon,
    //       description:
    //         "Praesent quis congue nisi. Vivamus dapibus suscipit magna at imperdiet. Mauris consectetur pharetra metus eu suscipit. Maecenas augue tortor, consequat vitae lacus id, pharetra tempor mauris. Suspendisse sodales commodo erat, non imperdiet nisl scelerisque at. Nulla porttitor gravida diam, in ornare ipsum accumsan bibendum. Morbi ut ante metus. "
    //     },
    //     {
    //       title: "Giants Of History",
    //       image: FacebookIcon,
    //       description:
    //         "Duis at tellus vitae velit aliquet varius. Fusce luctus libero et ligula tristique lobortis. Vestibulum eu placerat risus, eu semper augue. Integer at purus sit amet elit pretium viverra. Suspendisse id fringilla nibh, nec dictum urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. "
    //     }
    //   ];

    //   const sliderSettings = {
    //     data: projectList,
    //     speed: 3000,
    //     easing: "ease",
    //     bgColor: "#070707",
    //     showButton: true,
    //     buttonText: "View projects",
    //     buttonHref: "https://www.example.com",
    //     buttonTarget: "_self"
    //   };

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const data = {}


    return (
        <div className="bg-white my-16 sm:px-10">
            <div className='max-w-[1320px] mx-auto '>
                {/* <SliderDemo /> */}


                <div className='flex justify-between items-start flex-wrap px-6 sm:px-10'>
                    <div>
                        <SectionHeading title="We’d love to work with you." color="text-black" />
                        <div className='max-w-3xl my-6'>
                            <SectionParagraph text="We treat client projects as if they were our own, understanding the underlying needs and astonishing users with the results." />
                        </div>
                    </div>
                    <div className='pt-2'>
                        <button className='bg-primary text-white font-medium px-10 py-3 text-lg md:text-xl lg:text-[1.375rem] leading-[1.125rem] md:leading-5 lg:leading-[1.375rem] rounded-[50px] flex justify-center items-center'>
                            View All
                        </button>
                    </div>
                </div>
                <div>

                    <div className='my-10'>

                        <div className='bg-lightRed h-auto lg:h-[600px] xl:h-[700px] w-full rounded-[50px] border-x-[10px] border-primary px-8 md:px-10 py-10 md:py-12'>


                            <Slider {...settings} draggable={true} >
                                <div className='relative h-full'>
                                    <div className='h-[600px] rounded-[20px] px-4 md:px-10' style={{ background: "linear-gradient(256.4deg, rgba(158, 121, 228, 0.3) 0%, rgba(253, 112, 114, 0.3) 100%)" }} >
                                        <div className='flex flex-col lg:flex-row justify-between h-full gap-4'>
                                            <div className='w-full mx-auto lg:w-2/5 self-center lg:self-end pb-10 pt-10'>
                                                <h3 className='font-bold text-[35px] leading-[22px]'>Green Scents</h3>
                                                <div className='max-w-[362px] mt-10 p-5 rounded-[20px]' style={{ background: "radial-gradient(97.57% 210.75% at 0.9% 2.98%, rgba(255, 255, 255, 0.53) 0%, rgba(255, 255, 255, 0.13) 100%)" }}>
                                                    <div className='flex justify-between items-center flex-wrap lg:flex-nowrap'>
                                                        <Image src="/images/WorkSection/Logo.svg" height={50} width={100} alt='logo' className='h-[50px] w-auto object-contain' />
                                                        <button className='bg-primary text-white font-semibold px-6 lg:px-4 xl:px-6 py-2 text-sm rounded-[50px] flex justify-center items-center mt-4'>
                                                            Visit Website
                                                        </button>
                                                    </div>
                                                    <p className="font-normal text-xs leading-[22px] text-black py-3">
                                                        CareerVillage needed to attract and engage more users in order to truly achieve its vision of democratizing access to career advice and guidance.
                                                    </p>
                                                    <div className='flex gap-5 items-center'>
                                                        <Image src="/images/WorkSection/Wordpress.svg" height={32} width={32} alt='wordpress' className='h-8 w-8' />
                                                        <Image src="/images/WorkSection/Woo.svg" height={32} width={32} alt='woo' className='h-8 w-auto' />
                                                        <Image src="/images/WorkSection/Html.svg" height={32} width={32} alt='html' className='h-8 w-auto' />

                                                    </div>
                                                </div>
                                            </div>
                                            <div className='w-full lg:w-3/5 self-center lg:self-end '>
                                                <Image src='/images/WorkSection/Webpage.png' height={500} width={500} alt='' className='h-full w-full rounded-t-[20px] mx-auto' />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className='relative h-full'>
                                    <div className='h-[600px] rounded-[20px] px-4 md:px-10' style={{ background: "linear-gradient(256.4deg, rgba(158, 121, 228, 0.3) 0%, rgba(253, 112, 114, 0.3) 100%)" }} >
                                        <div className='flex flex-col lg:flex-row justify-between h-full gap-4'>
                                            <div className='w-full mx-auto lg:w-2/5 self-center lg:self-end pb-10 pt-10'>
                                                <h3 className='font-bold text-[35px] leading-[22px]'>Green Scents</h3>
                                                <div className='max-w-[362px] mt-10 p-5 rounded-[20px]' style={{ background: "radial-gradient(97.57% 210.75% at 0.9% 2.98%, rgba(255, 255, 255, 0.53) 0%, rgba(255, 255, 255, 0.13) 100%)" }}>
                                                    <div className='flex justify-between items-center flex-wrap lg:flex-nowrap'>
                                                        <Image src="/images/WorkSection/Logo.svg" height={50} width={100} alt='logo' className='h-[50px] w-auto object-contain' />
                                                        <button className='bg-primary text-white font-semibold px-6 lg:px-4 xl:px-6 py-2 text-sm rounded-[50px] flex justify-center items-center mt-4'>
                                                            Visit Website
                                                        </button>
                                                    </div>
                                                    <p className="font-normal text-xs leading-[22px] text-black py-3">
                                                        CareerVillage needed to attract and engage more users in order to truly achieve its vision of democratizing access to career advice and guidance.
                                                    </p>
                                                    <div className='flex gap-5 items-center'>
                                                        <Image src="/images/WorkSection/Wordpress.svg" height={32} width={32} alt='wordpress' className='h-8 w-8' />
                                                        <Image src="/images/WorkSection/Woo.svg" height={32} width={32} alt='woo' className='h-8 w-auto' />
                                                        <Image src="/images/WorkSection/Html.svg" height={32} width={32} alt='html' className='h-8 w-auto' />

                                                    </div>
                                                </div>
                                            </div>
                                            <div className='w-full lg:w-3/5 self-center lg:self-end '>
                                                <Image src='/images/WorkSection/Webpage.png' height={500} width={500} alt='' className='h-full w-full rounded-t-[20px] mx-auto' />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className='relative h-full'>
                                    <div className='h-[600px] rounded-[20px] px-4 md:px-10' style={{ background: "linear-gradient(256.4deg, rgba(158, 121, 228, 0.3) 0%, rgba(253, 112, 114, 0.3) 100%)" }} >
                                        <div className='flex flex-col lg:flex-row justify-between h-full gap-4'>
                                            <div className='w-full mx-auto lg:w-2/5 self-center lg:self-end pb-10 pt-10'>
                                                <h3 className='font-bold text-[35px] leading-[22px]'>Green Scents</h3>
                                                <div className='max-w-[362px] mt-10 p-5 rounded-[20px]' style={{ background: "radial-gradient(97.57% 210.75% at 0.9% 2.98%, rgba(255, 255, 255, 0.53) 0%, rgba(255, 255, 255, 0.13) 100%)" }}>
                                                    <div className='flex justify-between items-center flex-wrap lg:flex-nowrap'>
                                                        <Image src="/images/WorkSection/Logo.svg" height={50} width={100} alt='logo' className='h-[50px] w-auto object-contain' />
                                                        <button className='bg-primary text-white font-semibold px-6 lg:px-4 xl:px-6 py-2 text-sm rounded-[50px] flex justify-center items-center mt-4'>
                                                            Visit Website
                                                        </button>
                                                    </div>
                                                    <p className="font-normal text-xs leading-[22px] text-black py-3">
                                                        CareerVillage needed to attract and engage more users in order to truly achieve its vision of democratizing access to career advice and guidance.
                                                    </p>
                                                    <div className='flex gap-5 items-center'>
                                                        <Image src="/images/WorkSection/Wordpress.svg" height={32} width={32} alt='wordpress' className='h-8 w-8' />
                                                        <Image src="/images/WorkSection/Woo.svg" height={32} width={32} alt='woo' className='h-8 w-auto' />
                                                        <Image src="/images/WorkSection/Html.svg" height={32} width={32} alt='html' className='h-8 w-auto' />

                                                    </div>
                                                </div>
                                            </div>
                                            <div className='w-full lg:w-3/5 self-center lg:self-end '>
                                                <Image src='/images/WorkSection/Webpage.png' height={500} width={500} alt='' className='h-full w-full rounded-t-[20px] mx-auto' />
                                            </div>
                                        </div>

                                    </div>
                                </div>


                                {/* <div>
                                    <div className='h-screen rounded-[20px] px-4 md:px-10' style={{ background: "linear-gradient(256.4deg, rgba(158, 121, 228, 0.3) 0%, rgba(253, 112, 114, 0.3) 100%)" }} >
                                        <div className='flex flex-col lg:flex-row justify-between h-screen gap-4'>
                                            <div className='w-full mx-auto lg:w-2/5 self-center lg:self-end pb-10 pt-10'>
                                                <h3 className='font-bold text-[35px] leading-[22px]'>Green Scents</h3>
                                                <div className='max-w-[362px] mt-10 p-5 rounded-[20px]' style={{ background: "radial-gradient(97.57% 210.75% at 0.9% 2.98%, rgba(255, 255, 255, 0.53) 0%, rgba(255, 255, 255, 0.13) 100%)" }}>
                                                    <div className='flex justify-between items-center flex-wrap lg:flex-nowrap'>
                                                        <Image src="/images/WorkSection/Logo.svg" height={50} width={100} alt='logo' className='h-[50px] w-auto object-contain' />
                                                        <button className='bg-primary text-white font-semibold px-6 lg:px-4 xl:px-6 py-2 text-sm rounded-[50px] flex justify-center items-center mt-4'>
                                                            Visit Website
                                                        </button>
                                                    </div>
                                                    <p className="font-normal text-xs leading-[22px] text-black py-3">
                                                        CareerVillage needed to attract and engage more users in order to truly achieve its vision of democratizing access to career advice and guidance.
                                                    </p>
                                                    <div className='flex gap-5 items-center'>
                                                        <Image src="/images/WorkSection/Wordpress.svg" height={32} width={32} alt='wordpress' className='h-8 w-8' />
                                                        <Image src="/images/WorkSection/Woo.svg" height={32} width={32} alt='woo' className='h-8 w-auto' />
                                                        <Image src="/images/WorkSection/Html.svg" height={32} width={32} alt='html' className='h-8 w-auto' />

                                                    </div>
                                                </div>
                                            </div>
                                            <div className='w-full lg:w-3/5 self-center lg:self-end '>
                                                <Image src='/images/WorkSection/Webpage.png' height={500} width={500} alt='' className='h-full w-full rounded-t-[20px] mx-auto' />
                                            </div>
                                        </div>

                                    </div>
                                </div> */}


                                {/* <div>
                                    <div className='h-screen rounded-[20px] px-4 md:px-10' style={{ background: "linear-gradient(256.4deg, rgba(158, 121, 228, 0.3) 0%, rgba(253, 112, 114, 0.3) 100%)" }} >
                                        <div className='flex flex-col lg:flex-row justify-between h-screen gap-4'>
                                            <div className='w-full mx-auto lg:w-2/5 self-center lg:self-end pb-10 pt-10'>
                                                <h3 className='font-bold text-[35px] leading-[22px]'>Green Scents</h3>
                                                <div className='max-w-[362px] mt-10 p-5 rounded-[20px]' style={{ background: "radial-gradient(97.57% 210.75% at 0.9% 2.98%, rgba(255, 255, 255, 0.53) 0%, rgba(255, 255, 255, 0.13) 100%)" }}>
                                                    <div className='flex justify-between items-center flex-wrap lg:flex-nowrap'>
                                                        <Image src="/images/WorkSection/Logo.svg" height={50} width={100} alt='logo' className='h-[50px] w-auto object-contain' />
                                                        <button className='bg-primary text-white font-semibold px-6 lg:px-4 xl:px-6 py-2 text-sm rounded-[50px] flex justify-center items-center mt-4'>
                                                            Visit Website
                                                        </button>
                                                    </div>
                                                    <p className="font-normal text-xs leading-[22px] text-black py-3">
                                                        CareerVillage needed to attract and engage more users in order to truly achieve its vision of democratizing access to career advice and guidance.
                                                    </p>
                                                    <div className='flex gap-5 items-center'>
                                                        <Image src="/images/WorkSection/Wordpress.svg" height={32} width={32} alt='wordpress' className='h-8 w-8' />
                                                        <Image src="/images/WorkSection/Woo.svg" height={32} width={32} alt='woo' className='h-8 w-auto' />
                                                        <Image src="/images/WorkSection/Html.svg" height={32} width={32} alt='html' className='h-8 w-auto' />

                                                    </div>
                                                </div>
                                            </div>
                                            <div className='w-full lg:w-3/5 self-center lg:self-end '>
                                                <Image src='/images/WorkSection/Webpage.png' height={500} width={500} alt='' className='h-full w-full rounded-t-[20px] mx-auto' />
                                            </div>
                                        </div>

                                    </div>
                                </div> */}
                            </Slider>


                           

                            {/* <div className='h-full rounded-[20px] px-4 md:px-10' style={{ background: "linear-gradient(256.4deg, rgba(158, 121, 228, 0.3) 0%, rgba(253, 112, 114, 0.3) 100%)" }} >
                                <div className='flex flex-col lg:flex-row justify-between h-full gap-4'>

                                    <div className='w-full mx-auto lg:w-2/5 self-center lg:self-end pb-10 pt-10'>

                                        <h3 className='font-bold text-[35px] leading-[22px]'>Green Scents</h3>
                                        <div className='max-w-[362px] mt-10 p-5 rounded-[20px]' style={{ background: "radial-gradient(97.57% 210.75% at 0.9% 2.98%, rgba(255, 255, 255, 0.53) 0%, rgba(255, 255, 255, 0.13) 100%)" }}>
                                            <div className='flex justify-between items-center flex-wrap lg:flex-nowrap'>
                                                <Image src="/images/WorkSection/Logo.svg" height={50} width={100} alt='logo' className='h-[50px] w-auto object-contain' />
                                                <button className='bg-primary text-white font-semibold px-6 lg:px-4 xl:px-6 py-2 text-sm rounded-[50px] flex justify-center items-center mt-4'>
                                                    Visit Website
                                                </button>
                                            </div>
                                            <p className="font-normal text-xs leading-[22px] text-black py-3">
                                                CareerVillage needed to attract and engage more users in order to truly achieve its vision of democratizing access to career advice and guidance.
                                            </p>
                                            <div className='flex gap-5 items-center'>
                                                <Image src="/images/WorkSection/Wordpress.svg" height={32} width={32} alt='wordpress' className='h-8 w-8' />
                                                <Image src="/images/WorkSection/Woo.svg" height={32} width={32} alt='woo' className='h-8 w-auto' />
                                                <Image src="/images/WorkSection/Html.svg" height={32} width={32} alt='html' className='h-8 w-auto' />

                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-full lg:w-3/5 self-center lg:self-end '>
                                        <Image src='/images/WorkSection/Webpage.png' height={500} width={500} alt='' className='h-full w-full rounded-t-[20px] mx-auto' />
                                    </div>
                                </div>
                            </div> */}


                            {/* </SwiperSlide>*/}
                            {/* </Swiper> */}
                        </div>
                    </div>

                </div>


                <div className="col-3">
                                <div className="snippet" data-title="dot-shuttle">
                                    <div className="stage filter-contrast">
                                        <div className="dot-shuttle"></div>
                                    </div>
                                </div>
                            </div>

            </div>
        </div >
    )
}

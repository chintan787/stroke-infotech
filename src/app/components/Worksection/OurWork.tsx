"use client"
import React from 'react'
import SectionHeading from '../SectionHeading/SectionHeading'
import SectionParagraph from '../SectionHeading/SectionParagraph'
import Image from 'next/image'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function OurWork() {

    const settings = {
        dots: true,
        arrows:false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };


    return (
        <div className="bg-white my-16 sm:px-10">
            <div className="max-w-[1320px] mx-auto">
                {/* <SliderDemo /> */}


                <div className="flex justify-between items-start flex-wrap px-6 sm:px-10">
                    <div>
                        <SectionHeading title="We’d love to work with you." color="text-black" />
                        <div className="max-w-3xl my-6">
                            <SectionParagraph text="We treat client projects as if they were our own, understanding the underlying needs and astonishing users with the results." />
                        </div>
                    </div>
                    <div className="pt-2">
                        <button className="bg-primary text-white font-medium px-10 py-3 text-lg md:text-xl lg:text-[1.375rem] leading-[1.125rem] md:leading-5 lg:leading-[1.375rem] rounded-[50px] flex justify-center items-center">
                            View All
                        </button>
                    </div>
                </div>
                <div>

                    <div className="my-10">
                    {/* px-6 sm:px-8 md:px-10 */}
                        <div className="bg-lightRed max-h-auto lg:max-h-[600px] xl:max-h-[700px] w-full rounded-[50px] border-x-[10px] border-primary px-4 md:px-6 py-8 sm:py-10 md:py-12">
                            {/* h-auto lg:h-[600px] xl:h-[700px] */}
                            <Slider {...settings} draggable={true} >
                                <div className="relative h-full px-2 md:px-4">
                                    {/* h-auto lg:h-[500px] xl:h-[600px] */}
                                    <div className="h-auto lg:h-[500px] xl:h-[600px] rounded-[20px] px-4 md:px-10" style={{ background: "linear-gradient(256.4deg, rgba(158, 121, 228, 0.3) 0%, rgba(253, 112, 114, 0.3) 100%)" }} >
                                        <div className="flex flex-col lg:flex-row justify-between h-full gap-4">
                                            <div className="w-full mx-auto lg:w-2/5 self-center lg:self-end pb-10 pt-10">
                                                <h3 className="font-bold text-3xl md:text-[35px] leading-[22px]">Green Scents</h3>
                                                <div className="max-w-[362px] mt-10 p-5 rounded-[20px]" style={{ background: "radial-gradient(97.57% 210.75% at 0.9% 2.98%, rgba(255, 255, 255, 0.53) 0%, rgba(255, 255, 255, 0.13) 100%)" }}>
                                                    <div className="flex justify-between items-center flex-wrap lg:flex-nowrap">
                                                        <Image src="/images/WorkSection/Logo.svg" height={50} width={100} alt="logo" className="h-[50px] w-auto object-contain" />
                                                        <button className="bg-primary text-white font-semibold px-6 lg:px-4 xl:px-6 py-2 text-sm rounded-[50px] flex justify-center items-center mt-4">
                                                            Visit Website
                                                        </button>
                                                    </div>
                                                    <p className="font-normal text-xs leading-[22px] text-black py-3">
                                                        CareerVillage needed to attract and engage more users in order to truly achieve its vision of democratizing access to career advice and guidance.
                                                    </p>
                                                    <div className="flex gap-5 items-center">
                                                        <Image src="/images/WorkSection/Wordpress.svg" height={32} width={32} alt="wordpress" className="h-8 w-8" />
                                                        <Image src="/images/WorkSection/Woo.svg" height={32} width={32} alt="woo" className="h-8 w-8" />
                                                        <Image src="/images/WorkSection/Html.svg" height={32} width={32} alt="html" className="h-8 w-8" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-full lg:w-3/5 self-center lg:self-end">
                                                <Image src="/images/WorkSection/Webpage.png" height={500} width={500} alt="" className="h-full w-full rounded-t-[20px] mx-auto" />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="relative h-full px-2 md:px-4" >
                                    <div className="h-auto lg:h-[500px] xl:h-[600px] rounded-[20px] px-4 md:px-10" style={{ background: "linear-gradient(256.4deg, rgba(158, 121, 228, 0.3) 0%, rgba(253, 112, 114, 0.3) 100%)" }} >
                                        <div className="flex flex-col lg:flex-row justify-between h-full gap-4">
                                            <div className="w-full mx-auto lg:w-2/5 self-center lg:self-end pb-10 pt-10">
                                                <h3 className="font-bold text-3xl md:text-[35px] leading-[22px]">Green Scents</h3>
                                                <div className="max-w-[362px] mt-10 p-5 rounded-[20px]" style={{ background: "radial-gradient(97.57% 210.75% at 0.9% 2.98%, rgba(255, 255, 255, 0.53) 0%, rgba(255, 255, 255, 0.13) 100%)" }}>
                                                    <div className="flex justify-between items-center flex-wrap lg:flex-nowrap">
                                                        <Image src="/images/WorkSection/Logo.svg" height={50} width={100} alt="logo" className="h-[50px] w-auto object-contain" />
                                                        <button className="bg-primary text-white font-semibold px-6 lg:px-4 xl:px-6 py-2 text-sm rounded-[50px] flex justify-center items-center mt-4">
                                                            Visit Website
                                                        </button>
                                                    </div>
                                                    <p className="font-normal text-xs leading-[22px] text-black py-3">
                                                        CareerVillage needed to attract and engage more users in order to truly achieve its vision of democratizing access to career advice and guidance.
                                                    </p>
                                                    <div className="flex gap-5 items-center">
                                                        <Image src="/images/WorkSection/Wordpress.svg" height={32} width={32} alt="wordpress" className="h-8 w-8" />
                                                        <Image src="/images/WorkSection/Woo.svg" height={32} width={32} alt="woo" className="h-8 w-8" />
                                                        <Image src="/images/WorkSection/Html.svg" height={32} width={32} alt="html" className="h-8 w-8" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-full lg:w-3/5 self-center lg:self-end">
                                                <Image src="/images/WorkSection/Webpage.png" height={500} width={500} alt="" className="h-full w-full rounded-t-[20px] mx-auto" />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="relative h-full px-2 md:px-4">
                                    <div className="h-auto lg:h-[500px] xl:h-[600px] rounded-[20px] px-4 md:px-10" style={{ background: "linear-gradient(256.4deg, rgba(158, 121, 228, 0.3) 0%, rgba(253, 112, 114, 0.3) 100%)" }} >
                                        <div className="flex flex-col lg:flex-row justify-between h-full gap-4">
                                            <div className="w-full mx-auto lg:w-2/5 self-center lg:self-end pb-10 pt-10">
                                                <h3 className="font-bold text-3xl md:text-[35px] leading-[22px]">Green Scents</h3>
                                                <div className="max-w-[362px] mt-10 p-5 rounded-[20px]" style={{ background: "radial-gradient(97.57% 210.75% at 0.9% 2.98%, rgba(255, 255, 255, 0.53) 0%, rgba(255, 255, 255, 0.13) 100%)" }}>
                                                    <div className="flex justify-between items-center flex-wrap lg:flex-nowrap">
                                                        <Image src="/images/WorkSection/Logo.svg" height={50} width={100} alt="logo" className="h-[50px] w-auto object-contain" />
                                                        <button className="bg-primary text-white font-semibold px-6 lg:px-4 xl:px-6 py-2 text-sm rounded-[50px] flex justify-center items-center mt-4">
                                                            Visit Website
                                                        </button>
                                                    </div>
                                                    <p className="font-normal text-xs leading-[22px] text-black py-3">
                                                        CareerVillage needed to attract and engage more users in order to truly achieve its vision of democratizing access to career advice and guidance.
                                                    </p>
                                                    <div className="flex gap-5 items-center">
                                                        <Image src="/images/WorkSection/Wordpress.svg" height={32} width={32} alt="wordpress" className="h-8 w-8" />
                                                        <Image src="/images/WorkSection/Woo.svg" height={32} width={32} alt="woo" className="h-8 w-8" />
                                                        <Image src="/images/WorkSection/Html.svg" height={32} width={32} alt="html" className="h-8 w-8" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-full lg:w-3/5 self-center lg:self-end">
                                                <Image src="/images/WorkSection/Webpage.png" height={500} width={500} alt="" className="h-full w-full rounded-t-[20px] mx-auto" />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="relative h-full px-2 md:px-4">
                                    <div className="h-auto lg:h-[500px] xl:h-[600px] rounded-[20px] px-4 md:px-10" style={{ background: "linear-gradient(256.4deg, rgba(158, 121, 228, 0.3) 0%, rgba(253, 112, 114, 0.3) 100%)" }} >
                                        <div className="flex flex-col lg:flex-row justify-between h-full gap-4">
                                            <div className="w-full mx-auto lg:w-2/5 self-center lg:self-end pb-10 pt-10">
                                                <h3 className="font-bold text-3xl md:text-[35px] leading-[22px]">Green Scents</h3>
                                                <div className="max-w-[362px] mt-10 p-5 rounded-[20px]" style={{ background: "radial-gradient(97.57% 210.75% at 0.9% 2.98%, rgba(255, 255, 255, 0.53) 0%, rgba(255, 255, 255, 0.13) 100%)" }}>
                                                    <div className="flex justify-between items-center flex-wrap lg:flex-nowrap">
                                                        <Image src="/images/WorkSection/Logo.svg" height={50} width={100} alt="logo" className="h-[50px] w-auto object-contain" />
                                                        <button className="bg-primary text-white font-semibold px-6 lg:px-4 xl:px-6 py-2 text-sm rounded-[50px] flex justify-center items-center mt-4">
                                                            Visit Website
                                                        </button>
                                                    </div>
                                                    <p className="font-normal text-xs leading-[22px] text-black py-3">
                                                        CareerVillage needed to attract and engage more users in order to truly achieve its vision of democratizing access to career advice and guidance.
                                                    </p>
                                                    <div className="flex gap-5 items-center">
                                                        <Image src="/images/WorkSection/Wordpress.svg" height={32} width={32} alt="wordpress" className="h-8 w-8" />
                                                        <Image src="/images/WorkSection/Woo.svg" height={32} width={32} alt="woo" className="h-8 w-8" />
                                                        <Image src="/images/WorkSection/Html.svg" height={32} width={32} alt="html" className="h-8 w-8" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-full lg:w-3/5 self-center lg:self-end">
                                                <Image src="/images/WorkSection/Webpage.png" height={500} width={500} alt="" className="h-full w-full rounded-t-[20px] mx-auto" />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </Slider>
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

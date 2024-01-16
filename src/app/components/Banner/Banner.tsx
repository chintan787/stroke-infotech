import React from 'react'
import Image from 'next/image'
import Button from '../Button/Button'
import SectionParagraph from '../SectionHeading/SectionParagraph'

export default function Banner() {
    return (
        <div className="flex flex-col items-center justify-between bg-lightRed">
            <div className="lg:max-w-7xl 2xl:max-w-[1620px] ml-auto pl-6 lg:pl-10 ">
            {/* <div className="self-end"> */}

            <div className="flex justify-end items-center flex-col md:flex-row gap-6 ">
                <div className="w-full lg:w-2/5 py-8 md:py-0">
                    <h1 className=" text-[64px] text-secondary font-bold leading-[70px] mr-12">Scale your enterprise with cross-border teams </h1>
                    <div className='w-4/5 my-6'>
                        <SectionParagraph text="Stroke Infotech is one of the most trusted firms across the globe in software development business. We’re a small team with talented and committed." />
                    </div>
                   
                    <Button buttonText="Read More" />
                </div>
                <div className='w-[90%] lg:w-3/5 '>
                    {/* <Image
                        src="/images/Hero-section.png"
                        alt="Logo"
                        className="h-[650px] w-auto"
                        width={100}
                        height={38}
                        priority
                    /> */}
                    <Image src="/images/Hero-section.png" height={650} width={650} alt='banner_img' className='h-[650px] w-auto object-cover rounded-l-[50px] border-l-[16px] border-primary' />
                    {/* <img src="/images/Hero-section.png" className="h-[650px] w-auto rounded-l-[50px] border-l-[16px] border-primary" /> */}
                </div>
            </div>
            </div>
        </div>
    )
}

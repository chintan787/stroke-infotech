import React from 'react'
import SectionParagraph from '../SectionHeading/SectionParagraph'
import Image from 'next/image'

export default function BlogSection() {
    return (
        <div className="bg-lightRed my-16 py-20 px-6 sm:px-10">
            <div className="max-w-[1320px] mx-auto">
                <div className="flex flex-col lg:flex-row gap-6 xl:gap-12 flex-wrap lg:flex-nowrap">

                    <div className="w-full lg:w-3/5 flex gap-6 xl:gap-12 flex-col sm:flex-row justify-center items-center lg:max-h-[450px]">
                    <div className="max-w-[400px] h-auto w-full bg-white rounded-[20px] shadow-md">
                        <Image src="/images/BlogSection/Blog-1.png" alt='' width={400} height={240}  className="rounded-t-[20px] w-full object-contain" />
                        <div className="my-4">
                            <div className="flex">
                                <div className="bg-primary w-[6px] h-9 rounded-r-[5px]"></div>
                                <p className="text-primary font-normal text-lg md:text-xl leading-5 md:leading-[1.5rem] px-4 my-2">Dec 13 2023</p>
                            </div>
                            <div className="px-5 pt-2 pb-5">
                                <p className="font-secondaryFont font-semibold text-lg md:text-xl leading-[1.625rem] md:leading-[1.875rem] text-black">UX/UI best practices: Extensive interview with Fingers Media designers</p>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-[400px] h-auto w-full bg-white rounded-[20px] shadow-md">
                    <Image src="/images/BlogSection/Blog-2.png" alt='' width={400} height={240}  className='rounded-t-[20px] w-full object-contain' />
                        <div className="my-4">
                            <div className="flex">
                                <div className="bg-primary w-[6px] h-9 rounded-r-[5px]"></div>
                                <p className="text-primary font-normal text-lg md:text-xl leading-5 md:leading-[1.5rem] px-4 my-2">Dec 11 2023</p>
                            </div>
                            <div className="px-5 pt-2 pb-5">
                                <p className="font-secondaryFont font-semibold text-lg md:text-xl leading-[1.625rem] md:leading-[1.875rem] text-black">3 things to remember when you need to publish Android app on Play Store</p>
                            </div>
                        </div>
                    </div>
                    </div>
                    

                    <div className="w-full lg:w-2/5">
                        <h2 className="text-2xl md:text-[1.813rem] leading-9 md:leading-[3rem] text-black font-semibold ">Curious About The Latest Tech Trends And Technologies? Visit Our Blogs</h2>
                        <div className="my-4">
                            <SectionParagraph text="A passionate team of developers, designers & originators, who can visualize and develop breathtaking design, websites and apps for your business." />
                        </div>
                        <div className="bg-[url('/images/BlogSection/Paper-Btn-Bg.png')] bg-no-repeat w-32 h-36 flex justify-evenly items-center flex-col">
                            <p className="font-semibold w-[80%] text-center text-xs leading-4 uppercase">Read Latest blog</p>
                            <button className="w-10 h-10 bg-primary rounded-full flex justify-center items-center">
                                <Image src="/images/BlogSection/Arrow-1.svg" height={16} width={24} alt='' />
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

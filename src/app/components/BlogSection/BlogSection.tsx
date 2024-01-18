import React from 'react'
import SectionParagraph from '../SectionHeading/SectionParagraph'

export default function BlogSection() {
    return (
        <div className="bg-lightRed my-16 py-20 px-6 sm:px-10">
            <div className='max-w-[1320px] mx-auto '>
                <div className='flex gap-6 xl:gap-8 2xl:gap-10 flex-wrap lg:flex-nowrap '>

                    <div className='w-full lg:w-[60%] flex gap-8 flex-col md:flex-row justify-center items-center'>
                    <div className='max-w-full sm:max-w-[400px] w-full bg-white rounded-[20px] shadow-md'>
                        <img src="/images/BlogSection/Blog-1.png" className='rounded-t-[20px] h-60 w-full' />
                        <div className='my-4'>
                            <div className='flex'>
                                <div className='bg-primary w-[6px] h-9 rounded-r-[5px]'></div>
                                <p className='text-primary font-medium text-xl leading-[24px] px-4 my-2'>Dec 13 2023</p>
                            </div>
                            <div className='px-5 pt-2 pb-6 '>
                                <p className='font-secondaryFont font-medium text-xl leading-[30px] text-black'>UX/UI best practices: Extensive interview with Fingers Media designers</p>
                            </div>
                        </div>
                    </div>

                    <div className='max-w-full sm:max-w-[400px] w-full bg-white rounded-[20px] shadow-md'>
                        <img src="/images/BlogSection/Blog-2.png" className='rounded-t-[20px] h-60 w-full' />
                        <div className='my-4'>
                            <div className='flex'>
                                <div className='bg-primary w-[6px] h-9 rounded-r-[5px]'></div>
                                <p className='text-primary font-medium text-xl leading-[24px] px-4 my-2'>Dec 13 2023</p>
                            </div>
                            <div className='px-5 pt-2 pb-6 '>
                                <p className='font-secondaryFont font-medium text-xl leading-[30px] text-black'>3 things to remember when you need to publish Android app on Play Store</p>
                            </div>
                        </div>
                    </div>
                    </div>
                    

                    <div className='w-full lg:w-[40%]'>
                        <h2 className="text-[29px] leading-[48px] text-black font-bold ">Curious About The Latest Tech Trends And Technologies? Visit Our Blogs</h2>
                        <div className="my-4">
                            <SectionParagraph text="A passionate team of developers, designers & originators, who can visualize and develop breathtaking design, websites and apps for your business." />
                        </div>
                        {/* <p className="font-secondaryFont font-regular text-black my-4 text-lg leading-[30px] ">A passionate team of developers, designers & originators, who can visualize and develop breathtaking design, websites and apps for your business.</p> */}
                        <div className="bg-[url('/images/BlogSection/Paper-Btn-Bg.png')] bg-no-repeat w-32 h-36 flex justify-evenly items-center flex-col">
                            <p className="font-semibold w-[80%] text-center text-xs leading-4 uppercase">Read Latest blog</p>
                            <button className='w-10 h-10 bg-primary rounded-full flex justify-center items-center'>
                                <img src="/images/BlogSection/Arrow-1.svg" />
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

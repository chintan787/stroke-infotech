import React from 'react'
import SectionHeading from '../SectionHeading/SectionHeading'
import SectionParagraph from '../SectionHeading/SectionParagraph'
import Button from '../Button/Button'
import Image from 'next/image'
import CodeIcon from '../../../../icons/CodeIcon'
import OptionsIcon from '../../../../icons/OptionsIcon'
import BugIcon from '../../../../icons/BugIcon'

export default function BoxContent() {
    const allimages = [
        { frame: ["/images/Boxcontent/nodejs.png", "/images/Boxcontent/tensorflow.png", "/images/Boxcontent/angular.png", "/images/Boxcontent/azure.png",], alignSelf: 'self-start' },
        { frame: ["/images/Boxcontent/python.png", "/images/Boxcontent/aws.png", "/images/Boxcontent/react.png", "/images/Boxcontent/swift.png",], alignSelf: 'self-end' },
        { frame: ["/images/Boxcontent/elixir.png", "/images/Boxcontent/phoenix.png", "/images/Boxcontent/django.png", "/images/Boxcontent/docker.png"], alignSelf: 'self-start' }
    ]

    const info = [
        { icon: CodeIcon, title: "Powerful Code", paragraph: "Our team has a high level of spoken and written English, so there is no language barrier." },
        { icon: OptionsIcon, title: "Customized Options", paragraph: "Our team has a high level of spoken and written English, so there is no language barrier." },
        { icon: BugIcon, title: "Bug-Free", paragraph: "Our team has a high level of spoken and written English, so there is no language barrier." },

    ]


    return (
        <>
            <div className="my-16 px-6 sm:px-10">
                <div className="max-w-[1320px] mx-auto ">
                    <div className="bg-lightRed p-6 md:p-10 lg:p-14 rounded-[25px]">
                        {/* first section */}
                        <div className='flex flex-col md:flex-row justify-between gap-12 overflow-hidden pb-12'>
                            <div className='w-full md:w-3/5'>
                                <SectionHeading title="Why Choose Stroke Infotech For Your Innovative Service" color="text-secondary" />
                                <SectionParagraph text="Founded by a team of specialists in cyber security, consultancy and information security, we are a trusted cyber security company with a passion for quality service. Our mission is to provide cyber security services and training that extends beyond technology to encompass people, culture." />
                                <button className='bg-primary text-white font-medium px-4 md:px-7 py-2 md:py-3 text-base md:text-lg leading-7 md:leading-[1.875rem] rounded-[50px] flex justify-center items-center'>
                                    Get a Quote
                                </button>
                            </div>
                            {/* <div className='w-full md:w-2/5 grid grid-cols-3 max-h-[350px] '>
                            {allimages.map((item, index) =>
                                <div key={index} className={`${item.alignSelf} grid gap-4 justify-center `}>
                                    {item.frame.map((list) =>
                                        <Image src={list} height={50} width={50} alt='' className='h-[50px] w-auto my-2' />
                                    )}
                                </div>

                            )}
                        </div> */}

                            <div className='w-full md:w-2/5 flex flex-row gap-4 md:gap-6 justify-center max-h-[550px] md:max-h-[350px] '>

                                <article className="wrapper wrapper--vertical">
                                    <div className="marquee marquee--vertical">
                                        <div className="marquee__group">
                                            <Image src="/images/Boxcontent/nodejs.png" height={50} width={50} alt='' className='h-[50px] w-auto '  />
                                            <Image src="/images/Boxcontent/tensorflow.png" height={50} width={50} alt='' className='h-[50px] w-auto '  />
                                            <Image src="/images/Boxcontent/angular.png" height={50} width={50} alt='' className='h-[50px] w-auto '  />
                                            <Image src="/images/Boxcontent/django.png" height={50} width={50} alt='' className='h-[50px] w-auto '  />

                                        </div>

                                        <div aria-hidden="true" className="marquee__group">
                                        <Image src="/images/Boxcontent/nodejs.png" height={50} width={50} alt='' className='h-[50px] w-auto '  />
                                            <Image src="/images/Boxcontent/tensorflow.png" height={50} width={50} alt='' className='h-[50px] w-auto '  />
                                            <Image src="/images/Boxcontent/angular.png" height={50} width={50} alt='' className='h-[50px] w-auto '  />
                                            <Image src="/images/Boxcontent/django.png" height={50} width={50} alt='' className='h-[50px] w-auto '  />

                                        </div>
                                    </div>

                                    <div className="marquee marquee--vertical marquee--reverse">
                                        <div className="marquee__group">
                                        <Image src="/images/Boxcontent/python.png" height={50} width={50} alt='' className='h-[50px] w-auto '  />
                                            <Image src="/images/Boxcontent/aws.png" height={50} width={50} alt='' className='h-[50px] w-auto '  />
                                            <Image src="/images/Boxcontent/react.png" height={50} width={50} alt='' className='h-[50px] w-auto '  />
                                            <Image src="/images/Boxcontent/swift.png" height={50} width={50} alt='' className='h-[50px] w-auto '  />


                                        </div>

                                        <div aria-hidden="true" className="marquee__group">
                                        <Image src="/images/Boxcontent/python.png" height={50} width={50} alt='' className='h-[50px] w-auto '  />
                                            <Image src="/images/Boxcontent/aws.png" height={50} width={50} alt='' className='h-[50px] w-auto '  />
                                            <Image src="/images/Boxcontent/react.png" height={50} width={50} alt='' className='h-[50px] w-auto '  />
                                            <Image src="/images/Boxcontent/swift.png" height={50} width={50} alt='' className='h-[50px] w-auto '  />


                                        </div>
                                    </div>

                                    <div className="marquee marquee--vertical">
                                    <div className="marquee marquee--vertical">
                                        <div className="marquee__group">
                                            <Image src="/images/Boxcontent/nodejs.png" height={50} width={50} alt='' className='h-[50px] w-auto '  />
                                            <Image src="/images/Boxcontent/tensorflow.png" height={50} width={50} alt='' className='h-[50px] w-auto '  />
                                            <Image src="/images/Boxcontent/angular.png" height={50} width={50} alt='' className='h-[50px] w-auto '  />
                                            <Image src="/images/Boxcontent/django.png" height={50} width={50} alt='' className='h-[50px] w-auto '  />

                                        </div>

                                        <div aria-hidden="true" className="marquee__group">
                                        <Image src="/images/Boxcontent/nodejs.png" height={50} width={50} alt='' className='h-[50px] w-auto '  />
                                            <Image src="/images/Boxcontent/tensorflow.png" height={50} width={50} alt='' className='h-[50px] w-auto '  />
                                            <Image src="/images/Boxcontent/angular.png" height={50} width={50} alt='' className='h-[50px] w-auto '  />
                                            <Image src="/images/Boxcontent/django.png" height={50} width={50} alt='' className='h-[50px] w-auto '  />

                                        </div>
                                    </div>
                                    </div>
                                </article>

                                {/* {allimages.map((item, index) =>
                                    <div key={index} className={`${item.alignSelf} ${item.alignSelf === "self-start" ? "justify-start box-animation" : "justify-end end-box-animation"} flex flex-col  items-center md:gap-4 h-72 lg:h-auto  `}>
                                        {item.frame.map((list) =>
                                            <Image src={list} height={50} width={50} alt='' className='h-[50px] w-auto my-2' />
                                        )}
                                    </div>

                                )} */}

                            </div>


                        </div>
                        
                        <div className='pt-12 pb-8 flex flex-wrap md:flex-nowrap gap-6 md:gap-4 lg:gap-12 xl:gap-20'>
                            {info.map((item, index) =>
                                <div key={index} className="w-full sm:w-5/12 md:w-4/12">
                                    <item.icon />
                                    <h4 className='text-xl lg:text-[1.625rem] leading-10 font-semibold my-2' >{item.title}</h4>
                                    <p className='font-secondaryFont font-normal text-base lg:text-lg leading-[1.875rem]'>{item.paragraph}</p>
                                </div>
                            )}
                        </div>
                    </div>







                </div>
            </div>


        </>
    )
}

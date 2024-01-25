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
        <div className="my-16 px-6 sm:px-10">
            <div className="max-w-[1320px] mx-auto ">
                <div className="bg-lightRed p-14 rounded-[25px]">
                    {/* first section */}
                    <div className='flex justify-between gap-20 overflow-hidden pb-12'>
                        <div className='w-3/5'>
                            <SectionHeading title="Why Choose Stroke Infotech For Your Innovative Service" color="text-secondary" />
                            <SectionParagraph text="Founded by a team of specialists in cyber security, consultancy and information security, we are a trusted cyber security company with a passion for quality service. Our mission is to provide cyber security services and training that extends beyond technology to encompass people, culture." />
                            <button className='bg-primary text-white font-medium px-7 py-3 text-lg leading-[1.875rem] rounded-[50px] flex justify-center items-center'>
                                Get a Quote
                            </button>
                        </div>
                        <div className='w-2/5 grid grid-cols-3   max-h-[350px] '>
                            {allimages.map((item, index) =>
                                <div key={index} className={`${item.alignSelf} grid gap-4 justify-center `}>
                                    {item.frame.map((list) =>
                                        <Image src={list} height={50} width={50} alt='' className='h-[50px] w-auto my-2' />
                                    )}
                                </div>

                            )}
                        </div>
                    </div>

                    {/*  */}
                    <div className='pt-12 pb-8 block md:flex gap-12 xl:gap-20'>
                        {info.map((item, index) =>
                            <div key={index} className="w-4/12">
                                <item.icon />
                                <h4 className='text-[1.5rem] leading-10 font-semibold' >{item.title}</h4>
                                <p className='font-secondaryFont font-normal text-lg leading-[1.875rem]'>{item.paragraph}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import SectionParagraph from '../SectionHeading/SectionParagraph'
import SectionHeading from '../SectionHeading/SectionHeading'

export default function IndustriesWeWorkWith() {
    const work = [
        { icon: '/images/WorkSection/point.svg', text: 'Real Esate' },
        { icon: '/images/WorkSection/QA-Tester.svg', text: 'Healthcare' },
        { icon: '/images/WorkSection/Front-end-Developer.svg', text: 'Education' },
        { icon: '/images/WorkSection/DevOps.svg', text: 'On-Demand' },
        { icon: '/images/WorkSection/Project-manager-1.svg', text: 'Ecommerce' },
        { icon: '/images/WorkSection/Back-end Developer.svg', text: 'Grocery' },
        { icon: '/images/WorkSection/QA-Tester.svg', text: 'Game' },
        { icon: '/images/WorkSection/Front-end-Developer.svg', text: 'Fitness Center' },

       

    ]
    return (
        <div className="bg-lightRed my-16 py-16 px-6 sm:px-10">
            <div className='max-w-[1320px] mx-auto '>
            {/* <div className='max-w-[1089px] mx-auto '> */}

                <div className='text-center'>
                <SectionHeading title="Industries We Work With" color="text-secondary" />
                </div>
                {/* <h2 className="text-[48px] leading-[59px] text-secondary font-bold text-center">Industries We Work With </h2> */}
                <div className='my-6 text-center'>
                    <SectionParagraph text="Latest and Greatest Services" />
                </div>
                {/* <p className="font-montserrat font-regular text-black my-6 text-lg leading-[30px] text-center">Latest and Greatest Services</p> */}
                
                <div className='grid grid-rows-4 md:grid-rows-2 grid-flow-col gap-14 my-16 pt-16'>
                    {work.map((i) =>
                    <div className='flex flex-col justify-center items-center hover:bg-white py-4 '>
                        <img src={i.icon} />
                        <p className='font-secondaryFont font-medium text-lg text-black mt-6'>{i.text}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import SectionHeading from '../SectionHeading/SectionHeading'

export default function Technologystack() {
    const Tabs = ['Front-end', 'Back-end', 'CMS', 'Mobile']

    const techType = [
        { icon: '/images/TabSection/Html logo.png', techName: 'HTML' },
        { icon: '/images/TabSection/Css logo.png', techName: 'CSS' },
        { icon: '/images/TabSection/JS logo.png', techName: 'Javascript' },
        { icon: '/images/TabSection/Typescript logo.png', techName: 'Typescript' },
        { icon: '/images/TabSection/React Logo.png', techName: 'React' },
        { icon: '/images/TabSection/Redux Logo.png', techName: 'Redux' },
        { icon: '/images/TabSection/MobX Logo.png', techName: 'MobX' },


    ]
    return (
        <div className=" bg-white my-16 px-6 sm:px-10">
            <div className='max-w-[1320px] mx-auto '>
                {/* <h2 className="text-[48px] leading-[59px] font-bold">Technology Stack</h2> */}
                <SectionHeading title="Technology Stack" color="text-black" />
                <div className='flex flex-row flex-wrap gap-4 my-10'>
                    {Tabs.map((i) =>
                        <a href='#' className='bg-lightRed text-black px-6 py-4 font-medium text-lg leading-[21.83px] rounded-full hover:bg-primary hover:text-white '>
                            {i}
                        </a>
                    )}
                </div>
                <div className='flex flex-row flex-wrap py-10 gap-6'>
                    {techType.map((tech) =>
                        <div className='bg-lightRed max-w-[140px] sm:max-w-[166px] w-full h-auto flex flex-col justify-center items-center py-6 sm:py-8 rounded-[40px]'>
                            <img src={tech.icon} className='w-auto pt-2' /> 
                            <p className='font-normal text-base leading-[18px] pt-6'>{tech.techName}</p>
                        </div>
                    )}
                </div>

            </div>
        </div>
    )
}

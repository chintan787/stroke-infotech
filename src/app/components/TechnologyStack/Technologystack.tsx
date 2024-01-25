'use client'
import React, { useState } from 'react'
import SectionHeading from '../SectionHeading/SectionHeading'
import Image from 'next/image'

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

    const [tabsContent, setTabContent] = useState([
        {
            tabName: 'Front-end', isActive: true, childern: [{ icon: '/images/TabSection/Html logo.png', techName: 'HTML' },
            { icon: '/images/TabSection/Css logo.png', techName: 'CSS' },
            { icon: '/images/TabSection/JS logo.png', techName: 'Javascript' },
            { icon: '/images/TabSection/Typescript logo.png', techName: 'Typescript' },
            { icon: '/images/TabSection/React Logo.png', techName: 'React' },
            { icon: '/images/TabSection/Redux Logo.png', techName: 'Redux' },
            { icon: '/images/TabSection/MobX Logo.png', techName: 'MobX' },]
        },

        {
            tabName: 'Back-end', isActive: false, childern: [{ icon: '/images/TabSection/JS logo.png', techName: 'Javascript' },
            { icon: '/images/TabSection/Typescript logo.png', techName: 'Typescript' },
            { icon: '/images/TabSection/React Logo.png', techName: 'React' },]
        },
        {
            tabName: 'CMS', isActive: false, childern: [{ icon: '/images/TabSection/JS logo.png', techName: 'Javascript' },
            { icon: '/images/TabSection/React Logo.png', techName: 'React' },]
        },
        {
            tabName: 'Mobile', isActive: false, childern: [
                { icon: '/images/TabSection/Redux Logo.png', techName: 'Redux' },
                { icon: '/images/TabSection/MobX Logo.png', techName: 'MobX' },]
        }
    ])

    const handleActiveLink = (title: any) => {
        const mappingData = tabsContent.map((item) => {

            if (item.tabName === title) {
                item.isActive = true;
                return item
            }
            else {
                item.isActive = false;
                return item
            }
        })
        setTabContent(mappingData)
      
    }

    return (
        <div className=" bg-white my-16 px-6 sm:px-10">
            <div className='max-w-[1320px] mx-auto '>
                <SectionHeading title="Technology Stack" color="text-black" />
                <div >
                    <ul className='flex flex-row flex-wrap gap-4 my-10'>
                        {tabsContent.map((i) =>
                            <li className={` px-6 py-4 font-medium text-base sm:text-lg leading-[21.83px] rounded-full cursor-pointer ${i.isActive ? 'bg-primary text-white' : 'bg-lightRed text-black'} `}
                                onClick={() => { handleActiveLink(i.tabName) }}
                            >
                                {i.tabName}
                            </li>
                        )}
                    </ul>
                <div className='py-6 '>
                    {tabsContent.map((tech) =>
                          <div className={`flex flex-row flex-wrap gap-4 md:gap-6 ${tech.isActive ? 'opacity-100 max-h-[800px] lg:max-h-[500px] ':'opacity-0 max-h-0'} overflow-hidden transition-all duration-500 ease-in-out`}>
                        {  tech.childern.map((item) =>
                            <div className={`bg-lightRed max-w-[120px] sm:max-w-[166px] w-full h-auto flex flex-col justify-center items-center py-4 sm:py-8 rounded-[24px] sm:rounded-[40px] `}>
                                <Image src={item.icon} height={70} width={70} alt={item.techName} className='h-20 w-auto pt-2' />
                                {/* <img src={item.icon} className='w-auto pt-2' /> */}
                                <p className='font-normal text-base leading-[18px] pt-2 sm:pt-6 text-black'>{item.techName}</p>
                            </div>
                        )}
                            </div>
                    )}
                </div>
                </div>
            </div>
        </div>
    )
}

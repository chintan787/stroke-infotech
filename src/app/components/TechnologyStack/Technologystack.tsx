'use client'
import React, { useState } from 'react'
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
        // for (var i = 0; i <= tabsContent.length; i++) {
        //     if(tempData[i].isActive === true)
        //     {
        //         tempData[i].isActive = false;
        //     }
        //     console.log("i", tempData[i])
        // }
        // const temp = tabsContent.filter((i) => i.tabName === title)
        // console.log("temp", temp)
        // const newItem = { ...temp[0], isActive: !temp[0].isActive }
        // console.log("i", newItem)
    }

    return (
        <div className=" bg-white my-16 px-6 sm:px-10">
            <div className='max-w-[1320px] mx-auto '>
                {/* <h2 className="text-[48px] leading-[59px] font-bold">Technology Stack</h2> */}
                <SectionHeading title="Technology Stack" color="text-black" />

                {/* <div className='flex flex-row flex-wrap gap-4 my-10'>
                    {tabsContent.map((item) =>
                        <>
                            <a href='#' className='bg-lightRed text-black px-6 py-4 font-medium text-lg leading-[21.83px] rounded-full hover:bg-primary hover:text-white '>
                                {item.tabName}
                            </a>
                            <div className='flex flex-row flex-wrap py-10 gap-6'>
                                {item.childern.map((tech) =>
                                    <div className='bg-lightRed max-w-[140px] sm:max-w-[166px] w-full h-auto flex flex-col justify-center items-center py-6 sm:py-8 rounded-[40px]'>
                                        <img src={tech.icon} className='w-auto pt-2' />
                                        <p className='font-normal text-base leading-[18px] pt-6 text-black'>{tech.techName}</p>
                                    </div>
                                )}
                            </div>
                        </>
                    )}
                </div> */}


                <div >
                    <ul className='flex flex-row flex-wrap gap-4 my-10'>
                        {tabsContent.map((i) =>
                            <li className={` px-6 py-4 font-medium text-lg leading-[21.83px] rounded-full cursor-pointer ${i.isActive ? 'bg-primary text-white' : 'bg-lightRed text-black'} `}
                                onClick={() => { handleActiveLink(i.tabName) }}
                            >
                                {i.tabName}
                            </li>
                        )}
                    </ul>
                
                <div className='py-6 max-h-[500px]'>
                    {tabsContent.map((tech) =>
                          <div className={`flex flex-row flex-wrap  gap-6 ${tech.isActive ? 'tab opacity-100':'tab closed opacity-0'}`}>
                        {/* // tech.isActive === true ? */}
                        {/* // ${tech.isActive ? 'block':'hidden'} */}
                        {  tech.childern.map((item) =>
                            <div className={`bg-lightRed max-w-[140px] sm:max-w-[166px] w-full h-auto flex flex-col justify-center items-center py-6 sm:py-8 rounded-[40px] `}>
                                <img src={item.icon} className='w-auto pt-2' />
                                <p className='font-normal text-base leading-[18px] pt-6 text-black'>{item.techName}</p>
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

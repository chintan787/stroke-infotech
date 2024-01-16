import React from 'react';
import WebIcon from '../icons/WebIcon';
import DevelopmentIcon from '../../../../icons/DevelopmentIcon';
import SectionHeading from '../SectionHeading/SectionHeading';
import SectionParagraph from '../SectionHeading/SectionParagraph';
import Image from 'next/image'
export default function ServiceSection() {

    const service = [
        {src:'/images/Web-color-1.svg',  icon: <DevelopmentIcon  />, text: 'Web Development' },
        {src:'/images/Website_UI_UX.svg', icon: <DevelopmentIcon />, text: 'UI/UX Design' },
        {src:'/images/Ecommerce-Development.svg', icon: <DevelopmentIcon  />, text: 'CMS & Ecommerce' },
        {src:'/images/Mobile-App-Development.svg', icon: <DevelopmentIcon  />, text: 'Mobile App Development' },
        {src:'/images/API-Integration-Services.svg', icon: <DevelopmentIcon  />, text: 'Website Maintenance' },
        {src:'/images/Digital-Marketing.svg', icon: <DevelopmentIcon  />, text: 'Hire Dedicated Developers' },


    ]

    return (
        <div className="flex bg-lightRed my-16 pl-0 lg:pl-10">
            <div className="max-w-[1620px] w-full ml-auto  flex flex-col lg:flex-row justify-between items-center ">
{/* pl-6 lg:pl-10 2xl:pl-0 */}
                <div className="w-full lg:w-3/5 text-center lg:text-left py-6 lg:py-0">
                    <SectionHeading title="Services we provide" color="text-secondary" />
                    <div className='my-6'>
                        <SectionParagraph text="Stroke Infotech Provides top notch Web and Mobile App Solution." />
                    </div>

                    <div className="my-4 flex flex-row w-full gap-8 flex-wrap grid-cols-2 lg:grid-cols-3 justify-center lg:justify-start">
                        {service.map((i) =>
                            <a href="#" className='service-content font-montserrat text-black font-semibold bg-white text-xl flex flex-col justify-center items-center shadow rounded-[30px] py-8 2xl:py-12 w-5/12 sm:w-1/4 hover:bg-primary hover:text-white'>
                                {/* <img src={i.src} className=' lg:h-[40px] xl:h-[60px] w-auto' /> */}
                               <Image src={i.src} width={60} height={60} alt="" className="h-[40px] lg:h-[40px] xl:h-[60px] w-aut0" />
                                <p className="mt-2 2xl:mt-4 text-lg md:text-xl max-w-48 text-center">{i.text}</p>
                            </a>
                        )}
                    </div>
                </div>
                <div className='w-full lg:w-2/5 flex justify-end pl-6 lg:pl-0'>

                    <img src="/images/Service-bg.png" className="lg:h-[600px] xl:h-[900px] w-auto rounded-l-[50px] border-l-[16px] border-primary" />
                </div>
            </div>
        </div>
    )
}

import React from 'react';

import DevelopmentIcon from '../../../../icons/DevelopmentIcon';
import SectionHeading from '../SectionHeading/SectionHeading';
import SectionParagraph from '../SectionHeading/SectionParagraph';
import Image from 'next/image';
import WebColorIcon from '../../../../icons/WebColorIcon';
import WebsiteUIUXIcon from '../../../../icons/WebsiteUIUXIcon';
import EcommerceDevelopmentIcon from '../../../../icons/EcommerceDevelopmentIcon';
import MobileAppDevelopmentIcon from '../../../../icons/MobileAppDevelopmentIcon';
import APIIntegrationServicesIcon from '../../../../icons/APIIntegrationServicesIcon';
import DigitalMarketingIcon from '../../../../icons/DigitalMarketingIcon';

export default function ServiceSection() {

    const service = [
        {src:'/images/Web-color-1.svg',  icon: WebColorIcon , text: `Web Development` },
        {src:'/images/Website_UI_UX.svg', icon: WebsiteUIUXIcon , text: 'UI/UX Design' },
        {src:'/images/Ecommerce-Development.svg', icon: EcommerceDevelopmentIcon  , text: 'CMS & Ecommerce' },
        {src:'/images/Mobile-App-Development.svg', icon: MobileAppDevelopmentIcon , text: 'Mobile App Development' },
        {src:'/images/API-Integration-Services.svg', icon: APIIntegrationServicesIcon, text: 'Website Maintenance' },
        {src:'/images/Digital-Marketing.svg', icon: DigitalMarketingIcon, text: 'Hire Dedicated Developers' },

        // { icon: WebColorIcon, text: 'Web Development' },
        // { icon: WebsiteUIUXIcon, text: 'UI/UX Design' },
        // { icon: EcommerceDevelopmentIcon, text: 'CMS & Ecommerce' },
        // { icon: MobileAppDevelopmentIcon, text: 'Mobile App Development' },
        // { icon: APIIntegrationServicesIcon, text: 'Website Maintenance' },
        // { icon: DigitalMarketingIcon, text: 'Hire Dedicated Developers' },

    ]

    return (
        <div className="flex bg-lightRed my-16 pl-0 lg:pl-10">
            <div className="max-w-[1620px] w-full ml-auto flex flex-col md:flex-row justify-between items-center ">
                <div className="w-full lg:w-3/5 text-center lg:text-left py-6 lg:py-0 px-6 lg:px-4">
                    <SectionHeading title="Services we provide" color="text-secondary" />
                    <div className="my-6">
                        <SectionParagraph text="Stroke Infotech Provides top notch Web and Mobile App Solution." />
                    </div>

                    <div className="my-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-8 ">
                        {service.map((i) =>
                            <a href="#" className="service-content font-secondaryFont text-black font-semibold bg-white text-xl flex flex-col justify-center items-center shadow rounded-[30px] 
                           hover:bg-primary hover:text-white flex-wrap py-8 lg:py-10 2xl:py-12  max-w-[160px] md:max-w-[250px] 2xl:max-w-[280px] w-full mx-auto"> 
                                 <Image src={i.src} width={60} height={60} alt="" className="h-[40px] lg:h-[40px] xl:h-[60px] w-aut0 " />
                                <p className="mt-2 2xl:mt-4 text-base md:text-xl max-w-48 text-center font-secondaryFont px-2 sm:px-4 sm:max-w-[160px]">{i.text}</p>
                            </a>
                        )}
                    </div>
                </div>
                <div className="w-full lg:w-2/5 flex justify-end pl-6 lg:pl-0">
                    <Image src="/images/Service-bg.png" height={900} width={550} alt='' className="h-auto lg:h-[600px] xl:h-[900px] w-full md:w-auto rounded-l-[50px] border-l-[16px] border-primary object-cover" />
                </div>
            </div>
        </div>
    )
}

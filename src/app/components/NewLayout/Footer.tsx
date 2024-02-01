import React from 'react'
import Image from 'next/image';
import FacebookIcon from '../../../../icons/FacebookIcon';
import TwitterIcon from '../../../../icons/TwitterIcon';
import LinkedInIcon from '../../../../icons/LinkedInIcon';
import SkypeIcon from '../../../../icons/SkypeIcon';
import Link from 'next/link';

export default function Footer() {
    const socialIcons = [
        { icon: FacebookIcon, name: 'Facebook' },
        { icon: TwitterIcon, name: 'Twitter' },
        { icon: LinkedInIcon, name: 'LinkedIn' },
        { icon: SkypeIcon, name: 'Skype' },
]

    const ourservice = [
        "CMS & Ecommerce",
        "Web Development",
        "UI/UX Design",
        "Mobile App Development",
        "Website Maintenance",
        "Hire Dedicated Developers",
    ]
    const company = [
        " Services",
        "Blog",
        "Work",
        "About",
        "Privacy Policy",
        "Sitemap",
    ]
    const contact = [
        { icon: '/images/Footer/map.svg', text: '407, Arth Business Center(ABC), Opp. Torrent Power Sub Station, Ring Road, Nikol, Ahmedabad, Gujarat - 382350' },
        { icon: '/images/Footer/phone.svg', text: '(+91) 8460569854 (+91) 9974593600' },
        { icon: '/images/Footer/mail.svg', text: ' info@strokeinfotech.com' },
    ]


    return (
        <>
            <div className="bg-white mt-8">
                <div className="border-y  border-y-primary">
                    <div className="max-w-[1320px] mx-auto">

                        <div className="w-full justify-evenly items-center flex">
                            {socialIcons.map((item, index) =>
                                <Link href='#' className={`socialIcons font-nunitoFont flex items-center w-1/2 md:w-1/4 justify-center ${socialIcons.length - 1 === index ? 'border-r-0' : 'border-r'} border-r-primary py-4 bg-white hover:bg-primary text-primary hover:text-white`}>
                                    <div className="border border-primary rounded-[10px] w-10 h-10 flex items-center justify-center">
                                        <item.icon />
                                    </div>
                                    <p className="tracking-[0.225rem] pl-4 uppercase font-medium text-lg leading-6 hidden md:block">{item.name}</p>
                                </Link>
                            )}
                        </div>

                    </div>
                </div>
            </div>




            <footer className="px-6 sm:px-10 bg-blue text-white">
                <div className="max-w-[1320px] mx-auto flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0"
                >

                    <div className="md:max-w-md lg:col-span-2">
                        <Link rel="noopener noreferrer" href="#" className="flex space-x-3 justify-start">
                            <Image src="/images/stroke-footer-logo.svg" height={50} width={169} alt='logo' />
                        </Link>
                        <div className="mt-3 pt-1">
                            <div className="w-[80%] text-left">
                                <p className="font-secondaryFont font-medium text-[13px] leading-[29px]">We help businesses improve their support by performance by providing managed services such as backup user management, security, networking, and support.</p>
                            </div>
                            <div className="flex gap-6 py-4">
                                <Image src="/images/Footer/Clutch.png" height={40} width={82} alt='Clutch' className="h-10 w-auto" />
                                <Image src="/images/Footer/goodfirms.png" height={20} width={135} alt='goodfirms' className="h-[20px] w-auto" />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 text-sm gap-x-3 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">

                        <div className="space-y-3">
                            <h3 className="text-primary font-bold text-[22px] leading-[25px]">Our Service Offer</h3>
                            <ul className="space-y-0.5 pt-1">
                                {ourservice.map((list) =>
                                    <li>
                                        <Link rel="noopener noreferrer" href="#" className="font-secondaryFont font-medium text-white text-[13px] leading-[29px] inline-block
                                        after:content-[''] after:block after:w-0 hover:after:w-full after:h-[1px] after:bg-primary transition-all after:transition-all ease-in after:duration-500  
                                        ">{list}</Link>
                                    </li>
                                )}
                            </ul>
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-primary font-bold text-[22px] leading-[25px]">Company</h3>
                            <ul className="space-y-0.5 pt-1">
                                {company.map((list) =>
                                    <li>
                                        <Link rel="noopener noreferrer" href="#" className="font-secondaryFont font-medium text-white text-[13px] leading-[29px] inline-block
                                        after:content-[''] after:block after:w-0 hover:after:w-full after:h-[1px] after:bg-primary transition-all after:transition-all ease-in after:duration-500
                                        ">{list}</Link>
                                    </li>
                                )}
                            </ul>
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-primary font-bold text-[22px] leading-[25px]">Contact</h3>

                            <ul className="space-y-0.5 pt-1">

                                <li className="flex gap-2 pb-3">
                                    <Image src="/images/Footer/map.svg" height={20} width={20} alt='map' className="h-5 w-5 mt-0.5" />
                                    <Link rel="noopener noreferrer" href="#" className="font-secondaryFont font-medium text-white text-[13px] leading-[22px] ">
                                        407, Arth Business Center(ABC), Opp. Torrent Power Sub Station, Ring Road, Nikol, Ahmedabad, Gujarat - 382350
                                    </Link>
                                </li>
                                <li className="flex gap-2 pb-3">
                                    <Image src="/images/Footer/phone.svg" height={20} width={20} alt='map' className="h-5 w-5 mt-0.5" />
                                    <div>
                                        <Link rel="noopener noreferrer" href="tel:+918460569854" className="font-secondaryFont font-medium text-white text-[13px] leading-[22px]">
                                            (+91) 8460569854
                                        </Link>
                                        <br />
                                        <Link rel="noopener noreferrer" href="tel:+919974593600" className="font-secondaryFont font-medium text-white text-[13px] leading-[22px]">(+91) 9974593600</Link>
                                    </div>
                                </li>
                                <li className="flex gap-2 pb-3">
                                    <Image src="/images/Footer/mail.svg" height={20} width={20} alt='map' className="h-5 w-5 mt-0.5" />
                                    <Link rel="noopener noreferrer" href="mailto:info@strokeinfotech.com" className="font-secondaryFont font-medium text-white text-[13px] leading-[22px]">
                                        info@strokeinfotech.com
                                    </Link>
                                </li>
                            </ul>
                        </div>

                    </div>

                </div>
                <div className="max-w-[1320px] mx-auto">
                    <div className="py-6 text-sm text-center text-white border-t border-t-[#B9B9B926] text-medium text-xs">© Copyright 2024 <Link href='#' className="text-primary">Stroke Infotech</Link> - All rights reserved.</div>
                </div>
            </footer>
        </>
    )
}

import React from 'react'
import Image from 'next/image';


export default function Footer() {
    const socialIcons = [
        { icon: '/images/Footer/Facebook.svg', name: 'Facebook' },
        { icon: '/images/Footer/Twitter.svg', name: 'Twitter' },
        { icon: '/images/Footer/Linkedin.svg', name: 'LinkedIn' },
        { icon: '/images/Footer/Skype.svg', name: 'Skype' },


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
                    <div className='max-w-[1320px] mx-auto '>

                        <div className=' w-full justify-evenly items-center hidden md:flex'>
                            {socialIcons.map((item) =>
                                <a href='#' className='flex items-center w-1/2 md:w-1/4 justify-center border-r border-r-primary py-4 bg-white hover:bg-primary text-primary hover:text-white'>
                                    <div className='border border-primary rounded-[10px] w-10 h-10 flex items-center justify-center'>
                                        <Image src={item.icon} height={16} width={16} alt={item.name} />
                                    </div>
                                    <p className='pl-4  uppercase font-medium text-lg leading-6'>{item.name}</p>
                                </a>
                            )}
                        </div>

                    </div>
                </div>
            </div>




            <footer className="px-6 sm:px-10 bg-blue text-white ">
                <div className="max-w-[1320px] mx-auto flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0  "
                //  flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0  

                >

                    <div className="md:max-w-md lg:col-span-2 ">
                        <a rel="noopener noreferrer" href="#" className="flex space-x-3 justify-start">
                            <Image src="/images/Footer/footer-logo.png" height={34} width={169} alt='logo' />
                        </a>
                        <div className="mt-3 ">
                            <div className='w-[80%] text-left'>
                                <p className='font-secondaryFont font-medium text-[13px] leading-[29px]'>We help businesses improve their support by performance by providing managed services such as backup user management, security, networking, and support.</p>
                            </div>
                            <div className='flex gap-6 py-4'>
                                <Image src="/images/Footer/Clutch.png" height={40} width={82} alt='Clutch' className='h-10 w-auto' />
                                <Image src="/images/Footer/goodfirms.png" height={20} width={135} alt='goodfirms' className='h-[20px] w-auto' />
                            </div>
                        </div>
                    </div>
                    {/* lg:w-2/3 */}
                    <div className="grid grid-cols-1 text-sm gap-x-3 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 ">
                        {/* <div className="space-y-3"> */}
                        {/* <div className="lg:w-1/3"> */}
                        {/* <a rel="noopener noreferrer" href="#" className="flex justify-start space-x-3 lg:justify-start">
                                    <Image src="/images/Footer/footer-logo.png" height={34} width={169} alt='logo' />
                                </a>
                                <div className="mt-3 ">
                                    <div className='w-[80%] '>
                                        <p className='font-secondaryFont font-medium text-[13px] leading-[29px]'>We help businesses improve their support by performance by providing managed services such as backup user management, security, networking, and support.</p>
                                    </div>
                                    <div className='flex gap-6 py-4'>
                                        <Image src="/images/Footer/Clutch.png" height={40} width={82} alt='Clutch' className='h-10 w-auto' />
                                        <Image src="/images/Footer/goodfirms.png" height={20} width={135} alt='goodfirms' className='h-[20px] w-auto' />
                                    </div>
                                </div> */}
                        {/* </div> */}
                        {/* </div> */}

                        <div className="space-y-3">
                            <h3 className="text-primary font-bold text-[22px] leading-[25px]">Our Service Offer</h3>
                            <ul className="space-y-0.5 mt-3">
                                {ourservice.map((list) =>
                                    <li>
                                        <a rel="noopener noreferrer" href="#" className="font-secondaryFont font-medium text-white text-[13px] leading-[29px]">{list}</a>
                                    </li>
                                )}
                            </ul>

                        </div>
                        <div className="space-y-3">
                            <h3 className="text-primary font-bold text-[22px] leading-[25px]">Company</h3>
                            <ul className="space-y-0.5 mt-3">
                                {company.map((list) =>
                                    <li>
                                        <a rel="noopener noreferrer" href="#" className="font-secondaryFont font-medium text-white text-[13px] leading-[29px]">{list}</a>
                                    </li>
                                )}
                            </ul>
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-primary font-bold text-[22px] leading-[25px]">Contact</h3>

                            <ul className="space-y-0.5 mt-3">

                                <li className='flex gap-2 pb-3'>
                                    <Image src="/images/Footer/map.svg" height={20} width={20} alt='map' className='h-5 w-5' />
                                    <a rel="noopener noreferrer" href="#" className='font-secondaryFont font-medium text-white text-[13px] leading-[22px]'>
                                        407, Arth Business Center(ABC), Opp. Torrent Power Sub Station, Ring Road, Nikol, Ahmedabad, Gujarat - 382350
                                    </a>
                                </li>
                                <li className='flex gap-2 pb-3'>
                                    <Image src="/images/Footer/phone.svg" height={20} width={20} alt='map' className='h-5 w-5' />
                                    <div>
                                        <a rel="noopener noreferrer" href="tel:+918460569854" className='font-secondaryFont font-medium text-white text-[13px] leading-[22px]'>
                                            (+91) 8460569854
                                        </a>
                                        <br />
                                        <a rel="noopener noreferrer" href="tel:+919974593600" className='font-secondaryFont font-medium text-white text-[13px] leading-[22px]'>(+91) 9974593600</a>
                                    </div>
                                </li>
                                <li className='flex gap-2 pb-3'>
                                    <Image src="/images/Footer/mail.svg" height={20} width={20} alt='map' className='h-5 w-5' />
                                    <a rel="noopener noreferrer" href="mailto:info@strokeinfotech.com" className='font-secondaryFont font-medium text-white text-[13px] leading-[22px]'>
                                        info@strokeinfotech.com
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>
                    {/* <div >@1665 mnvdfv kdf</div> */}
                </div>
                <div className='max-w-[1320px] mx-auto'>
                    <div className="py-6 text-sm text-center text-white border-t border-t-[#B9B9B926] text-medium  text-xs">© Copyright 2024 <a href='#' className='text-primary'>Stroke Infotech</a> - All rights reserved.</div>

                </div>
            </footer>



            {/* <div className="px-4 pt-16 mx-auto max-w-[1320px] ">
                <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
                    <div className="md:max-w-md lg:col-span-2">
                        <a href="/" aria-label="Go home" title="Company" className="inline-flex items-center">
                            <svg className="w-8 text-deep-purple-accent-400" viewBox="0 0 24 24" stroke-linejoin="round" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" stroke="currentColor" fill="none">
                                <rect x="3" y="1" width="7" height="12"></rect>
                                <rect x="3" y="17" width="7" height="6"></rect>
                                <rect x="14" y="1" width="7" height="6"></rect>
                                <rect x="14" y="11" width="7" height="12"></rect>
                            </svg>
                            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">Company</span>
                        </a>
                        <div className="mt-4 lg:max-w-sm">
                            <p className="text-sm text-gray-800">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
                            </p>
                            <p className="mt-4 text-sm text-gray-800">
                                Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
                        <div>
                            <p className="font-semibold tracking-wide text-gray-800">Category</p>
                            <ul className="mt-2 space-y-2">
                                <li>
                                    <a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">News</a>
                                </li>
                                <li>
                                    <a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">World</a>
                                </li>
                                <li>
                                    <a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Games</a>
                                </li>
                                <li>
                                    <a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">References</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p className="font-semibold tracking-wide text-gray-800">Business</p>
                            <ul className="mt-2 space-y-2">
                                <li>
                                    <a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Web</a>
                                </li>
                                <li>
                                    <a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">eCommerce</a>
                                </li>
                                <li>
                                    <a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Business</a>
                                </li>
                                <li>
                                    <a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Entertainment</a>
                                </li>
                                <li>
                                    <a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Portfolio</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p className="font-semibold tracking-wide text-gray-800">Apples</p>
                            <ul className="mt-2 space-y-2">
                                <li>
                                    <a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Media</a>
                                </li>
                                <li>
                                    <a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Brochure</a>
                                </li>
                                <li>
                                    <a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Nonprofit</a>
                                </li>
                                <li>
                                    <a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Educational</a>
                                </li>
                                <li>
                                    <a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Projects</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p className="font-semibold tracking-wide text-gray-800">Cherry</p>
                            <ul className="mt-2 space-y-2">
                                <li>
                                    <a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Infopreneur</a>
                                </li>
                                <li>
                                    <a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Personal</a>
                                </li>
                                <li>
                                    <a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Wiki</a>
                                </li>
                                <li>
                                    <a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Forum</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-between pt-5 pb-10 border-t sm:flex-row">
                    <p className="text-sm text-gray-600">
                        © Copyright 2020 Lorem Inc. All rights reserved.
                    </p>
                    <div className="flex items-center mt-4 space-x-4 sm:mt-0">
                        <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                <path
                                    d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z"
                                ></path>
                            </svg>
                        </a>
                        <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400">
                            <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                                <circle cx="15" cy="15" r="4"></circle>
                                <path
                                    d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z"
                                ></path>
                            </svg>
                        </a>
                        <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                <path
                                    d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z"
                                ></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div> */}
        </>
    )
}

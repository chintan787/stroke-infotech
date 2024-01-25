"use client"
import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
// import {
//     ArrowPathIcon,
//     Bars3Icon,
//     ChartPieIcon,
//     CursorArrowRaysIcon,
//     FingerPrintIcon,
//     SquaresPlusIcon,
//     XMarkIcon,
// } from '@heroicons/react/24/outline'
// import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import MenuIcon from '../../../../icons/MenuIcon'
import ChevronDownIcon from '../../../../icons/ChevronDownIcon'
import XMarkIcon from '../../../../icons/XMarkIcon'
import ChevronRightIcon from '../../../../icons/ChevronRightIcon'
import ArrowUpperIcon from '../../../../icons/ArrowUpperIcon'
import Link from 'next/link'

const products = [
    { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', },
    { name: 'Engagement', description: 'Speak directly to your customers', href: '#', },
    { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', },
    { name: 'Integrations', description: 'Connect with third-party tools', href: '#', },
    { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', },
]
const callsToAction = [
    { name: 'Watch demo', href: '#' },
    { name: 'Contact sales', href: '#' },
]
// const products = [
//     { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
//     { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
//     { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
//     { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
//     { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
// ]
// const callsToAction = [
//     { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
//     { name: 'Contact sales', href: '#', icon: PhoneIcon },
// ]

const megamenuTitles = [
    { title: "UI/UX Designer" },
    {
        title: "CMS & Ecommerce", children: [
            { icon: '/images/WorkSection/Front-end-Developer.svg', subtitle: 'CMS & Ecommerce', desc: 'Lorem ipsum dolor sit' },
            { icon: '/images/WorkSection/Front-end-Developer.svg', subtitle: 'CMS & Ecommerce', desc: 'Lorem ipsum dolor sit' },
            { icon: '/images/WorkSection/Front-end-Developer.svg', subtitle: 'CMS & Ecommerce', desc: 'Lorem ipsum dolor sit' },
            { icon: '/images/WorkSection/Front-end-Developer.svg', subtitle: 'CMS & Ecommerce', desc: 'Lorem ipsum dolor sit' },
            { icon: '/images/WorkSection/Front-end-Developer.svg', subtitle: 'CMS & Ecommerce', desc: 'Lorem ipsum dolor sit' },
            { icon: '/images/WorkSection/Front-end-Developer.svg', subtitle: 'CMS & Ecommerce', desc: 'Lorem ipsum dolor sit' },
        ]
    },
    { title: "Web Development" },
    { title: "Mobile App Development" },
    { title: "Website Maintenance" },
    { title: "Hire Dedicated Developers" },

    // "UI/UX Designer", "CMS & Ecommerce", "Web Development", "Mobile App Development", "Website Maintenance", "Hire Dedicated Developers"
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="bg-white border-b border-gray">
            <nav className="mx-auto flex max-w-[1320px] items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex ">
                    {/* lg:flex-1 */}
                    <Link href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <Image
                            src="/images/Clip-path-group.svg"
                            // src="/images/stroke-final-logo.png"
                            alt="Logo"
                            className="lg:h-8 2xl:h-10 w-auto"
                            width={100}
                            height={38}
                            priority
                        />
                        {/* <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            /> */}
                       
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>

                        <MenuIcon />

                        {/* <Bars3Icon className="h-6 w-6" aria-hidden="true" /> */}
                    </button>
                </div>
                <Popover.Group className="hidden lg:flex lg:gap-x-9 2xl:gap-x-12 items-center">
                    <Link href="#" className="font-gilroy text-[0.938rem] font-medium leading-[1.125rem] text-secondary">
                        Home
                    </Link>
                    <Link href="#" className="font-gilroy text-[0.938rem] font-medium leading-[1.125rem]  text-secondary">
                        Our Work
                    </Link>

                    <Popover className="relative">
                        <Popover.Button className="font-gilroy flex items-center gap-x-1 text-[0.938rem] font-medium leading-[1.125rem] text-secondary">
                            Our Service
                            {/* <ChevronDownIcon className="h-5 w-5 flex-none text-primary" aria-hidden="true" /> */}
                            <ChevronDownIcon className="text-primary h-4 w-4" />
                        </Popover.Button>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >

                            <Popover.Panel className="megamenu absolute top-11 z-10 mt-3 w-screen max-w-[996px] overflow-hidden rounded-[30px] bg-white shadow-lg"
                                style={{ transform: 'scaleY(1) translate(-40%)' }}>
                                {/* <div className='absolute -top-2 left-2/4 overflow-visiable'>
                                    <ArrowUpperIcon />
                                </div> */}
                                <div className="flex ">
                                    <div className="w-2/6 ">
                                        {megamenuTitles.map((item) =>
                                            <div className='bg-lightRed py-5 pl-6 text-secondary border-r-2 border-r-primary flex justify-between hover:border-r-white hover:bg-white hover:text-primary hover:cursor-pointer border-l-4 border-l-lightRed hover:border-l-primary	'>
                                                <h4 className=' text-lg leading-[22px] font-medium'>{item.title}</h4>
                                                {item.children && (
                                                    <ChevronRightIcon />
                                                )}
                                            </div>
                                        )}

                                    </div>
                                    <div className="w-4/6 p-8 grow self-center ">
                                        <div className='grid grid-cols-2 gap-14'>
                                            {megamenuTitles.map((item) =>
                                                item?.children?.map((list) =>
                                                    <div className='flex gap-4 items-center'>
                                                        <div className='w-[60px] h-[60px] border border-primary rounded-[10px] flex justify-center items-center'>
                                                            <Image src={list.icon} height={30} width={30} alt={''} />
                                                        </div>
                                                        <div>
                                                            <h4 className='text-sm text-secondary font-secondaryFont font-semibold'>{list.subtitle}</h4>
                                                            <p className='text-xs text-[#818F9E] font-secondaryFont font-medium leading-[1.125rem]'>{list.desc}</p>
                                                        </div>
                                                    </div>
                                                )
                                            )}
                                        </div>

                                    </div>
                                </div>
                                {/* <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                                    {callsToAction.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div> */}
                            </Popover.Panel>
                        </Transition>
                    </Popover>

                    <Link href="#" className="font-gilroy text-[0.938rem] font-medium leading-[1.125rem] text-secondary">
                        Blog
                    </Link>
                    <Link href="/about" className="font-gilroy text-[0.938rem] font-medium leading-[1.125rem] text-secondary">
                    About
                    </Link>
                    {/* <a href="/about" className="font-gilroy text-[0.938rem] font-medium leading-[1.125rem] text-secondary">
                        About
                    </a> */}

                </Popover.Group>
                <div className="hidden lg:flex  lg:justify-end gap-4">
                    {/* <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
          Log in <span aria-hidden="true">&rarr;</span>
        </a> */}
                    <a
                        href="mailto:info@strokeinfotech.com"
                        className='w-[36px] h-[36px] border border-primary rounded-full flex justify-center items-center'
                    >
                        <img className='h-4 w-auto' src="/images/E-mail.svg" />
                    </a>
                    <a
                        href="mailto:info@strokeinfotech.com"
                        className='w-[36px] h-[36px] border border-primary rounded-full flex justify-center items-center'
                    >
                        <img className='h-4 w-auto' src="/images/skype.svg" />
                    </a>
                    <a
                        href="mailto:info@strokeinfotech.com"
                        className='w-[36px] h-[36px] border border-primary rounded-full flex justify-center items-center'
                    >
                        <img className='h-4 w-auto' src="/images/Phone.svg" />
                    </a>
                    <button className='bg-primary text-white px-4 rounded-full flex justify-center items-center'>
                        Contact Us
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            {/* <img
                                className="h-8 w-auto"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                alt=""
                            /> */}
                            <Image
                                src="/images/Clip-path-group.svg"
                                alt="Logo"
                                className="h-8 w-auto"
                                width={100}
                                height={38}
                                priority
                            />
                        </Link>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon />
                            {/* <XMarkIcon className="h-6 w-6" aria-hidden="true" /> */}
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-primary">
                            <div className="space-y-2 py-6">

                                <Link
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 font-gilroy text-[0.938rem] font-medium leading-[1.125rem] text-secondary hover:bg-gray-50"
                                >
                                    Home
                                </Link>
                                <Link
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 font-gilroy text-[0.938rem] font-medium leading-[1.125rem] text-secondary hover:bg-gray-50"
                                >
                                    Our Work
                                </Link>

                                <Disclosure as="div" className="-mx-3">
                                    {({ }) => (
                                        <>
                                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-1.5 pl-3 pr-3.5 font-gilroy text-[0.938rem] font-medium leading-[1.125rem] text-secondary hover:bg-gray-50">
                                                Our Service
                                                <ChevronDownIcon className="text-primary h-4 w-4" />
                                                {/* <ChevronDownIcon
                                                    className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                                                    aria-hidden="true"
                                                /> */}
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="mt-2 space-y-4 ">

                                                {/* {megamenuTitles.map((item) => ( */}
                                                {megamenuTitles.map((item) =>
                                                    <Disclosure.Button
                                                        key={item.title}
                                                        as="a"
                                                        className="block rounded-lg py-2 pl-6 pr-3 font-gilroy text-[0.938rem] font-medium leading-[1.125rem] text-secondary hover:text-primary"
                                                    >
                                                        {item.title}
                                                    </Disclosure.Button>
                                                )}

                                                {/* {[...products, ...callsToAction].map((item) => ( 
                                                    <Disclosure.Button
                                                        key={item.name}
                                                        as="a"
                                                        href={item.href}
                                                        className="block rounded-lg py-2 pl-6 pr-3 font-gilroy text-[0.938rem] font-medium leading-[1.125rem] text-secondary hover:bg-gray-50"
                                                    >
                                                        {item.name}
                                                    </Disclosure.Button>
                                                ))} */}
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 font-gilroy text-[0.938rem] font-medium leading-[1.125rem] text-secondary  hover:bg-gray-50"
                                >
                                    Blog
                                </a>
                                <a
                                    href="/about"
                                    className="-mx-3 block rounded-lg px-3 py-2 font-gilroy text-[0.938rem] font-medium leading-[1.125rem] text-secondary hover:bg-gray-50"
                                >
                                    About
                                </a>
                                {/* <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 font-gilroy text-[0.938rem] font-medium leading-[1.125rem] text-secondary hover:bg-gray-50"
                                >
                                    Company
                                </a> */}
                            </div>
                            <div className="py-6">

                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 font-gilroy text-[0.938rem] font-medium leading-[1.125rem] text-secondary  hover:bg-gray-50"
                                >
                                    Log in
                                </a>

                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>

    )
}

"use client"
import { Fragment, useState } from 'react'
import { Disclosure, Popover, Transition } from '@headlessui/react'
import Image from 'next/image'
import MenuIcon from '../../../../icons/MenuIcon'
import ChevronDownIcon from '../../../../icons/ChevronDownIcon'
import XMarkIcon from '../../../../icons/XMarkIcon'
import ChevronRightIcon from '../../../../icons/ChevronRightIcon'
import Link from 'next/link'





export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [megamenuTitles, setMegaMenuTitles] = useState([
        {
            title: "UI/UX Designer", children: [
                { icon: "/images/WorkSection/Front-end-Developer.svg", subtitle: "CMS & Ecommerce", desc: "Lorem ipsum dolor sit" },
                { icon: "/images/WorkSection/Front-end-Developer.svg", subtitle: "CMS & Ecommerce", desc: "Lorem ipsum dolor sit" },
                { icon: "/images/WorkSection/Front-end-Developer.svg", subtitle: "CMS & Ecommerce", desc: "Lorem ipsum dolor sit" },
                { icon: "/images/WorkSection/Front-end-Developer.svg", subtitle: "CMS & Ecommerce", desc: "Lorem ipsum dolor sit" },
                { icon: "/images/WorkSection/Front-end-Developer.svg", subtitle: "CMS & Ecommerce", desc: "Lorem ipsum dolor sit" },
                { icon: "/images/WorkSection/Front-end-Developer.svg", subtitle: "CMS & Ecommerce", desc: "Lorem ipsum dolor sit" },
            ], isActive: false
        },
        {
            title: "CMS & Ecommerce", children: [
                { icon: "/images/WorkSection/Front-end-Developer.svg", subtitle: "CMS & Ecommerce", desc: "Lorem ipsum dolor sit"},
                { icon: "/images/WorkSection/Front-end-Developer.svg", subtitle: "CMS & Ecommerce", desc: "Lorem ipsum dolor sit"},
                { icon: "/images/WorkSection/Front-end-Developer.svg", subtitle: "CMS & Ecommerce", desc: "Lorem ipsum dolor sit" },
                { icon: "/images/WorkSection/Front-end-Developer.svg", subtitle: "CMS & Ecommerce", desc: "Lorem ipsum dolor sit" },
                { icon: "/images/WorkSection/Front-end-Developer.svg", subtitle: "CMS & Ecommerce", desc: "Lorem ipsum dolor sit" },
                { icon: "/images/WorkSection/Front-end-Developer.svg", subtitle: "CMS & Ecommerce", desc: "Lorem ipsum dolor sit"},
            ], isActive: true
        },
        {
            title: "Web Development", children: [
                { icon: "/images/WorkSection/Front-end-Developer.svg", subtitle: "CMS & Ecommerce", desc: "Lorem ipsum dolor sit" },
                { icon: "/images/WorkSection/Front-end-Developer.svg", subtitle: "CMS & Ecommerce", desc: "Lorem ipsum dolor sit" },
                { icon: "/images/WorkSection/Front-end-Developer.svg", subtitle: "CMS & Ecommerce", desc: "Lorem ipsum dolor sit" },
                { icon: "/images/WorkSection/Front-end-Developer.svg", subtitle: "CMS & Ecommerce", desc: "Lorem ipsum dolor sit" },
            ], isActive: false
        },
        { title: "Mobile App Development" },
        {
            title: "Website Maintenance", children: [
                { icon: "/images/WorkSection/Front-end-Developer.svg", subtitle: "CMS & Ecommerce", desc: "Lorem ipsum dolor sit" },
                { icon: "/images/WorkSection/Front-end-Developer.svg", subtitle: "CMS & Ecommerce", desc: "Lorem ipsum dolor sit" },
                { icon: "/images/WorkSection/Front-end-Developer.svg", subtitle: "CMS & Ecommerce", desc: "Lorem ipsum dolor sit" },
            ], isActive: false
        },
        {
            title: "Hire Dedicated Developers", children: [
                { icon: "/images/WorkSection/Front-end-Developer.svg", subtitle: "CMS & Ecommerce", desc: "Lorem ipsum dolor sit" },
                { icon: "/images/WorkSection/Front-end-Developer.svg", subtitle: "CMS & Ecommerce", desc: "Lorem ipsum dolor sit" },
                { icon: "/images/WorkSection/Front-end-Developer.svg", subtitle: "CMS & Ecommerce", desc: "Lorem ipsum dolor sit" },
            ], isActive: false
        },
    ])


    const handleActiveLink = (item: any) => {
        console.log("item", item);
        const mappingData = megamenuTitles.map((menu) => {

            if (menu.title === item.title) {
                menu.isActive = true;
                return menu
            }
            else {
                menu.isActive = false;
                return menu
            }
        })
        setMegaMenuTitles(mappingData)
    }

    return (
        <header className="bg-white border-b border-gray">
            <nav className="mx-auto flex max-w-[1320px] items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex">
                    <Link href="/"  className="-m-1.5 p-1.5">
                        <Image
                            src="/images/stroke-logo.svg"
                            alt="Logo"
                            className="h-8 2xl:h-10 w-auto "
                            width={100}
                            height={40}
                            priority
                        />
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
                    </button>
                </div>


                <Popover.Group className="hidden lg:flex lg:gap-x-9 2xl:gap-x-12 items-center">
                    <Link href="/"  className="font-primaryFont text-[0.938rem] font-medium leading-[1.138rem] text-secondary hover:text-primary inline-block after:content-[''] after:block after:w-0 hover:after:w-full after:h-[1px] after:bg-primary transition-all after:transition-all ease-in after:duration-500 ">
                        Home
                    </Link>
                    <Link href="#"  className="font-primaryFont text-[0.938rem] font-medium leading-[1.138rem]  text-secondary hover:text-primary inline-block after:content-[''] after:block after:w-0 hover:after:w-full after:h-[1px] after:bg-primary transition-all after:transition-all ease-in after:duration-500">
                        Our Work
                    </Link>

                    <Popover className="relative inline-block after:content-[''] after:block after:w-0 hover:after:w-full after:h-[1px] after:bg-primary transition-all after:transition-all ease-in after:duration-500">
                        <Popover.Button className="font-primaryFont flex items-center gap-x-1 text-[0.938rem] font-medium leading-[1.138rem] text-secondary hover:text-primary">
                            Our Service
                            <ChevronDownIcon className="text-primary h-4 w-4" />
                        </Popover.Button>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-out duration-200"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >

                            <Popover.Panel className={`megamenu before:content-[url('/images/arrow-upper.svg')] before:bg-no-repeat before:bg-contain before:fixed before:left-[45%] before:-top-[15px] before:overflow-visible before:z-20 before:text-base absolute top-12 mt-1 z-10 w-screen max-w-[996px] rounded-[30px] `}
                                style={{ transform: 'scaleY(1) translate(-40%)' }}>

                                <div className="overflow-hidden rounded-[30px] bg-white shadow-2xl">
                                    <div className="flex ">
                                        <div className="w-2/6 ">
                                            {megamenuTitles.map((item) =>
                                                <div key={item.title} className={`${item.isActive ? "border-r-white bg-white text-primary cursor-pointer border-l-primary" : "bg-lightRed text-secondary border-r-2 border-r-primary border-l-lightRed"} py-5 pl-6 border-l-4 flex justify-between hover:border-r-white hover:bg-white hover:text-primary hover:cursor-pointer hover:border-l-primary `} onClick={() => { handleActiveLink(item) }}>
                                                    <h4 className="text-lg leading-[22px] font-medium">{item.title}</h4>
                                                    {item.children && (
                                                        <ChevronRightIcon />
                                                    )}
                                                </div>
                                            )}

                                        </div>
                                        <div className="w-4/6 p-14 grow self-center overflow-hidden">
                                            <div>
                                                {megamenuTitles.map((item) =>
                                                    <div key={item.title}
                                                        className={`grid grid-cols-2 gap-y-8 gap-x-14 ${item.isActive ? "opacity-100 block" : "opacity-0 hidden"} overflow-hidden slide-right`}>
                                                        {item?.children?.map((list) =>
                                                            <div className="flex gap-4 items-center" key={list.subtitle}>
                                                                <div className="w-[60px] h-[60px] border border-primary rounded-[10px] flex justify-center items-center">
                                                                    <Image src={list.icon} height={30} width={30} alt={''} />
                                                                </div>
                                                                <div>
                                                                    <h4 className="text-sm text-secondary font-secondaryFont font-semibold">{list.subtitle}</h4>
                                                                    <p className="text-xs text-[#818F9E] font-secondaryFont font-medium leading-[1.125rem]">{list.desc}</p>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </Popover>
                    <Link href="#"  className="font-primaryFont text-[0.938rem] font-medium leading-[1.138rem] text-secondary hover:text-primary inline-block after:content-[''] after:block after:w-0 hover:after:w-full after:h-[1px] after:bg-primary transition-all after:transition-all ease-in after:duration-500">
                        Blog
                    </Link>
                    <Link href="/about"  className="font-primaryFont text-[0.938rem] font-medium leading-[1.138rem] text-secondary hover:text-primary inline-block after:content-[''] after:block after:w-0 hover:after:w-full after:h-[1px] after:bg-primary transition-all after:transition-all ease-in after:duration-500">
                        About
                    </Link>
                </Popover.Group>


                <div className="hidden lg:flex lg:justify-end gap-4">
                    <Link
                        href="mailto:info@strokeinfotech.com" 
                        className="w-[36px] h-[36px] border border-primary rounded-full flex justify-center items-center"
                    >
                        <img className="h-4 w-auto" src="/images/E-mail.svg" />
                    </Link>
                    <Link
                        href="skype:strokeinfotech?chat" 
                        className="w-[36px] h-[36px] border border-primary rounded-full flex justify-center items-center"
                    >
                        <img className="h-4 w-auto" src="/images/skype.svg" />
                    </Link>
                    <Link
                        href="#" 
                        className="w-[36px] h-[36px] border border-primary rounded-full flex justify-center items-center"
                    >
                        <img src="/images/Phone.svg" className="h-4 w-auto" />
                    </Link>
                    <button className="bg-primary font-primaryFont text-white px-4 rounded-full flex justify-center items-center">
                        Contact Us
                    </button>
                </div>
            </nav>



            {/* New Mobile Menu */}
            <div>
                <div id="drawer" className={`drawer ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"} transition-transform ease-in-out duration-500 bg-white shadow h-screen p-6 fixed top-0 right-0 w-[90%] z-10`}>
                    <div className="flex items-center justify-between">
                        <Link href="/"  className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <Image
                                src="/images/stroke-logo.svg"
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

                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-primary">
                            <div className="space-y-2 py-6">

                                <Link
                                    href="/"  
                                    className="-mx-3 block rounded-lg px-3 py-2 font-primaryFont text-[0.938rem] font-medium leading-[1.125rem] text-secondary"
                                >
                                    Home
                                </Link>
                                <Link
                                    href="#" 
                                    className="-mx-3 block rounded-lg px-3 py-2 font-primaryFont text-[0.938rem] font-medium leading-[1.125rem] text-secondary"
                                >
                                    Our Work
                                </Link>

                                <Disclosure as="div" className="-mx-3">
                                    {({ }) => (
                                        <>
                                            <Disclosure.Button className="flex w-full items-center justify-between focus:outline-none rounded-lg py-1.5 pl-3 pr-3.5 font-primaryFont text-[0.938rem] font-medium leading-[1.125rem] text-secondary ">
                                                Our Service
                                                <ChevronDownIcon className="text-primary h-4 w-4" />
                                            </Disclosure.Button>
                                            <Transition
                                                as={Fragment}
                                                enter="transition ease-in duration-500"
                                                enterFrom="opacity-0 translate-y-1"
                                                enterTo="opacity-100 translate-y-0"
                                                leave="transition ease-out duration-500"
                                                leaveFrom="opacity-100 translate-y-0"
                                                leaveTo="opacity-0 translate-y-1"
                                            >
                                                <Disclosure.Panel className="mt-2 space-y-4 " >
                                                    {megamenuTitles.map((item) =>
                                                        <Disclosure.Button
                                                            key={item.title}
                                                            as="a"
                                                            className="block rounded-lg py-2 pl-6 pr-3 font-primaryFont text-[0.938rem] font-medium leading-[1.125rem] text-secondary hover:text-primary"
                                                        >
                                                            {item.title}
                                                        </Disclosure.Button>
                                                    )}
                                                </Disclosure.Panel>
                                            </Transition>
                                        </>
                                    )}
                                </Disclosure>

                                <Link
                                    href="/"  passHref={true}
                                    className="-mx-3 block rounded-lg px-3 py-2 font-primaryFont text-[0.938rem] font-medium leading-[1.125rem] text-secondary"
                                >
                                    Blog
                                </Link>
                                <Link
                                    href="/about"  passHref={true}
                                    className="-mx-3 block rounded-lg px-3 py-2 font-primaryFont text-[0.938rem] font-medium leading-[1.125rem] text-secondary"
                                >
                                    About
                                </Link>

                            </div>
                            <div className="py-6">
                                <Link
                                    href="#" 
                                    className="-mx-3 block rounded-lg px-3 py-2.5 font-primaryFont text-[0.938rem] font-medium leading-[1.125rem] text-secondary"
                                >
                                    Log in
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
                <div id="overlay" className={`overlay ${mobileMenuOpen ? "opacity-40 visible" : "opacity-0 invisible"} bg-black fixed bottom-0 top-0 right-0 left-0 h-screen w-dvw transition-opacity ease-in-out duration-200`} onClick={() => setMobileMenuOpen(false)}></div>
            </div>

        </header >

    )
}

import React from 'react'
import SectionHeading from '../SectionHeading/SectionHeading'
import SectionParagraph from '../SectionHeading/SectionParagraph'

export default function ImagewithText() {

    const count = [
        { total: '60+', name: 'Satisfied Clients' },
        { total: '200+', name: 'Projects Delivered' },
        { total: '20+', name: 'Expert Developers' },

    ]

    return (
        // <main className="flex min-h-screen flex-col items-center justify-between bg-white">
        <div className=" bg-white py-28 lg:py-32">

            <div className="mx-auto flex flex-col lg:flex-row max-w-[1320px] items-center justify-between px-6 lg:px-10 gap-16">
                <div className='w-full lg:w-3/6'>
                    <img src="/images/About-Section.png" className="h-auto lg:h-96 w-auto rounded-[30px] border-x-[16px] border-primary mx-auto" />
                </div>
                <div className='w-full lg:w-3/6 py-4 lg:py-0  text-center px-4 lg:px-0 lg:text-left'>
                    {/* <h2 className="text-[48px] leading-[59px] font-bold">A software company with specialized developers and engineers in technologies</h2> */}
                    <SectionHeading title="A software company with specialized developers and engineers in technologies" color="text-black" />
                    <div className='pt-6 lg:max-w-xl'>
                        <SectionParagraph text="Stroke Infotech is one of the most trusted firms across the globe in software development business. We’re a small team with talented and committed experts that help global brands and enterprises with innovative solutions. We’re not just a company but we’re one family that work together to achieve a goals. For us, the definition of success is providing an solution with innovative and creative ideas." />
                    </div>
                    {/* <p className='font-montserrat font-regular text-black text-lg leading-[30px] pt-6 lg:max-w-xl'>Stroke Infotech is one of the most trusted firms across the globe in software development business. We’re a small team with talented and committed experts that help global brands and enterprises with innovative solutions. We’re not just a company but we’re one family that work together to achieve a goals. For us, the definition of success is providing an solution with innovative and creative ideas. </p> */}
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row text-center items-center justify-center gap-10 md:gap-20 lg:gap-40 pt-28 pb-10">
                {count.map((item) =>
                    <div>
                        <h2 className=" text-7xl leading-[76px] text-primary font-bold text-center">{item.total}</h2>
                        <p className="font-secondaryFont text-xl leading-7 font-semibold mt-4 text-black">{item.name}</p>
                    </div>
                )}

            </div>
        </div>
    )
}

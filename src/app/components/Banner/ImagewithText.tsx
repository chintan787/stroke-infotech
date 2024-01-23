import React from 'react'
import SectionHeading from '../SectionHeading/SectionHeading'
import SectionParagraph from '../SectionHeading/SectionParagraph'
import Image from 'next/image'

export default function ImagewithText({imagePath,title,paragraph,showImage}:any) {

    const count = [
        { total: '60+', name: 'Satisfied Clients' },
        { total: '200+', name: 'Projects Delivered' },
        { total: '20+', name: 'Expert Developers' },

    ]

    return (
        <div className=" bg-white pt-28 ">
            <div className="mx-auto flex flex-col lg:flex-row max-w-[1320px] items-center justify-between px-6 lg:px-4 gap-10">
                <div className={`w-full lg:w-3/6 ${showImage === 'right' ? 'order-2' : 'order-1'}`}>
                    <Image src={imagePath} width={1000} height={96} alt='' className="h-auto lg:h-96 w-auto rounded-[30px] border-x-[16px] border-primary mx-auto" />
                </div>
                <div className={`w-full lg:w-3/6 py-4 lg:py-0 text-center lg:text-left ${showImage === 'right' ? 'order-1' : 'order-2'}`}>
                    <SectionHeading title={title} color="text-black" />
                    <div className='pt-6 lg:max-w-xl'>
                        {paragraph?.map((item:any,index:any)=>
                        <SectionParagraph text={item} key={index} />
                        )}
                    </div>
                </div>
            </div>

            {/* <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row text-center items-center justify-center gap-10 md:gap-20 lg:gap-40 pt-28 pb-10">
                {count.map((item) =>
                    <div>
                        <h2 className=" text-7xl leading-[76px] text-primary font-bold text-center">{item.total}</h2>
                        <p className="font-secondaryFont text-xl leading-7 font-semibold mt-4 text-black">{item.name}</p>
                    </div>
                )}
            </div> */}
        </div>
    )
}

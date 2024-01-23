import React from 'react'
import Image from 'next/image'
import Button from '../Button/Button'
import SectionParagraph from '../SectionHeading/SectionParagraph'

export default function Banner(
    {
        title, titleclassName, button, data,imgPath
    }: any
    // {
    //     title?:String,
    //     titleclassName?:String,
    //     paragraph?:String,
    //     button?:String,
    //     data?:On,
    // }

) {
    return (
        <div className="flex flex-col items-center justify-between bg-lightRed overflow-hidden">
            <div className="lg:max-w-7xl 2xl:max-w-[1620px] ml-auto pl-6 lg:pl-10 ">
                <div className="flex justify-end items-center flex-col md:flex-row gap-6 ">
                    <div className="w-full lg:w-2/5 py-8 md:py-0">
                        <h1 className={`font-bold mr-12 ${titleclassName}`}>{title}</h1>
                        <div className="w-4/5 my-6">
                            {data?.map((item:any,index: any) =>
                                <div key={index} className='my-3'>
                                    <h4 className='font-secondaryFont font-semibold text-[1.375rem] leading-[1.875rem] mb-3'>{item.subHeading}</h4>
                                    <SectionParagraph text={item.para} />
                                </div>
                            )}
                        </div>
                       
                        {button && (
                            <Button buttonText={button} />
                        )}
                       
                    </div>
                    <div className='w-[90%] lg:w-3/5 '>
                        <Image src={imgPath} height={650} width={650} alt='banner_img' className='h-[650px] w-auto object-cover rounded-l-[50px] border-l-[16px] border-primary' />
                    </div>
                </div>
            </div>
        </div>
    )
}

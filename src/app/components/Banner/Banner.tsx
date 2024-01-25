import React from 'react'
import Image from 'next/image'
import Button from '../Button/Button'
import SectionParagraph from '../SectionHeading/SectionParagraph'

export default function Banner(
    {
        title, button, data,imgPath,aboutTitle
    }: any

) {
    return (
        <div className="flex flex-col items-center justify-between bg-lightRed overflow-hidden">
            <div className="lg:max-w-7xl 2xl:max-w-[1620px] ml-auto pl-6 lg:pl-10 ">
                <div className="flex justify-end items-center flex-col md:flex-row gap-6 ">
                    <div className="w-full lg:w-2/5 py-8 md:py-0">
                        {title && (
                        <h1 className={`font-bold mr-12 text-secondary text-4xl md:text-5xl lg:text-[4rem] leading-[2.875rem] md:leading-[3.375rem] lg:leading-[4.375rem]`}>{title}</h1>
                        )}
                        {aboutTitle && (
                        <h2 className={`font-bold mr-12 text-primary text-4xl md:text-5xl leading-[2.875rem] md:leading-[3.688rem]`}>{aboutTitle}</h2>
                        )}
                        <div className="w-4/5 my-6">
                            {data?.map((item:any,index: any) =>
                                <div key={index} className='my-3'>
                                    <h4 className='font-secondaryFont font-semibold text-[1.375rem] leading-[1.875rem] mb-3'>{item?.subHeading}</h4>
                                    <SectionParagraph text={item?.para} />
                                </div>
                            )}
                        </div>
                       
                        {button && (
                            <Button buttonText={button} />
                        )}
                       
                    </div>
                    <div className='w-[100%] lg:w-3/5 '>
                        <Image src={imgPath} height={650} width={650} alt='banner_img' className='h-[650px] w-auto object-cover rounded-l-[50px] border-l-[16px] border-primary' />
                    </div>
                </div>
            </div>
        </div>
    )
}

import React from 'react'

export default function Counter({ background, countcolor, textcolor,counterTitle }: any) {
    const count = [
        { total: '60+', name: 'Satisfied Clients' },
        { total: '200+', name: 'Projects Delivered' },
        { total: '20+', name: 'Expert Developers' },

    ]
    return (
        <div className={`${background} py-12 px-6`}>

            <div className="max-w-7xl mx-auto ">
                {counterTitle && (
                    <div className='max-w-5xl mx-auto text-center py-8'>
                    <p className={` text-[2.188rem] leading-[3.125rem] font-secondaryFont font-normal ${textcolor}`}>{counterTitle}</p>
                </div>
                )}
                
                <div className='p-6 lg:p-10 flex flex-col md:flex-row text-center items-center justify-center gap-10 md:gap-20 lg:gap-40 '>
                    {count.map((item) =>
                        <div>
                            <h2 className={`${countcolor} text-7xl leading-[4.75rem] font-bold text-center`}>{item.total}</h2>
                            <p className={`${textcolor} font-secondaryFont text-xl leading-7 font-semibold mt-4 text-black`}>{item.name}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

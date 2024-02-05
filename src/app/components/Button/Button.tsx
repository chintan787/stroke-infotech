import React from 'react'

export default function Button({buttonText}:{buttonText?:String}) {
    return (
        <button className="font-primaryFont bg-primary text-white font-medium px-7 py-3 text-lg md:text-xl lg:text-[1.375rem] leading-[1.125rem] md:leading-5 lg:leading-[22px] rounded-[1.375rem] flex justify-center items-center">
           {buttonText}
        </button>
 
    )
}


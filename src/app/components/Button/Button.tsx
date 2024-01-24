import React from 'react'

export default function Button({buttonText}:{buttonText?:String}) {
    return (
        <button className='bg-primary text-white font-medium px-7 py-3 text-[1.375rem] leading-[22px] rounded-[1.375rem] flex justify-center items-center'>
           {buttonText}
        </button>
 
    )
}


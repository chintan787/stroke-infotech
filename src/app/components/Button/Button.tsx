import React from 'react'

export default function Button({buttonText}:{buttonText : string}) {
    return (
        <button className='bg-primary text-white font-medium px-7 py-3 text-[22px] leading-[22px] rounded-[50px] flex justify-center items-center'>
           {buttonText}
        </button>
 
    )
}


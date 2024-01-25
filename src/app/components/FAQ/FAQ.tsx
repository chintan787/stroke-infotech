'use client'

import React, { useState } from 'react'
import SectionHeading from '../SectionHeading/SectionHeading'
import PlusIcon from '../../../../icons/PlusIcon'

export default function FAQ() {
    const [faqData,setFaqData] = useState([
        { id:1, que: "Which famous IT Companies near me can provide me app development services?", ans: "Which famous IT Companies near me can provide me app development services?",isActive: false, },
        { id:2,que: "Which famous IT Companies near me can provide me app development services?", ans: "Which famous IT Companies near me can provide me app development services?",isActive: false, },
        { id:3,que: "Which famous IT Companies near me can provide me app development services?", ans: "Which famous IT Companies near me can provide me app development services?",isActive: false, },
        { id:4,que: "Which famous IT Companies near me can provide me app development services?", ans: "Which famous IT Companies near me can provide me app development services?",isActive: false, },

    ])

    const handleActiveLink = (id: any) => {
        const mappingData = faqData.map((item) => {

            if (item.id === id) {
                item.isActive = !item.isActive;
                return item
            }
            else {
                // item.isActive = false;
                return item
            }
        })
        setFaqData(mappingData)
      
    }

    return (
        <div className="my-16 px-6 sm:px-10">
            <div className="max-w-[1130px] mx-auto ">
                <div className="text-center">
                    <SectionHeading title="Frequently Asked Questions" color="text-secondary" />
                </div>
                {/* <div className="grid grid-cols-2 gap-10 py-12"> */}
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-10 py-12">
                    {faqData.map((item,index) =>
                        <li className="flex items-center bg-lightRed rounded-[20px] p-6" onClick={() => { handleActiveLink(item.id) }}>
                            <div>
                                <PlusIcon />
                            </div>
                            <div className="ml-6 ">
                                <h4 className="font-secondaryFont text-base leading-[1.875rem] font-medium erlative block cursor-pointer">{item.que}</h4>
                                <p className={`${item.isActive ? 'h-auto opacity-100 z-10' : 'h-0 opacity-0 z-0'} overflow-hidden panel-content`} >{item.ans}</p>
                            </div>
                        </li>
                    )}
                </ul>
                {/* </div> */}
            </div>
        </div>
    )
}

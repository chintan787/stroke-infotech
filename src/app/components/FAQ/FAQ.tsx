'use client'

import React, { useState } from 'react'
import SectionHeading from '../SectionHeading/SectionHeading'
import PlusIcon from '../../../../icons/PlusIcon'
import MinusIcon from '../../../../icons/MinusIcon'

export default function FAQ() {
    const [faqData, setFaqData] = useState([
        { id: 1, que: "Which famous IT Companies near me can provide me app development services?", ans: "Which famous IT Companies near me can provide me app development services?", isActive: false, },
        { id: 2, que: "Which famous IT Companies near me can provide me app development services?", ans: "Which famous IT Companies near me can provide me app development services?", isActive: false, },
        { id: 3, que: "Which famous IT Companies near me can provide me app development services?", ans: "Which famous IT Companies near me can provide me app development services?", isActive: false, },
        { id: 4, que: "Which famous IT Companies near me can provide me app development services?", ans: "Which famous IT Companies near me can provide me app development services?", isActive: false, },

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
                <ul className="flex flex-wrap w-full gap-8 xl:gap-10 py-12">
                    {faqData.map((item, index) =>
                        <li className={`flex bg-lightRed rounded-[20px] p-4 md:p-6 h-full w-full sm:w-[46%] lg:w-[48%]`} onClick={() => { handleActiveLink(item.id) }}>
                            <div className="cursor-pointer pt-3">
                                {item.isActive ? <MinusIcon /> :<PlusIcon /> }
                                
                            </div>
                            <div className="ml-6">
                                <h4 className="font-secondaryFont text-sm md:text-base leading-6 md:leading-[1.875rem] font-medium relative block cursor-pointer">{item.que}</h4>
                                <p className={`panel-content ${item.isActive ? 'h-auto opacity-100 py-4' : 'h-0 opacity-0'} overflow-hidden relative transition-all ease-in duration-300 font-secondaryFont text-sm md:text-base font-light`}>{item.ans}</p>
                            </div>
                        </li>

                    )}
                </ul>
            </div>
        </div>
    )
}

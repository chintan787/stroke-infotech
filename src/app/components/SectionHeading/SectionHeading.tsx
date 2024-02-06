import classNames from 'classnames'
import React from 'react'

export default function SectionHeading({title ,color} :{title:string, color : string}) {
  return (
    <h2 className={`font-primaryFont text-2xl sm:text-3xl md:text-[2.5rem] leading-9 sm:leading-[2.625rem] md:leading-[3.188rem] font-semibold ${color}`}>{title}</h2>
  )
}

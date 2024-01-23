import classNames from 'classnames'
import React from 'react'

export default function SectionHeading({title ,color} :{title:string, color : string}) {
  return (
    <h2 className={`text-[3rem] leading-[3.688rem] font-bold ${color}`}>{title}</h2>
  )
}

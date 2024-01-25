import React from 'react'

export default function SectionParagraph({text}:{text?:String}) {
  return (
    <p className="font-secondaryFont font-regular my-6 text-base md:text-lg leading-6 md:leading-[1.875rem]">{text}</p>

  )
}

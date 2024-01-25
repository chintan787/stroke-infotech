import React from 'react'
import Banner from '../Banner/Banner'
import ImagewithText from '../Banner/ImagewithText'
import Counter from '../Banner/Counter'
import BoxContent from '../BoxContent/BoxContent'
import FAQ from '../FAQ/FAQ'

export default function AboutPage() {

    const bannerData = [
        { subHeading: "", para: "Founded by a team of specialists in cyber security, consultancy and information security, we are a trusted cyber security company with a passion for quality service." },
        { subHeading: "Mission", para: "Our mission is to provide dynamic cyber security services and training that extends beyond technology to encompass people, culture, processes and even the physical environment; to make businesses as resilient as possible to prevent or cyber-attacks." },
        { subHeading: "Vision", para: "Our vision is to be at the forefront of the race to make cyberspace a safer place for organisations through the provision of dynamic services that respond to the risks in an ever evolving digital world" }
    ]
    const imageWidthTextLeft = ["We’re a small team with talented and committed experts that help global brands and enterprises with innovative solutions. We’re not just a company but we’re one family that work together to achive a goals.",
        "We’re a small team with talented and committed experts that help global brands and enterprises with innovative solutions. We’re not just a company but we’re one family that work together to achive a goals."
    ]
    const imageWidthTextRight = ["We’re a small team with talented and committed experts that help global brands and enterprises with innovative solutions. For us, the definition of success is providing creative ideas, transparancy and in timely manners.","We’re a small team with talented and committed experts that help global brands and enterprises with innovative solutions. We’re not just a company .","We’re a small team with talented and committed experts that help global brands and enterprises with innovative solutions. We’re not just a company ."]
    return (
        <>
            <Banner aboutTitle="About Us" 
                data={bannerData} imgPath="/images/About-Hero-Section.png"
            />
            <ImagewithText imagePath="/images/About-image-one.png" title="Who We Are" paragraph={imageWidthTextLeft} />
            <ImagewithText imagePath="/images/About-image-two.png" title="What We Do" paragraph={imageWidthTextRight} showImage='right' />
            <Counter background="bg-primary" countcolor="text-white" textcolor="text-white" counterTitle="We've helped businesses increase their revenue on an average by 90% in their first year with us!"   />
            <BoxContent />
            <FAQ />
        </>
    )
}

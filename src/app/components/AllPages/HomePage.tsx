import React from 'react'
import Banner from '../Banner/Banner'
import ImagewithText from '../Banner/ImagewithText'
import ServiceSection from '../Banner/ServiceSection'
import Technologystack from '../TechnologyStack/Technologystack'
import IndustriesWeWorkWith from '../Worksection/IndustriesWeWorkWith'
import OurWork from '../Worksection/OurWork'
import BlogSection from '../BlogSection/BlogSection'
import Testimonials from '../Testimonials/Testimonials'
import Counter from '../Banner/Counter'

export default function HomePage() {
  const bannerData = [
    { subHeading: "", para: "Stroke Infotech is one of the most trusted firms across the globe in software development business. We’re a small team with talented and committed." },
  ]
  const imageWithTextData= ["Stroke Infotech is one of the most trusted firms across the globe in software development business. We’re a small team with talented and committed experts that help global brands and enterprises with innovative solutions. We’re not just a company but we’re one family that work together to achieve a goals. For us, the definition of success is providing an solution with innovative and creative ideas."]

  return (
    <>
      <Banner title="Scale your enterprise with cross-border teams"
        button="Read More" data={bannerData} imgPath="/images/Hero-section.png"
      />
      <ImagewithText imagePath="/images/About-Section.png" title="A software company with specialized developers and engineers in technologies" paragraph={imageWithTextData} />
      
      
      <Counter background="bg-white" countcolor="text-primary" textcolor="text-secondary"  />
      <ServiceSection />
      <Technologystack />
      <IndustriesWeWorkWith />
      <OurWork />
      <BlogSection />
      <Testimonials />
    </>
  )
}

import Image from 'next/image'
import Header from './components/NewLayout/Header'
import Banner from './components/Banner/Banner'
import ImagewithText from './components/Banner/ImagewithText'
import ServiceSection from './components/Banner/ServiceSection'
import NewLayout from './components/NewLayout/NewLayout'
import Technologystack from './components/TechnologyStack/Technologystack'
import IndustriesWeWorkWith from './components/Worksection/IndustriesWeWorkWith'
import OurWork from './components/Worksection/OurWork'
import BlogSection from './components/BlogSection/BlogSection'
import Testimonials from './components/Testimonials/Testimonials'
// import Demo from './components/Demo'

export default function Home() {
  return (
    <NewLayout>
   
        
     {/* <Header /> */}
    <Banner />
    <ImagewithText />
    <ServiceSection />
    <Technologystack />
    <IndustriesWeWorkWith />
    <OurWork />
    <BlogSection />
    <Testimonials />
    </NewLayout>
  )
}

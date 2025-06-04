import React, {useState} from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import InfoSection from '../components/InfoSection'
import PublicationSection from '../components/PublicationSection'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import ResearchSection from '../components/ResearchSection'
import ContactSection from '../components/ContactSection'

type Props = {}

const Home = (props: Props) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection />
            <InfoSection />
            <ResearchSection/>
            <PublicationSection/>
            <ContactSection/>
            <Footer />
        </>
    )
}

export default Home
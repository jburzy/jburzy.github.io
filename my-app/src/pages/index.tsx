import React, {useState} from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import InfoSection from '../components/InfoSection'
import PublicationSection from '../components/PublicationSection'
import Footer from '../components/Footer'
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/Data'
import HeroSection from '../components/HeroSection'

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
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <PublicationSection/>
            <Footer />
        </>
    )
}

export default Home
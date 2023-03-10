import React from 'react'
import '../../App.css'
import Logo from '../../components/Logo';
import MobileNavbar from '../../components/MobileNavbar';
import Hero from '../../components/Hero';
import Cards from '../../components/Cards';
import PrimaryNavbar from '../../components/PrimaryNavbar';
import SecondaryNavbar from '../../components/SecondaryNavbar';

export default function Home() {
    return (
        <>
            <div className="d-flex justify-content-around">
                <PrimaryNavbar />
                <Logo />
                <SecondaryNavbar />
                <MobileNavbar />
            </div>
            <Hero />
            <Cards />
        </>
    )
}

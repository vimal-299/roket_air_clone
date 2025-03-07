import React from 'react'
import { useState, useEffect } from "react";
import "./navbar.css"

export default function NavbarScroll() {
    const [showNavbar, setShowNavbar] = useState(true);
    let prevScrollPos = window.pageYOffset;

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setShowNavbar(prevScrollPos > currentScrollPos || currentScrollPos < 10);
            prevScrollPos = currentScrollPos;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div>
            <nav className={`navbar ${showNavbar ? "visible" : "hidden"}`}>
                <img src="./logo.svg" alt="" />
                <button className='btn'>Get in touch</button>
            </nav>
        </div>
        
    );
}

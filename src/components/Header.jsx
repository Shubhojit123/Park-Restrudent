import React, { useState } from 'react'
import '../styles/Header.css'

function Header() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <header className="header">
            <div className="logo">🍽️ Park Hotel & Restaurant</div>

            <nav className={menuOpen ? "nav open" : "nav"}>
                <a href="#hero">Home</a>
                <a href="#about">About</a>
                <a href="#menu">Menu</a>
                <a href="#contact">Contact</a>
                <button className="reserve-btn">Reserve Now</button>
            </nav>

            <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>

            </div>
        </header>
    )
}

export default Header

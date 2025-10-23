import React from 'react'
import { useState } from 'react'
import '../styles/navbar.css'


function Nav() {
    const [isOpen, setIsOpen] = useState(false)
    const handleOpenMenu = () =>{
        setIsOpen(!isOpen)
    }
    return (
        <header>
            <nav>
                <div className="logo">
                    <a href="#root">
                        <img src="./img/logo2.png" alt="logo" />
                    </a>
                </div>
                <ul className="tags">
                    <li><a href="#root">Inicio</a></li>
                    <li><a href="https://whatsapp.com/channel/0029Vaz8g791yT2FJmfwCf1D">Comunidad WhatsApp</a></li>
                    <li><a href="https://www.skool.com/genmax/about">Unete a GenMax</a></li>
                </ul>
                <div className="responsive-menu">
                    <button onClick={handleOpenMenu}>
                        MENU
                    </button>
                    <div className={isOpen ? 'resposive-menu-back opened' : 'resposive-menu-back'}>
                        <ul className="resposive-tag">
                            <li><a href="#root">Inicio</a></li>
                            <li><a href="https://whatsapp.com/channel/0029Vaz8g791yT2FJmfwCf1D">Comunidad WhatsApp</a></li>
                            <li><a href="https://www.skool.com/genmax/about">Unete a GenMax</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Nav

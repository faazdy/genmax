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
            <nav class="navbar navbar-expand-lg" data-bs-theme="dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#root">
                        <img src="/img/logo2.png" alt="logo" />
                    </a>
                    <button class="navbar-toggler p-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav mx-auto">
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#root">Inicio</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="https://www.skool.com/genmax/about">Únete a GenMax</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="https://whatsapp.com/channel/0029Vaz8g791yT2FJmfwCf1D">Comunidad WhatsApp</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/*<nav>
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
            </nav>*/}
        </header>
    )
}

export default Nav

import React from 'react';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/iconTCC2.svg'

import searchIcon from '../../assets/icons/lupa.svg'
import suggestIcon from '../../assets/icons/lampada.svg'

import './styles.css'

function Landing() {
    return (
        <div id="page-menu">
            <div id="page-menu-top">
                <div id="page-menu-logo">
                    <div className="logo-container">
                        <img src={logoImg} alt="TCC" />
                        <h2>Sua plataforma de idéias para temas de TCC.</h2>
                    </div>

                    <img src={landingImg} alt="Plataforma de TCCs" className="hero-image" />
                </div>
            </div>

            <div id="page-menu-bottom">
                <div id="welcome-text">
                    <p>Seja bem-vindo.</p>
                    <p id="what-todo">O que deseja fazer?</p>
                </div>
                <div id="buttons-container">
                    <a href="/search" className="search">
                        <img src={searchIcon} alt="Buscar" />
                        Buscar Tema
                    </a>

                    <a href="/suggest" className="suggest">
                        <img src={suggestIcon} alt="Ensinar" />
                        Sugerir Tema
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Landing;
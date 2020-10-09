import React from 'react';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/iconTCC2.svg'

import searchIcon from '../../assets/icons/lupa.svg'
import suggestIcon from '../../assets/icons/lampada.svg'

import './styles.css'

function Landing() {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div id="logo-container">
          <img src={logoImg} alt="TCC"/>
          <h2>Sua plaforma de ideias para temas de TCC.</h2>
          
        </div>

        <img src={landingImg} alt="Plataforma de estudos" className="hero-image"/>

        <div className="buttons-container">
          <a href="/" className="search">
            <img src={searchIcon} alt="buscar"/>
            Buscar tema
          </a>

          <a href="/" className="suggest">
            <img src={suggestIcon} alt="sugerir"/>
            Sugerir tema
          </a>
        </div>
        <span className="bem-vindo">
          <h3>Seja bem-vindo.
          O que deseja fazer?</h3>
        </span>
      </div>
    </div>

  )
}

export default Landing;
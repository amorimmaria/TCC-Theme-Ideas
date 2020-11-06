import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import axios from '../../axios-config'

// Contexts
import { useAuth } from '../../contexts/auth'

// Images
import logo from '../../assets/images/logo.svg'
import menu from '../../assets/images/landing.svg'
import searchIcon from '../../assets/images/icons/lupa.svg'
import suggestIcon from '../../assets/images/icons/lampada.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'
import signoutIcon from '../../assets/images/icons/signout.svg'

// CSS styles
import './styles.css'

function Menu() {
    const [feedback, setFeedback] = useState('Carregando conexões...')
    const [error, setError] = useState(true)
    const authContext = useAuth()
    const history = useHistory()

    useEffect(() => {
        (function fetchConnections() {
            axios.get('/connections', {
                headers: { authorization: 'Bearer ' + authContext.token }
            }).then(response => {
                const totalConnections = response.data.total
                setError(false)
                setFeedback(`
                    Total de ${totalConnections}
                    ${totalConnections === 1 ? "conexão" : "conexões"} já
                    ${totalConnections === 1 ? "realizada" : "realizadas"}
                `)
            }).catch(() => {
                setError(true)
                setFeedback('Não foi possível recuperar o total de conexões :(')
            })
        })()
    }, []) // eslint-disable-line

    useEffect(() => {
        if (!authContext.signedIn) history.replace("/auth/login")
    }, [authContext.signedIn]) // eslint-disable-line

    return (
        <div id="page-menu">
            <div id="page-menu-top">
                <div id="page-menu-header">
                    <div id="user-avatar" onClick={() => history.replace("/profile")}>
                        <img src={authContext.user?.avatar} alt="User Avatar" />
                        <p>{authContext.user?.name}</p>
                    </div>

                    <img id="user-signout" onClick={authContext.signOut} src={signoutIcon} alt="Signout" />
                </div>

                <div id="page-menu-logo">
                    <div className="logo-container">
                        <img src={logo} alt="TCC" />
                        <h2>Sua plataforma de idéias para temas de TCC.</h2>
                    </div>

                    <img src={menu} alt="Plataforma de TCCs" className="hero-image" />
                </div>
            </div>

            <div id="page-menu-bottom">
                <div id="welcome-text">
                    <p>Seja bem-vindo.</p>
                    <p id="what-todo">O que deseja fazer?</p>
                </div>
                <div id="buttons-container">
                    <Link to="/search" className="search">
                        <img src={searchIcon} alt="Buscar tema" />
                        Buscar Tema
                    </Link>

                    <Link to="/suggest" className="suggest">
                        <img src={suggestIcon} alt="Sugerir tema" />
                        Sugerir Tema
                    </Link>
                </div>

                <span id="total-connections">
                    {feedback}
                    {!error && <img src={purpleHeartIcon} alt="Coração roxo" />}
                </span>
            </div>
        </div>
    )
}

export default Menu
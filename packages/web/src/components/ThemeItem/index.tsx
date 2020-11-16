import React from 'react'
import axios from '../../axios-config'

// Components

// Images
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import noAvatarImg from '../../assets/images/sem-avatar.svg'

// CSS styles
import './styles.css'


interface ThemeItemProps {
  themeId: number,
  themePhotoURL: string,
  themeName: string,
  themeCurso: string,
  themeArea: string,
  themeTipoDeUsuario: string,
  themeSugestaoDeTema: string,
  themeDescricao: string,
  themeLinksArtigos: string,
  themeWhatsapp: number,
  themeRef?: any
}

const ThemeItem: React.FC<ThemeItemProps> = React.memo(props => {

  function createConnection() {
    axios.post('/connections', { user_id: props.themeId })
  }

  return (
    <article className="theme-item" ref={props.themeRef}>
      <header>
        <img src={
          props.themePhotoURL
            ? props.themePhotoURL
            : noAvatarImg
        } alt={props.themeName} />
        <div>
          <strong>{props.themeName}</strong>
          <span>{props.themeTipoDeUsuario}</span>
        </div>
        <span>
          <p><strong>Curso: </strong>{props.themeCurso}</p>
          <p><strong>Sugestão de Tema: </strong>{props.themeSugestaoDeTema}</p>
          <p><strong>Descrição: </strong>{props.themeDescricao}</p>
          <p><strong>Área: </strong>{props.themeArea}</p>
          <p><strong>Links de Artigos: </strong>{props.themeLinksArtigos}</p>
        </span>
      </header>
      <footer>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`https://wa.me/${props.themeWhatsapp}`}
          onClick={createConnection}
        >
          <img src={whatsappIcon} alt="Ícone do Whatsapp" />
          Entrar em contato

        </a>
      </footer>
    </article>
  )
})

export default ThemeItem

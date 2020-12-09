/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import axios from '../../axios-config'

// hooks
import { useAuth } from '../../hooks/auth'

// Images
import EmailIcon from '../../assets/images/icons/email.png'
import noAvatarImg from '../../assets/images/sem-avatar.svg'
import favouriteHeartImg from '../../assets/images/icons/heart-outline.png'
import unfavouriteHeartImg from '../../assets/images/icons/unfavorite.png'

// CSS styles
import './styles.css'

interface ThemeItemProps {
  themeId: number,
  themePhotoURL: string,
  themeName: string,
  themeCurso: string,
  themeArea: string,
  themeEmailContato: string,
  themeTipoDeUsuario: string,
  themeSugestaoDeTema: string,
  themeDescricao: string,
  themeLinksArtigos: string,
  isFavourited: boolean,
  themeRef?: any
}

const ThemeItem: React.FC<ThemeItemProps> = React.memo(props => {
  const [isFavourited, setIsFavourited] = useState(props.isFavourited)
  const authContext = useAuth()

  function createConnection() {
    axios.post('/connections', { user_id: props.themeId })
  }
  useEffect(() => {
    setIsFavourited(props.isFavourited)
  }, [props.isFavourited])

  function toggleFavourite() {
    const config = {
      headers: {
        authorization: "Bearer " + authContext.token,
        userid: authContext.user?.__id,
        themeid: props.themeId
      }
    }

    if (isFavourited) {
        axios.delete("/themes/favourites", config)
            .then(() => setIsFavourited(!isFavourited))
    } else {
        axios.post("/themes/favourites", null, config)
            .then(() => setIsFavourited(!isFavourited))
    }
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
          href={`mailto:${props.themeEmailContato}?subject=Interesse no tema sugerido no TCC Theme Ideas`}
          onClick={createConnection}
        >
          <img src={EmailIcon} alt="Ícone do email" />
          Entrar em contato

        </a>
        <a className="favourite"
          onClick={toggleFavourite}
        >
          <img
            src={isFavourited
                ? unfavouriteHeartImg
                : favouriteHeartImg
              }
          />
        </a>
      </footer>
    </article>
  )
})

export default ThemeItem

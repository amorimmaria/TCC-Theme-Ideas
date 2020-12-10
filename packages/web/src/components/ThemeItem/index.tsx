/* eslint-disable jsx-a11y/anchor-is-valid */
/*eslint-disable no-sequences */
import React, { useEffect, useState } from 'react'
import axios from '../../axios-config'
import { useHistory } from 'react-router-dom'

// hooks
import { useAuth } from '../../hooks/auth'

// Images
import EmailIcon from '../../assets/images/icons/email.png'
import noAvatarImg from '../../assets/images/sem-avatar.svg'
import favouriteHeartImg from '../../assets/images/icons/heart-outline.png'
import unfavouriteHeartImg from '../../assets/images/icons/unfavorite.png'

// CSS styles
import './styles.css'
import FeedbackModal from '../FeedbackModal'

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
  isFavourited?: boolean,
  themeRef?: any
}

const ThemeItem: React.FC<ThemeItemProps> = React.memo(props => {
  const [isFavourited, setIsFavourited] = useState(false)
  const [status, setStatus] = useState("none")
  const [showModal, setShowModal] = useState(false)
  const [modalType, setModalType] = useState('')
  const authContext = useAuth()
  const history = useHistory()
  function createConnection() {
    axios.post('/connections', { user_id: props.themeId })
  }

  const removedThemeModal = (
    <FeedbackModal
      status={status as "success" | "error"}
      message="Favorito deletado com sucesso!"
      onCloseModal={() => {
        setShowModal(false)
        history.replace('/')
      }}
    />
  )
  const removeThemeFailureModal = (
    <FeedbackModal
      status={status as "success" | "error"}
      message="Ocorreu um erro ao remover o tema. Tente novamente mais tarde."
      onCloseModal={() => setShowModal(false)}
    />
  )

  const successModal = (
    <FeedbackModal
      status="success"
      message="Tema favoritado com sucesso!
      Você pode ver seus temas favoritados no seu perfil."
      onCloseModal={() => {
        setShowModal(false)
      }}
    />
  )
  const errorModal = (
    <FeedbackModal
        status="error"
        message="Tema já favoritado"
        onCloseModal={() => history.replace("/menu")}
    />
  )

  useEffect(() => {
    setIsFavourited(props.isFavourited as boolean)
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
      setModalType("remove-theme")
      axios.delete("/themes/favourites", config)
        .then(() => (
          setIsFavourited(!isFavourited),
          setStatus("success"),
          setShowModal(true)
          ))
          .catch(() => {
            setStatus("error")
            setShowModal(true)
          })
    } else {
        setModalType("favoritar-theme")
        axios.post("/themes/favourites", null, config)
          .then(() => (
            setIsFavourited(!isFavourited),
            setStatus("success"),
            setShowModal(true)
          ))
          .catch(() => {
            setStatus("error")
            setShowModal(true)
          })
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
            alt = "Favoritos"
          />
        </a>
          <>
            {
              modalType === "favoritar-theme"
              ? (
                showModal && (
                  status === "success"
                    ? successModal :
                    status === "error"
                    && errorModal
                )
              )
              : (
                modalType === "remove-theme"
                && (
                    showModal && (
                      status === "success"
                        ? removedThemeModal :
                        status === "error"
                        && removeThemeFailureModal
                    )
                )
              )
            }
          </>
      </footer>
    </article>
  )
})

export default ThemeItem

import React, { useCallback, useState} from 'react'
import axios from '../../axios-config'
import { useHistory } from 'react-router-dom'

// hooks
import { useAuth } from '../../hooks/auth'

// Images
import LixeiraIcon from '../../assets/images/icons/lixeira.png'
import EditarIcon from '../../assets/images/icons/editar.svg'
// CSS styles
import './styles.css'

import FeedbackModal from '../../components/FeedbackModal'

interface ThemeItemProps {
  themeId: number,
  userId:number,
  themeCurso: string,
  themeArea: string,
  themeEmailContato: string,
  themeSugestaoDeTema: string,
  themeDescricao: string,
  themeLinksArtigos: string,
  themeRef?: any

}

const CadastradosItem: React.FC<ThemeItemProps> = React.memo(props => {
  const history = useHistory()
  const authContext = useAuth()
  const [modalType, setModalType] = useState("remove-theme")
  const [loading, setLoading] = useState(false)
  const [showModal, setShowModal] = useState(true)
  const [status, setStatus] = useState("none")

  function removeTheme() {
    setLoading(true)
    setModalType("remove-theme")
    axios.delete("/remove-themesCadastrados", {

      headers: {
        authorization: "Bearer " + authContext.token,
        userid: authContext.user?.__id,
        courseTheme: props.themeSugestaoDeTema
      }
    })
    .then(() => {
      setLoading(false)
      setStatus("success")
      setShowModal(true)
    })
    .catch(() => {
        setLoading(false)
        setStatus("error")
        setShowModal(true)
    })

  }

  const removedThemeModal = (
    <FeedbackModal
      status={status as "success" | "error"}
      message="Tema removido com sucesso!"
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

  const navigateToThemeUpdate = useCallback(()=>{
    history.push('update',{
      id: props.themeId,
    })
  },[history])

  return (
    <article className="theme-item" ref={props.themeRef}>
      <header>
        <span>
          <p><strong>Curso: </strong>{props.themeCurso}</p>
          <p><strong>Sugestão de Tema: </strong>{props.themeSugestaoDeTema}</p>
          <p><strong>Descrição: </strong>{props.themeDescricao}</p>
          <p><strong>Área: </strong>{props.themeArea}</p>
          <p><strong>Links de Artigos: </strong>{props.themeLinksArtigos}</p>
        </span>
      </header>
      <footer>
        <div id="buttons">
          <a className="editar"  onClick={navigateToThemeUpdate}>
            {/* <Link to="/update" className="editar">
              <img src={EditarIcon} alt="Ícone da lixeira" />
              Editar tema
            </Link> */}
            <img src={EditarIcon} alt="Ícone da lixeira" />
              Editar tema
          </a>

          <a className="lixeira"
            onClick={removeTheme}
          >
            <img src={LixeiraIcon} alt="Ícone da lixeira" />
            Remover tema
          </a>
          <>
            {
              modalType === "remove-theme"
              && (
                  showModal && (
                    status === "success"
                      ? removedThemeModal :
                      status === "error"
                      && removeThemeFailureModal
                  )
              )
            }
          </>
        </div>
      </footer>
    </article>
  )

})

export default CadastradosItem

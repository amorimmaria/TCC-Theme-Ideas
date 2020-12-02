import React from 'react'
import axios from '../../axios-config'

// hooks
import { useAuth } from '../../hooks/auth'

// Images
import LixeiraIcon from '../../assets/images/icons/lixeira.png'
import EditarIcon from '../../assets/images/icons/editar.svg'
// CSS styles
import './styles.css'
import { Redirect } from 'react-router-dom'


interface ThemeItemProps {
  themeId: number,
  themeCurso: string,
  themeArea: string,
  themeEmailContato: string,
  themeSugestaoDeTema: string,
  themeDescricao: string,
  themeLinksArtigos: string,
  themeRef?: any

}

const CadastradosItem: React.FC<ThemeItemProps> = React.memo(props => {

  const authContext = useAuth()

  function removeTheme() {
    // setLoading(true)
    // setModalType("remove-theme")
    axios.delete("/remove-themesCadastrados", {

      headers: {
        authorization: "Bearer " + authContext.token,
        userid: authContext.user?.__id,
        courseTheme: props.themeSugestaoDeTema
      },
    })

  }

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
          <a className="editar"
            onClick={removeTheme}
          >
            <img src={EditarIcon} alt="Ícone da lixeira" />
            Editar tema
          </a>

          <a className="lixeira"
            onClick={removeTheme}
          >
            <img src={LixeiraIcon} alt="Ícone da lixeira" />
            Remover tema
          </a>
        </div>
      </footer>
    </article>
  )
})

export default CadastradosItem

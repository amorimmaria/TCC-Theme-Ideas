import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from '../../axios-config'


// Components
import PageHeader from '../../components/PageHeader'
import Input from '../../components/UI/Input'
import Select from '../../components/UI/Select'
import Spinner from '../../components/UI/Spinner'

// Images
import warningIcon from '../../assets/images/icons/warning.svg'

// Contexts
import { useAuth } from '../../contexts/auth'

// CSS styles
import './styles.css'

// Interfaces
import { FormFields, ProfileData } from '../../interfaces/forms'
import FeedbackModal from '../../components/FeedbackModal'

const initialFields: FormFields = {

  emailContato: {
    value: '',
    validation:  /^[a-z-_\d.]{3,}@[a-z]{3,}(\.com|\.br|\.com\.br)$/,
    valid: false,
    info: 'O E-mail tem que ter o formato: exemplo@dominio.com',
    showInfo: "initial",
    touched: false
  },

  descricao: {
    value: '',
    validation: /^[\d\w\sà-ú,.!-]{30,1000}$/,
    valid: false,
    info: 'A descricao precisa conter de 50 a 300 caracteres.',
    showInfo: "initial",
    touched: false
  },

  sugestaoDeTema: {
    value: '',
    validation:  /^[\d\w\sà-ú,.!-]{10,300}$/,
    valid: false,
    info: 'O tema tem quer ter mais de 10 caracteres',
    showInfo: "initial",
    touched: false
  },

  linksArtigos: {
    value: '',
    validation:  /^[\d\w\sà-ú0-9,/:.!-]{10,1000}$/,
    valid: false,
    info: 'O link tem que ser válido',
    showInfo: "initial",
    touched: false
  }
}

function SuggestTheme() {

  const [fields, setFields] = useState<FormFields>(initialFields)
  const [formValid, setFormValid] = useState(false)
  const [loading, setLoading] = useState(false)

  const [tipoDeUsuario, setTipoDeUsuario] = useState<string>('')
  const [curso, setCurso]= useState('');
  const [area, setArea]= useState('');

  const [hasClass, setHasClass] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const history = useHistory()
  const authContext = useAuth()

  useEffect(() => {
    axios.get("/get-profile", {
      headers: {
        authorization: "Bearer " + authContext.token,
        userid: authContext.user?.__id
      }
    })
    .then(response => {
    const userData: ProfileData = response.data
      if (userData.curso) {
        setHasClass(true)
        setShowModal(true)
        return
      }

      setFields({
        ...fields,
        emailContato: {
          ...fields.emailContato,
          value: userData.emailContato
        },
        sugestaoDeTema: {
          ...fields.sugestaoDeTema,
          value: userData.sugestaoDeTema
        },
        descricao: {
          ...fields.descricao,
          value: userData.descricao
        },
        linksArtigos: {
          ...fields.linksArtigos,
          value: userData.linksArtigos
        }
      })

    }).catch(err => console.log(err))
  }, []) // eslint-disable-line

  function registerClass(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    axios.post('/themes', {
      emailContato: fields.emailContato.value,
      descricao: fields.descricao.value,
      sugestaoDeTema: fields.sugestaoDeTema.value,
      linksArtigos: fields.linksArtigos.value,
      curso,
      area,
      tipoDeUsuario,
    }, {
      headers: {
        authorization: "Bearer " + authContext.token,
        userid: authContext.user?.__id
      }
    })
    .then(() => {
      setLoading(false)
      setShowModal(true)
    })
    .catch(() => {
      setLoading(false)
      alert('Erro ao realizar cadastro. Por favor tente novamente mais tarde.')
    })
  }

  const errorModal = (
    <FeedbackModal
      status="error"
      message="Você já cadastrou um tema!"
      onCloseModal={() => history.replace("/menu")}
    />
  )

  const successModal = (
    <FeedbackModal
      status="success"
      message="Tema cadastrado com sucesso!
      Você pode editar informações sobre o tema no seu perfil."
      onCloseModal={() => history.replace("/menu")}
    />
  )

  const mainContent = (
    <div id="page-theme-form" className="container">
      <PageHeader
        title="Que incrível que você quer sugerir um tema."
      />

      <main>
        <form onSubmit={e => registerClass(e)}>
          <fieldset>
            <legend>Seus dados</legend>
              <Input
                value={fields.emailContato.value}
                inputId="emailContato"
                inputLabel="E-mail para contato"
                placeholder= "E-mail"
                inputType="input"
                inputContentType="text"
                fields={fields}
                setFields={setFields}
                formValid={formValid}
                setFormValid={setFormValid}
                hasInfo
              />

              <Select
                selectLabel="Docente ou discente?"
                selected={{ value: "Escolha uma opção", label: "Escolha uma opção" }}
                items={[
                  {value: 'Docente', label: 'Docente'},
                  {value: 'Discente', label: 'Discente'}
                ]}
                onOptionSelect={selected => setTipoDeUsuario(selected.value)}
              />
          </fieldset>

          <fieldset>
            <legend>Sobre sugestão do tema</legend>
              <div id="suggest-theme">
                <Select
                  selectLabel="Curso"
                  selected={{ value: "Escolha uma opção", label: "Escolha uma opção" }}
                  items={[
                    {value: 'Ciência da Computação', label: 'Ciência da Computação'},
                    {value: 'Ciências e Tecnologias', label: 'Ciências e Tecnologias'},
                    {value: 'Design', label: 'Design'},
                    {value: 'Engenharia de Computação', label: 'Engenharia de Computação'},
                    {value: 'Engenharia de Software', label: 'Engenharia de Software'},
                    {value: 'Matemática', label: 'Matemática'},
                    {value: 'Sistemas de Informação', label: 'Sistemas de Informação'},
                  ]}
                  onOptionSelect={selected => setCurso(selected.value)}
                />

                <Input
                  value={fields.sugestaoDeTema.value}
                  inputId="sugestaoDeTema"
                  inputLabel="Sugestão de tema"
                  inputType="input"
                  inputContentType="text"
                  fields={fields}
                  setFields={setFields}
                  formValid={formValid}
                  setFormValid={setFormValid}
                  hasInfo
                />

                <Input
                  value={fields.descricao.value}
                  inputId="descricao"
                  inputLabel="Descrição (max 1000 caracteres)"
                  inputType="textarea"
                  inputContentType="text"
                  fields={fields}
                  setFields={setFields}
                  formValid={formValid}
                  setFormValid={setFormValid}
                  hasInfo
                />

                <Select
                  selectLabel="Área"
                  selected={{ value: "Escolha uma opção", label: "Escolha uma opção" }}
                  items={[
                    {value: 'IoT', label: 'IoT'},
                    {value: 'Segurança', label: 'Segurança'},
                    {value: 'Banco de Dados', label: 'Banco de Dados'},
                    {value: 'Desenvolvimento', label: 'Desenvolvimento'},
                    {value: 'Engenharia de Software', label: 'Engenharia de Software'},
                    {value: 'Inteligencia Artificial', label: 'Inteligencia Artificial'},
                    {value: 'Ciencia de Dados', label: 'Ciencia de Dados'},
                  ]}
                  onOptionSelect={selected => setArea(selected.value)}
                />

                <Input
                  value={fields.linksArtigos.value}
                  inputId="linksArtigos"
                  inputLabel="Links de Artigos"
                  inputType="textarea"
                  inputContentType="text"
                  fields={fields}
                  setFields={setFields}
                  formValid={formValid}
                  setFormValid={setFormValid}
                  hasInfo
                />
              </div>
          </fieldset>
          <footer>
            <p>
              <img src={warningIcon} alt="Aviso importante" />
              <span>
                Importante! <br />
                Preencha todos os dados
              </span>
            </p>

            <button type="submit" disabled={!formValid || loading}>
              {loading ? <div className="spinner-resizer"><Spinner /></div> : "Salvar sugestão"}
            </button>
          </footer>
        </form>
      </main>
    </div>
  )

  return (
    <>
      {
        hasClass
          ? showModal && errorModal
          : showModal
            ? successModal
            : mainContent
      }
    </>
  )
}

export default SuggestTheme

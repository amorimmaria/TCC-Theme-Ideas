import React, { useState, useEffect } from 'react'
import axios from '../../axios-config'
import { useHistory } from 'react-router-dom'


// Components
import PageHeader from '../../components/PageHeader'
import Input from '../../components/UI/Input'
import Select from '../../components/UI/Select'
import Spinner from '../../components/UI/Spinner'
import FeedbackModal from '../../components/FeedbackModal'

// hooks
import { useAuth } from '../../hooks/auth'

// Interfaces
import { FormFields } from '../../interfaces/forms'

// CSS styles
import './styles.css'
import { useLocation } from 'react-router-dom'


const initialFields: FormFields = {

  descricao: {
    value: '',
    validation: /^[Á-Ź\d\w\sà-ú,;:/.!-]{30,1000}$/,
    valid: false,
    info: 'A descricao precisa conter de 30 a 1000 caracteres.',
    showInfo: "initial",
    touched: false
},
  sugestaoDeTema: {
    value: '',
    validation:  /^[Á-Ź\d\w\sà-ú,;:/.!-]{10,300}$/,
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


function EditarThemes() {

  const history = useHistory()
  const location = useLocation();

  const authContext = useAuth()
  const [modalType, setModalType] = useState('')
  const [fields, setFields] = useState(initialFields)
  const [formValid, setFormValid] = useState(false)

  const [curso, setCurso]= useState('');
  const [area, setArea]= useState('');

  const [loading, setLoading] = useState(false)
  const [pageReady, setPageReady] = useState(false)
  const [showModal, setShowModal] = useState(true)
  const [status, setStatus] = useState('')

  useEffect(() => {
    (function fetchProfileData() {
      setLoading(true)
      axios.get("/get-theme", {
        headers: {
          authorization: "Bearer " + authContext.token,
          idtheme: location.state
        }
      })
          .then(response => {
            setLoading(false)
            const profileData = response.data[0]

            setFields({

              ...fields,
              descricao: {
                ...fields.descricao,
                value: profileData.descricao ? String(profileData.descricao) : '',
                validation: !profileData.curso
                  ? /^[Á-Ź\d\w\sà-ú,;:/.!-]{30,1000}$/
                  : fields.descricao.validation

              },
              sugestaoDeTema: {
                ...fields.sugestaoDeTema,
                value: profileData.sugestaoDeTema ? String(profileData.sugestaoDeTema) : '',
                validation: !profileData.curso
                  ? /^[Á-Ź\d\w\sà-ú,;:/.!-]{10,300}$/
                  : fields.sugestaoDeTema.validation
              },
              linksArtigos: {
                ...fields.linksArtigos,
                value: profileData.linksArtigos ? String(profileData.linksArtigos) : '',
                validation: !profileData.curso
                  ? /^[\d\w\sà-ú0-9,/:.!-]{10,1000}$/
                  : fields.linksArtigos.validation

              }
            })

            if (profileData.curso)
              setCurso(profileData.curso)

            if (profileData.area)
              setArea(profileData.area)

            setPageReady(true)

        })
        .catch(err => {
          setLoading(false)
          console.log(err)
        })
    })()
  }, []) // eslint-disable-line


  function updateFormStatus() {
    if (pageReady) {
      const fieldsNames = Object.keys(fields)
      let isFormValid = true
      fieldsNames.forEach(fieldName => {
        if (isFormValid)
          isFormValid = fields[fieldName].validation.test(fields[fieldName].value)
      })
      setFormValid(isFormValid)
    }
  }

  function updateProfile(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setModalType("update-profile")

    const parsedDescricao = fields.descricao.value
    const parsedSugestaoDeTema = fields.sugestaoDeTema.value
    const parsedLinksArtigos = fields.linksArtigos.value

    const themeData = {
      descricao: parsedDescricao,
      sugestaoDeTema: parsedSugestaoDeTema,
      linksArtigos: parsedLinksArtigos,
      curso,
      area,
    }

    axios.put("/update-themeCadastrados", themeData, {
      headers: {
        authorization: "Bearer " + authContext.token,
        userid: authContext.user?.__id,
        idtheme: location.state,
      }
    })
      .then(() => {
        setStatus("success")
        setShowModal(true)
        authContext.user = {
          ...authContext.user!,
        }
      })
      .catch(() => {
        setStatus("error")
        setShowModal(true)
      })
  }

  const updatedModal = (
    <FeedbackModal
      status={status as "success" | "error"}
      message="O tema foi atualizado com sucesso!"
      onCloseModal={() => {
        setShowModal(false)
        history.replace('/')
      }}
    />
)

  const updateFailureModal = (
    <FeedbackModal
      status={status as "success" | "error"}
      message="Ocorreu um erro ao atualizar o tema.
      Tente novamente mais tarde."
      onCloseModal={() => setShowModal(false)}
    />
  )

  const mainContent = (
    <div id="theme-profile">
      <PageHeader title="Meu perfil" />

      <main>
        <form onSubmit={updateProfile}>
          {
            curso && (
              <>
                <fieldset>
                  <legend>
                    Sobre sugestão de tema
                  </legend>
                  <div id="suggest-theme">
                    <Select
                        selectLabel="Curso"
                        selected={{ value: curso, label: curso }}
                        items={[
                          {value: 'Ciência da Computação', label: 'Ciência da Computação'},
                          {value: 'Ciências e Tecnologias', label: 'Ciências e Tecnologias'},
                          {value: 'Design', label: 'Design'},
                          {value: 'Engenharia de Computação', label: 'Engenharia de Computação'},
                          {value: 'Engenharia de Software', label: 'Engenharia de Software'},
                          {value: 'Matemática', label: 'Matemática'},
                          {value: 'Sistemas de Informação', label: 'Sistemas de Informação'},
                        ]}
                        onOptionSelect={selected => {
                          setCurso(selected.value)
                          updateFormStatus()
                        }}
                    />
                    <Input
                      value={fields.sugestaoDeTema.value}
                      inputId="sugestaoDeTema"
                      inputLabel="Sugestão de tema"
                      inputType="textarea"
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
                      inputLabel="Descrição (max 300 caracteres)"
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
                        selected={{ value: area, label: area }}
                        items={[
                          {value: 'IoT', label: 'IoT'},
                          {value: 'Segurança', label: 'Segurança'},
                          {value: 'Banco de Dados', label: 'Banco de Dados'},
                          {value: 'Desenvolvimento', label: 'Desenvolvimento'},
                          {value: 'Engenharia de Software', label: 'Engenharia de Software'},
                          {value: 'Inteligencia Artificial', label: 'Inteligencia Artificial'},
                          {value: 'Ciencia de Dados', label: 'Ciencia de Dados'},
                        ]}
                        onOptionSelect={selected => {
                          setArea(selected.value)
                          updateFormStatus()
                        }}
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
              </>
            )
          }

          <footer>
            <button type="submit" disabled={!formValid || loading}>
              {
                loading
                  ? <div className="spinner-resizer"><Spinner /></div>
                  : "Salvar modificações"
              }
            </button>
          </footer>
        </form>
      </main>
    </div>
  )

  return (
    <>
      {
        modalType === "update-profile"
        && (
          showModal && (
            status === "success"
            ? updatedModal
            : status === "error"
            && updateFailureModal
          )
        )
      }
    { mainContent }
    </>
  )
}

export default EditarThemes

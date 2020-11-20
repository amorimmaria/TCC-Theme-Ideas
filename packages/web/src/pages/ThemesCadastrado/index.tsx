import React, { useState, useEffect } from 'react'
import axios from '../../axios-config'

// Utils
import { formatFetchedPhone } from '../../utils/format'


// Images
import noAvatarImg from '../../assets/images/sem-avatar.svg'

// Components
import PageHeader from '../../components/PageHeader'
import Input from '../../components/UI/Input'
import Select from '../../components/UI/Select'
import Spinner from '../../components/UI/Spinner'
import FeedbackModal from '../../components/FeedbackModal'

// Contexts
import { useAuth } from '../../contexts/auth'

// Interfaces
import { FormFields } from '../../interfaces/forms'

// CSS styles
import './styles.css'


const initialFields: FormFields = {
  whatsapp: {
    value: '',
    validation: /^\([0-9]{2}\)\s9?[0-9]{4}-[0-9]{4}$/,
    valid: false,
    info: 'O número de telefone deve estar no formato adequado. Ex.: (92) 8121-0742',
    showInfo: "initial",
    touched: false
  },
  emailContato: {
    value: '',
    validation: /^[a-z-_\d.]{3,}@[a-z]{3,}(\.com|\.br|\.com\.br)$/i,
    valid: false,
    info: 'O email precisa estar no formato adequado: exemplo@dominio.com',
    showInfo: "initial",
    touched: false
  },
  descricao: {
    value: '',
    validation: /^[\d\w\sà-ú,.!-]{30,1000}$/,
    valid: false,
    info: 'A descricao precisa conter de 30 a 1000 caracteres.',
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

function Profile() {

  const authContext = useAuth()
  const [modalType, setModalType] = useState("update-profile")
  const [fields, setFields] = useState(initialFields)
  const [formValid, setFormValid] = useState(false)
  const [avatar, setAvatar] = useState<string>('')
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const [tipoDeUsuario] = useState('')
  const [curso, setCurso]= useState('');
  const [area, setArea]= useState('');

  const [loading, setLoading] = useState(false)
  const [pageReady, setPageReady] = useState(false)
  const [showModal, setShowModal] = useState(true)
  const [status, setStatus] = useState("none")

  useEffect(() => {
    (function fetchProfileData() {
      setLoading(true)
      axios.get("/get-profile", {
        headers: {
          authorization: "Bearer " + authContext.token,
          userid: authContext.user?.__id
        }
      })

          .then(response => {
            setLoading(false)
            const profileData = response.data
            let whatsapp = ''

            if (profileData.whatsapp)
              whatsapp = formatFetchedPhone(profileData.whatsapp)

            setFields({

              ...fields,
              whatsapp: {
                ...fields.whatsapp,
                value: whatsapp,
                validation: !profileData.curso
                  ? /^([@]?|\([0-9]{2}\)\s9{0,1}[0-9]{4}-[0-9]{4})$/
                  : fields.whatsapp.validation
              },
              emailContato: {
                ...fields.emailContato,
                value: profileData.emailContato ? String(profileData.emailContato) : '',
                validation: !profileData.curso
                  ? /^[a-z-_\d.]{3,}@[a-z]{3,}(\.com|\.br|\.com\.br)$/i
                  : fields.emailContato.validation
              },

              descricao: {
                ...fields.descricao,
                value: profileData.descricao ? String(profileData.descricao) : '',
                validation: !profileData.curso
                  ? /^[\d\w\sà-ú,.!-]{30,1000}$/
                  : fields.descricao.validation

              },
              sugestaoDeTema: {
                ...fields.sugestaoDeTema,
                value: profileData.sugestaoDeTema ? String(profileData.sugestaoDeTema) : '',
                validation: !profileData.curso
                  ? /^[\d\w\sà-ú,.!-]{10,300}$/
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

            if (profileData.avatar) setAvatar(profileData.avatar)
            else setAvatar(noAvatarImg)

            setName(profileData.name)
            setEmail(profileData.email)



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

    const parsedWhatsapp = fields.whatsapp.value.replace(/[)(\s-]/g, "")
    const parsedDescricao = fields.descricao.value
    const parsedSugestaoDeTema = fields.sugestaoDeTema.value
    const parsedLinksArtigos = fields.linksArtigos.value
    const parsedEmailContato = fields.emailContato.value

    const userData = {
      avatar,
      emailContato: parsedEmailContato,
      descricao: parsedDescricao,
      sugestaoDeTema: parsedSugestaoDeTema,
      linksArtigos: parsedLinksArtigos,
      curso,
      area,
      tipoDeUsuario,
      whatsapp: parsedWhatsapp
    }

    axios.put("/update-profile", userData, {
      headers: {
        authorization: "Bearer " + authContext.token,
        userid: authContext.user?.__id
      }
    })
      .then(() => {
        setStatus("success")
        setShowModal(true)
        authContext.user = {
          ...authContext.user!,
          avatar,
          whatsapp: fields.whatsapp.value,
        }
      })
      .catch(() => {
        setStatus("error")
        setShowModal(true)
      })
  }

  function removeTheme() {
    setLoading(true)
    setModalType("remove-theme")
    axios.delete("/remove-theme", {
      headers: {
        authorization: "Bearer " + authContext.token,
        userid: authContext.user?.__id
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

  const updatedModal = (
    <FeedbackModal
      status={status as "success" | "error"}
      message="O perfil foi atualizado com sucesso!"
      onCloseModal={() => setShowModal(false)}
    />
)

  const updateFailureModal = (
    <FeedbackModal
      status={status as "success" | "error"}
      message="Ocorreu um erro ao atualizar o perfil.
      Tente novamente mais tarde."
      onCloseModal={() => setShowModal(false)}
    />
  )

  const removedClassModal = (
    <FeedbackModal
      status={status as "success" | "error"}
      message="Tema removido com sucesso!"
      onCloseModal={() => {
        setShowModal(false)
        setCurso("")
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
                      <button
                        type="button"
                        onClick={removeTheme}
                      >Remover tema</button>
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
        ? (
          showModal && (
            status === "success"
              ? updatedModal :
              status === "error"
              && updateFailureModal
          )
        )
        : (
          modalType === "remove-theme"
          && (
              showModal && (
                status === "success"
                  ? removedClassModal :
                  status === "error"
                  && removeThemeFailureModal
            )
          )
        )
      }
      { mainContent }
    </>
  )
}

export default Profile

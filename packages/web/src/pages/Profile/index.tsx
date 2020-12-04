import React, { useState, useEffect } from 'react'
import axios from '../../axios-config'
import { Link } from 'react-router-dom'

// Icons
import { Icon } from '@iconify/react'
import cameraIcon from '@iconify/icons-mdi/camera'

// Images
import noAvatarImg from '../../assets/images/sem-avatar.svg'
import cp from '../../assets/images/icons/cp.png'

// Components
import PageHeader from '../../components/PageHeader'
import Input from '../../components/UI/Input'
import Spinner from '../../components/UI/Spinner'
import FeedbackModal from '../../components/FeedbackModal'

// hooks
import { useAuth } from '../../hooks/auth'

// Interfaces
import { FormFields } from '../../interfaces/forms'

// CSS styles
import './styles.css'


const initialFields: FormFields = {

  emailContato: {
    value: '',
    validation:  /^[a-z-_\d.]{3,}@[a-z]{3,}(\.com|\.br|\.com\.br)$/,
    valid: false,
    info: 'O E-mail tem que ser no formato: exemplo@dominio.com',
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
    // const [emailContato, setEmailContato] = useState("")

    const [tipoDeUsuario, setTipoDeUsuario] = useState('')
    // const [curso, setCurso]= useState('');

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
                    // let emailContato = ''

                    // if (profileData.emailContato)
                    //     emailContato = (profileData.emailContato)

                    setFields({

                        ...fields,
                        emailContato: {
                            ...fields.emailContato,
                            value: profileData.emailContato ? String(profileData.emailContato) : '',
                            validation: !profileData.curso
                                ? /^[a-z-_\d.]{3,}@[a-z]{3,}(\.com|\.br|\.com\.br)$/
                                : fields.emailContato.validation

                        }
                    })

                    if (profileData.avatar) setAvatar(profileData.avatar)
                    else setAvatar(noAvatarImg)

                    setName(profileData.name)
                    setEmail(profileData.email)

                    // if(profileData.emailContato)
                    //   setEmailContato(profileData.emailContato)

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

    function uploadAvatar() {
        const fileInput = document.getElementById('upload-avatar')! as HTMLInputElement
        fileInput.click()
        fileInput.onchange = () => {
            const file = fileInput.files![0]
            if (!file.type.match(/^image\/(png|jpeg|jpg)$/))
                return alert("Apenas arquivos de imagens são aceitos!")

            const fr = new FileReader()
            fr.onloadend = (e) => {
                setAvatar(e.target?.result as string)
                updateFormStatus()
            }
            fr.readAsDataURL(file)
        }
    }

    function updateProfile(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault()
      setModalType("update-profile")

      const parsedemailContato = fields.emailContato.value

      const userData = {
        avatar,
        emailContato: parsedemailContato,
        tipoDeUsuario,
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
            emailContato: fields.emailContato.value,
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
        // setCurso("")
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
          <div id="profile-avatar">
            <div id="profile-avatar-image">
              <img src={avatar} alt="Profile" />
              <div onClick={uploadAvatar}>
                <Icon icon={cameraIcon} />
              </div>
              <input
                id="upload-avatar"
                type="file"
                accept="image/png, image/jpeg, image/svg"
                style={{ display: 'none' }}
              />
            </div>
            <div id="profile-avatar-description">
              <p>{name}</p>
              <p>{tipoDeUsuario ? setTipoDeUsuario : "Discente"}</p>
            </div>
          </div>
          <fieldset>
            <legend>Seus dados</legend>
            <Input
              value={name}
              inputId="name"
              inputLabel="Nome"
              inputType="input"
              inputContentType="text"
              disabled
            />
            <Input
              value={email}
              inputId="email"
              inputLabel="Email"
              inputType="input"
              inputContentType="email"
              disabled
            />

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


          </fieldset>
            {
              <div id="buttons-container">
              <Link to="/cadastrado" className="cadastrado">
                  <img src={cp} alt="Temas cadastrado" />
                  Meus temas cadastrados
              </Link>
          </div>
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

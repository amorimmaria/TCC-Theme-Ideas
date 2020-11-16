import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

// Icons
import { Icon } from '@iconify/react'
import infoIcon from '@iconify/icons-mdi/information-outline'

// Components
import InputInfo from '../../../components/InputInfo'

// Images
import goBackImg from '../../../assets/images/icons/back.svg'


// Contexts
import { useAuth } from '../../../contexts/auth'
import { useProcessFinished } from '../../../contexts/process-finished'

// CSS styles
import './styles.css'

// Interfaces
import { FormFields } from '../../../interfaces/forms'

const initialFields = {
  email: {
    value: '',
    validation: /^[a-z-_\d.]{3,}@[a-z]{3,}(\.com|\.br|\.com\.br)$/i,
    valid: false,
    info: 'O email precisa estar no formato adequado: exemplo@dominio.com',
    showInfo: "initial",
    touched: false
  }
}

function ResetPasswordRequest() {

  const history = useHistory()
  const [fields, setFields] = useState<FormFields>(initialFields as FormFields)
  const [formValid, setFormValid] = useState(false)
  const [feedback, setFeedback] = useState('')
  const authContext = useAuth()
  const processFinishedContext = useProcessFinished()

  async function sendPasswordResetEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if(feedback) setFeedback('')

    const response = await authContext.requestPasswordResetEmail(fields.email.value)
    if (typeof response === 'string') setFeedback(response)
    else {
      processFinishedContext.defineTitle('Redefinição enviada!')
      processFinishedContext.defineDescription('Boa, agora é só checar o e-mail que foi enviado para você redefinir sua senha e aproveitar.')
      history.replace('/auth/recuperar-senha/sucesso')
    }
  }

  function onInputValueChange(e: React.ChangeEvent<HTMLInputElement>) {
    const inputIdentifier = e.target.id
    const newInputValue = e.target.value

    const isInputValid = fields[inputIdentifier].validation.test(newInputValue)

    const isFormValid = isInputValid

    if (isFormValid !== formValid)
      setFormValid(isFormValid)

    if(feedback) setFeedback('')

    setFields({
      email: {
        ...fields.email,
        value: newInputValue,
        touched: true,
        valid: isInputValid
      }
    })
  }

  function onInfoHover() {
    setFields({
      email: {
        ...fields.email,
        showInfo: "show"
      }
    })
  }

  function onInfoLeave() {
    setFields({
      email: {
        ...fields.email,
        showInfo: "hide"
      }
    })
  }

  function setInputThemes() {
    return ["input-group", !fields.email.valid && fields.email.touched ? 'invalid' : ''].join(' ')
  }

  return (
    <div id="page-register-password-reset-request">
      <img
        onClick={() => history.replace('/auth/login')}
        src={goBackImg}
        alt="Go back arrow-left"
      />
      <h2>Eita, esqueceu sua senha?</h2>
      <p>Não esquenta, vamos dar um jeito nisso.</p>
      <form onSubmit={sendPasswordResetEmail}>
        <div className={setInputThemes()}>
          <input
            value={fields.email.value}
            onChange={onInputValueChange}
            type="email"
            id="email"
            placeholder="E-mail"
          />
          <div
            onMouseEnter={() => onInfoHover()}
            onMouseLeave={() => onInfoLeave()}
          ><Icon icon={infoIcon} /></div>
          <InputInfo show={fields.email.showInfo} info={fields.email.info} />
        </div>
        {feedback && <p id="password-reset-request-feedback">{feedback}</p>}
        <button
          type="submit"
          disabled={!formValid || authContext.loading}
        >Enviar</button>
      </form>
    </div>
  )
}

export default ResetPasswordRequest

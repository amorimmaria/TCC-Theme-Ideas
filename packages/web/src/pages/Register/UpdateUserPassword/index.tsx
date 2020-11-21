import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

// hooks
import { useAuth } from '../../../hooks/auth'
import { useProcessFinished } from '../../../hooks/process-finished'

// Components
import InputInfo from '../../../components/InputInfo'

// Icons
import { Icon } from '@iconify/react'
import showPasswordIcon from '@iconify/icons-mdi/eye'
import hidePasswordIcon from '@iconify/icons-mdi/eye-off'
import infoIcon from '@iconify/icons-mdi/information-outline'

// CSS styles
import './styles.css'

// Interfaces
import { FormFields } from '../../../interfaces/forms'

const initialFields = {
  newPassword: {
    value: '',
    validation: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,30}$/,
    valid: false,
    info: 'A senha precisa conter entre 8 a 30 caracteres',
    showInfo: "initial",
    touched: false
  },
  repeatPassword: {
    value: '',
    validation: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,30}$/,
    valid: false,
    info: '',
    showInfo: "initial",
    touched: false
  }
}

function UpdateUserPassword() {

  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showRepeatPassword, setShowRepeatPassword] = useState(false)
  const [fields, setFields] = useState<FormFields>(initialFields as FormFields)
  const [formValid, setFormValid] = useState(false)
  const [feedback, setFeedback] = useState('')
  const authContext = useAuth()
  const processFinishedContext = useProcessFinished()
  const history = useHistory()

  const recoveryToken = history.location.pathname.split('/')[4]

  function onInputValueChange(e: React.ChangeEvent<HTMLInputElement>) {
    const inputIdentifier = e.target.id
    const newInputValue = e.target.value

    const allFields = Object.keys(fields)

    let isFormValid = true
    const isInputValid = fields[inputIdentifier].validation.test(newInputValue)

    if (isInputValid) {
      allFields.forEach(field => {
        if (isFormValid)
          if (field !== inputIdentifier)
            isFormValid = fields[field].validation.test(fields[field].value)
      })
    } else isFormValid = false

    if (isFormValid) {
      const validation = new RegExp(`^${inputIdentifier === 'newPassword' ? newInputValue : fields.newPassword.value}$`)

      isFormValid = validation.test(inputIdentifier === 'repeatPassword' ? newInputValue : fields.repeatPassword.value)

      if (!isFormValid) setFeedback('As senhas são diferentes.')
      else setFeedback('')
    }

    if (isFormValid !== formValid)
      setFormValid(isFormValid)

    setFields({
      ...fields,
      [inputIdentifier]: {
        ...fields[inputIdentifier],
        value: newInputValue,
        touched: true,
        valid: isInputValid
      }
    })
  }

  async function updateUserPassword() {
    if (feedback) setFeedback('')
    const updatePasswordData = {
      token: recoveryToken,
      new_password: fields.newPassword.value
    }
    const response = await authContext.updateUserPassword(updatePasswordData)
    if (typeof response === 'string') setFeedback(response)
    else {
      processFinishedContext.defineTitle('Senha redefinida com sucesso!')
      processFinishedContext.defineDescription('Agora você já pode logar no TCC Theme Ideas e aproveitar.')
      history.replace('/auth/recuperar-senha/sucesso')
    }
  }

  function onInfoHover() {
    setFields({
      ...fields,
      newPassword: {
        ...fields.newPassword,
        showInfo: "show"
      }
    })
  }

  function onInfoLeave() {
    setFields({
      ...fields,
      newPassword: {
        ...fields.newPassword,
        showInfo: "hide"
      }
    })
  }

  function setInputThemes(inputIdentifier: string) {
    return ["input-group", !fields[inputIdentifier].valid && fields[inputIdentifier].touched ? 'invalid' : ''].join(' ')
  }

  return (
    <div id="page-register-update-user-password">
      <h2>Redefinir senha</h2>
      <p>Preencha o formulário abaixo para redefinir sua senha.</p>
      <form>
        <div className={setInputThemes('newPassword')}>
          <input
            value={fields.newPassword.value}
            onChange={onInputValueChange}
            maxLength={30}
            type={showNewPassword ? "text" : "password"}
            id="newPassword"
            placeholder="Nova senha"
          />
          <div className="icon-group">
            <div
              style={{ cursor: 'pointer' }}
              onClick={() => setShowNewPassword(!showNewPassword)}
            >
              <Icon
                color={showNewPassword ? '#33AAC2' : '#8ad2e0'}
                icon={showNewPassword ? hidePasswordIcon : showPasswordIcon}
              />
            </div>
            <div
              onMouseEnter={() => onInfoHover()}
              onMouseLeave={() => onInfoLeave()}
            ><Icon icon={infoIcon} /></div>
          </div>
          <InputInfo show={fields.newPassword.showInfo} info={fields.newPassword.info} />
        </div>

        <div className={setInputThemes('repeatPassword')}>
          <input
            value={fields.repeatPassword.value}
            onChange={onInputValueChange}
            maxLength={30}
            type={showRepeatPassword ? "text" : "password"}
            id="repeatPassword"
            placeholder="Repetir nova senha"
          />
          <div className="icon-group">
            <div
              style={{ cursor: 'pointer' }}
              onClick={() => setShowRepeatPassword(!showRepeatPassword)}
            >
              <Icon
                color={showRepeatPassword ? '#33AAC2' : '#6A6180'}
                icon={showRepeatPassword ? hidePasswordIcon : showPasswordIcon}
              />
            </div>
          </div>
        </div>

        {feedback && <p id="update-user-password-feedback">{feedback}</p>}
        <button
          disabled={!formValid || authContext.loading}
          onClick={updateUserPassword}
        >Redefinir senha</button>
      </form>
    </div>
  )
}

export default UpdateUserPassword

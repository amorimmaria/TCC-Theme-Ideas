import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

// Icons
import { Icon } from '@iconify/react'
import showPasswordIcon from '@iconify/icons-mdi/eye'
import hidePasswordIcon from '@iconify/icons-mdi/eye-off'
import infoIcon from '@iconify/icons-mdi/information-outline'

// Components
import InputInfo from 'components/InputInfo'

// Images
import goBackImg from 'assets/images/icons/back.svg'

// Contexts
import { useAuth } from 'contexts/auth'
import { useProcessFinished } from 'contexts/process-finished'

// CSS styles
import './styles.css'

// Interfaces
import { FormFields } from 'interfaces/forms'

const initialFields = {
    name: {
        value: '',
        validation: /^[a-zà-ú]{3,20}$/i,
        valid: false,
        info: 'O nome precisa ter entre 3 a 20 caracteres.',
        showInfo: "initial",
        touched: false
    },
    surname: {
        value: '',
        validation: /^[a-zà-ú]{5,30}$/i,
        valid: false,
        info: 'O sobrenome precisa ter entre 5 a 30 caracteres',
        showInfo: "initial",
        touched: false
    },
    email: {
        value: '',
        validation: /^[a-z-_\d.]{3,}@[a-z]{3,}(\.com|\.br|\.com\.br)$/i,
        valid: false,
        info: 'O email precisa estar no formato adequado: exemplo@dominio.com',
        showInfo: "initial",
        touched: false
    },
    password: {
        value: '',
        validation: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,30}$/,
        valid: false,
        info: 'A senha precisa conter entre 8 a 30 caracteres e conter 1 ou mais letras maiúsculas e números.',
        showInfo: "initial",
        touched: false
    }
}

function Signup() {

    const history = useHistory()
    const [showPassword, setShowPassword] = useState(false)
    const [fields, setFields] = useState<FormFields>(initialFields as FormFields)
    const [formValid, setFormValid] = useState(false)
    const [feedback, setFeedback] = useState('')
    const authContext = useAuth()
    const processFinishedContext = useProcessFinished()

    async function signupUser(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        if(feedback) setFeedback('')

        const userData = {
            name: fields.name.value,
            surname: fields.surname.value,
            email: fields.email.value,
            password: fields.password.value
        }

        const response = await authContext.signUp(userData)
        if (typeof response === 'string') setFeedback(response)
        else { 
            processFinishedContext.defineTitle('Cadastro concluído')
            processFinishedContext.defineDescription('Agora você faz parte da plataforma da TCC Theme Ideas. Tenha uma ótima experiência.')
            history.replace('/auth/cadastro/sucesso') 
        }
    }

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

        if (isFormValid !== formValid)
            setFormValid(isFormValid)

        if(feedback) setFeedback('')

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

    function onInfoHover(inputIdentifier: string) {
        setFields({
            ...fields,
            [inputIdentifier]: {
                ...fields[inputIdentifier],
                showInfo: "show"
            }
        })
    }

    function onInfoLeave(inputIdentifier: string) {
        setFields({
            ...fields,
            [inputIdentifier]: {
                ...fields[inputIdentifier],
                showInfo: "hide"
            }
        })
    }

    function setInputThemes(inputIdentifier: string) {
        return ["input-group", !fields[inputIdentifier].valid && fields[inputIdentifier].touched ? 'invalid' : ''].join(' ')
    }

    return (
        <div id="page-register-signup">
            <img
                onClick={() => history.replace('/auth/login')}
                src={goBackImg}
                alt="Go back arrow-left"
            />
            <h2>Cadastro</h2>
            <p>Preencha os dados abaixo para começar.</p>
            <form onSubmit={signupUser}>
                <div className={setInputThemes('name')}>
                    <input
                        value={fields.name.value}
                        onChange={onInputValueChange}
                        type="text"
                        id="name"
                        placeholder="Nome"
                    />
                    <div
                        onMouseEnter={() => onInfoHover('name')}
                        onMouseLeave={() => onInfoLeave('name')}
                    ><Icon icon={infoIcon} /></div>
                    <InputInfo show={fields.name.showInfo} info={fields.name.info} />
                </div>
                <div className={setInputThemes('surname')}>
                    <input
                        value={fields.surname.value}
                        onChange={onInputValueChange}
                        type="text"
                        id="surname"
                        placeholder="Sobrenome"
                    />
                    <div
                        onMouseEnter={() => onInfoHover('surname')}
                        onMouseLeave={() => onInfoLeave('surname')}
                    ><Icon icon={infoIcon} /></div>
                    <InputInfo show={fields.surname.showInfo} info={fields.surname.info} />
                </div>

                <div className={setInputThemes('email')}>
                    <input
                        value={fields.email.value}
                        onChange={onInputValueChange}
                        type="email"
                        id="email"
                        placeholder="E-mail"
                    />
                    <div
                        onMouseEnter={() => onInfoHover('email')}
                        onMouseLeave={() => onInfoLeave('email')}
                    ><Icon icon={infoIcon} /></div>
                    <InputInfo show={fields.email.showInfo} info={fields.email.info} />
                </div>

                <div className={setInputThemes('password')}>
                    <input
                        value={fields.password.value}
                        onChange={onInputValueChange}
                        maxLength={30}
                        type={showPassword ? "text" : "password"}
                        id="password"
                        placeholder="Senha"
                    />
                    <div className="icon-group">
                        <div
                            style={{ cursor: 'pointer' }}
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            <Icon
                                color={showPassword ? '#33AAC2' : '#33AAC2'}
                                icon={showPassword ? hidePasswordIcon : showPasswordIcon}
                            />
                        </div>
                        <div
                            onMouseEnter={() => onInfoHover('password')}
                            onMouseLeave={() => onInfoLeave('password')}
                        ><Icon icon={infoIcon} /></div>
                    </div>
                    <InputInfo show={fields.password.showInfo} info={fields.password.info} />
                </div>
                {feedback && <p id="signup-feedback">{feedback}</p>}
                <button
                    type="submit"
                    disabled={!formValid || authContext.loading}
                >Concluir cadastro</button>
            </form>
        </div>
    )
}

export default Signup
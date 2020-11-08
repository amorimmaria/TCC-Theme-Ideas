import React, { InputHTMLAttributes, useState } from 'react'

// Utils
import { formatCurrentPhone } from '../../../utils/format'

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

type InputTextarea = InputHTMLAttributes<HTMLInputElement> & InputHTMLAttributes<HTMLTextAreaElement>

interface InputProps extends InputTextarea {
    inputType: "input" | "textarea",
    inputContentType: string,
    inputLabel: string,
    inputId: string,
    fields?: FormFields,
    setFields?: (value: React.SetStateAction<FormFields>) => void,
    formValid?: boolean,
    setFormValid?: (value: React.SetStateAction<boolean>) => void,
    hasInfo?: boolean,
    feedback?: string,
    setFeedback?: (value: React.SetStateAction<string>) => void,
}

const Input: React.FC<InputProps> = ({
    inputType,
    inputContentType,
    inputLabel,
    inputId,
    fields,
    setFields,
    formValid,
    setFormValid,
    hasInfo,
    feedback,
    setFeedback,
    ...inputProps
}) => {

    const [showPassword, setShowPassword] = useState(false)

    function onInputValueChange(e: React.ChangeEvent<any>) {
        const inputIdentifier = e.target.id
        let newInputValue: string = e.target.value
        
        if (inputIdentifier === "whatsapp") 
            newInputValue = formatCurrentPhone(newInputValue)

        const allFields = Object.keys(fields!)

        let isFormValid = true
        const isInputValid = fields![inputIdentifier].validation.test(newInputValue)

        if (isInputValid) {
            allFields.forEach(field => {
                if (isFormValid)
                    if (field !== inputIdentifier)
                        isFormValid = fields![field].validation.test(fields![field].value)
            })
        } else isFormValid = false

        if (isFormValid !== formValid)
            setFormValid!(isFormValid)

        if (feedback) setFeedback!('')

        setFields!({
            ...fields,
            [inputIdentifier]: {
                ...fields![inputIdentifier],
                value: newInputValue,
                touched: true,
                valid: isInputValid
            }
        })
    }

    function onInfoHover() {
        setFields!({
            ...fields,
            [inputId]: {
                ...fields![inputId],
                showInfo: "show"
            }
        })
    }

    function onInfoLeave() {
        setFields!({
            ...fields,
            [inputId]: {
                ...fields![inputId],
                showInfo: "hide"
            }
        })
    }

    function setInputThemes() {
        return [
            "input-group",
            fields ?
                !fields[inputId].valid && fields[inputId].touched ? 'invalid' : ''
                : ''
        ].join(' ')
    }

    return (
        <div id="input-wrapper">
            <label htmlFor={inputId}>{inputLabel}</label>
            <div className={setInputThemes()}>
                {
                    inputType === "input"
                        ? (
                            <input
                                value={fields ? fields[inputId].value : inputProps.value}
                                onChange={onInputValueChange}
                                id={inputId}
                                type={inputContentType}
                                {...inputProps}
                            />
                        ) : (
                            <textarea
                                onChange={onInputValueChange}
                                {...inputProps}
                                id={inputId}
                            />
                        )
                }
                {
                    inputContentType !== "password"
                        ? hasInfo && (
                            <div
                                onMouseEnter={onInfoHover}
                                onMouseLeave={onInfoLeave}
                            ><Icon icon={infoIcon} /></div>
                        ) : (
                            <div className="icon-group">
                                <div
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    <Icon
                                        color={showPassword ? '#33AAC2' : '#8ad2e0'}
                                        icon={showPassword ? hidePasswordIcon : showPasswordIcon}
                                    />
                                </div>
                                <div
                                    onMouseEnter={onInfoHover}
                                    onMouseLeave={onInfoLeave}
                                ><Icon icon={infoIcon} /></div>
                            </div>
                        )
                }
                {
                    hasInfo &&
                    <InputInfo
                        show={fields![inputId].showInfo}
                        info={fields![inputId].info}
                    />
                }
            </div>
        </div>
    )
}

export default Input
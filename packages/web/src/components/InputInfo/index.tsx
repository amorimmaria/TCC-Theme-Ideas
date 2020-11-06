import React from 'react'

// CSS styles
import './styles.css'

interface InputInfoProps {
    info: string,
    show: "initial" | "show" | "hide" 
}

const InputInfo: React.FC<InputInfoProps> = ({ info, show }) => {
    return (
        <div className={["input-info", show !== "initial" ? show : ""].join(' ')}>
            <p className="input-info-text">{ info }</p>
        </div>
    )
}

export default InputInfo
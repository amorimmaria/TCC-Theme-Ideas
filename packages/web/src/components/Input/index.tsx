import React, { InputHTMLAttributes} from 'react';

import './styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>  {
  label: string;
  nome: string;

}

const Input: React.FC<InputProps> = ({ label, nome, ...rest})  => {
  return (
    <div className="input-block">
      <label htmlFor={nome}>{label}</label>
      <input type="text" id={nome} {...rest} />
    </div>
  );
}

export default Input;
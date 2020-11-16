import React, { useEffect, useState } from 'react'
import { Route, Switch, Redirect, useHistory } from 'react-router-dom'

// Images
import logo from '../../assets/images/iconLogo2.svg'

// Pages
import Login from './Login'
import Signup from './Signup'
import ProcessFinished from './ProcessFinished'
import ResetPasswordRequest from './ResetPasswordRequest'
import UpdateUserPassword from './UpdateUserPassword'

// CSS styles
import './styles.css'

function Register() {

  const history = useHistory()
  const [registerMethod, setRegisterMethod] = useState('login')

  useEffect(() => {
    switch(history.location.pathname) {
      case '/auth/':
      case '/auth/login':
        setRegisterMethod('login')
        break
      case '/auth/cadastro':
        setRegisterMethod('signup')
        break
      case '/auth/cadastro/sucesso':
      case '/auth/recuperar-senha/sucesso':
        setRegisterMethod('success')
        break
      case '/auth/recuperar-senha':
        setRegisterMethod('reset-password-request')
        break
      default:
        setRegisterMethod('login')
    }
  }, [history.location.pathname])

  return (
    <div
      id="page-register"
      className={
        ['signup', 'reset-password-request']
          .includes(registerMethod) ? 'invert' : ''
      }
    >
      {
        registerMethod !== 'success' &&

        <div id="page-register-header">
          <img src={logo} alt="TCC" />
          <h2>Sua plataforma de temas para TCC.</h2>
        </div>
      }
      <div id="page-register-content">
        <Switch>
          <Route path="/auth/login" component={Login} />
          <Route path="/auth/cadastro/sucesso" component={ProcessFinished} />
          <Route path="/auth/cadastro" component={Signup} />
          <Route exact path="/auth/recuperar-senha/usuario/:token" component={UpdateUserPassword} />
          <Route exact path="/auth/recuperar-senha/sucesso" component={ProcessFinished} />
          <Route exact path="/auth/recuperar-senha" component={ResetPasswordRequest} />
          <Redirect to="/auth/login"/>
        </Switch>
      </div>
    </div>
  )
}

export default Register

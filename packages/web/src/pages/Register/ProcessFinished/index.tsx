import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

// Images
import checkInBoxImg from '../../../assets/images/icons/success-check-icon.svg'

// hooks
import { useProcessFinished } from '../../../hooks/process-finished'

// CSS styles
import './styles.css'

function ProcessFinished() {

  const history = useHistory()
  const processFinishedContext = useProcessFinished()

  useEffect(() => {
    if(!processFinishedContext.title) history.replace('/auth/login')
  }, []) // eslint-disable-line

  return (
    <div id="process-finished">
      <img src={checkInBoxImg} alt="Success Icon" />
      <h1>{processFinishedContext.title}</h1>
      <p>{processFinishedContext.description}</p>
      <button onClick={() => history.replace('/auth/login')}>Voltar ao login</button>
    </div>
  )
}

export default ProcessFinished

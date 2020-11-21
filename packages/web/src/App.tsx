import React from 'react'

// Pages
import Routes from './routes'

import { AuthProvider } from './hooks/auth'
import { ProcessFinishedContextProvider } from './hooks/process-finished'

// CSS styles
import './assets/styles/global.css'

function App() {
  return (
    <ProcessFinishedContextProvider>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ProcessFinishedContextProvider>
  )
}

export default App

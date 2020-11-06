import React, { useState, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './app.routes'
import AuthRoutes from './auth.routes'
import { useAuth } from 'contexts/auth'

function Routes() {
    const [routes, setRoutes] = useState<JSX.Element | null>(null)
    const auth = useAuth()

    useEffect(() => {
        if(!auth.signedIn) setRoutes(AuthRoutes)
        else setRoutes(AppRoutes)
    }, [auth.signedIn])

    return <BrowserRouter>{ routes }</BrowserRouter>
}

export default Routes
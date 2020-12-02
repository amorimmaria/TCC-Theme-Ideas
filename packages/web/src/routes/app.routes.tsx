import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

// Pages
import Menu from '../pages/Menu'
import Profile from '../pages/Profile'
import SearchTheme from '../pages/SearchTheme'
import SuggestTheme from '../pages/SuggestTheme'
import ThemesCadastrado from '../pages/ThemesCadastrado'
import EditarThemes from '../pages/EditarThemes'

function AppRoutes() {
    return (
      <Switch>
        <Route path="/menu" component={Menu} />
        <Route path="/profile" component={Profile} />
        <Route path="/search" component={SearchTheme} />
        <Route path="/suggest" component={SuggestTheme} />
        <Route path="/cadastrado" component={ThemesCadastrado} />
        <Route path="/update" component={EditarThemes}/>
        <Redirect to="/menu"/>
      </Switch>
    )
}

export default AppRoutes

import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import SearchTheme from './pages/SearchTheme';
import SuggestTheme from './pages/SuggestTheme';

function Routes(){
  return(
    <BrowserRouter>
      <Route path="/" exact component={Home}/>
      <Route path="/search" component={SearchTheme}/>
      <Route path="/suggest" component={SuggestTheme}/>

    </BrowserRouter>
  )
}

export default Routes;

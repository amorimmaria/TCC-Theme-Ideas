import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import SearchTheme from './pages/SearchTheme';
import SuggestTheme from './pages/suggestTheme';

function Routes(){
  return(
    <BrowserRouter>
      <Route path="/" exact component={Landing}/>
      <Route path="/search" component={SearchTheme}/>
      <Route path="/suggest" component={SuggestTheme}/>

    </BrowserRouter>
  )
}

export default Routes;

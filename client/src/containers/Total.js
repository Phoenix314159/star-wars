import React, {Component} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import App from './App'
import TopSection from '../components/TopSection'
import ShowEdit from '../components/ShowEdit'
import ShowFavorites from '../components/ShowFavorites'

export default () => (
  <BrowserRouter>
    <div>
      <TopSection/>
      <Switch>
        <Route path="/edit" component={ShowEdit}/>
        <Route path="/favorites" component={ShowFavorites}/>
        <Route path="/" component={App}/>
      </Switch>
    </div>
  </BrowserRouter>
)

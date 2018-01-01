import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Total from '../containers/Total'
import TopSection from '../containers/TopSection'
import ShowEdit from '../containers/ShowEdit'
import ShowFavorites from '../containers/ShowFavorites'
import Main from '../containers/Main'

export default () => {
  return(
    <BrowserRouter>
      <div>
        <TopSection/>
        <Switch>
          <Route exact path="/edit" component={ShowEdit}/>
          <Route exact path="/main" component={Main}/>
          <Route exact path="/favorites" component={ShowFavorites}/>
          <Route exact path="/" component={Total}/>
        </Switch>
      </div>
    </BrowserRouter>
  )
}



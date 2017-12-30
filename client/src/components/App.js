import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Total from '../containers/Total'
import TopSection from '../containers/TopSection'
import ShowEdit from '../containers/ShowEdit'
import ShowFavorites from '../containers/ShowFavorites'
import Main from '../containers/Main'
import NoResults from './NoResults'

export default () => {
  return(
    <BrowserRouter>
      <div>
        <TopSection/>
        <Switch>
          <Route path="/no_results" component={NoResults}/>
          <Route path="/edit" component={ShowEdit}/>
          <Route path="/main" component={Main}/>
          <Route path="/favorites" component={ShowFavorites}/>
          <Route path="/home" component={Total}/>
          <Route path="/" component={Total}/>
        </Switch>
      </div>
    </BrowserRouter>
  )
}



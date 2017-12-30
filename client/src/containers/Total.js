import React, {Component} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getPeopleData, getPlanetData } from '../actions/index'
import App from './App'
import TopSection from '../components/TopSection'
import ShowEdit from '../components/ShowEdit'
import ShowFavorites from '../components/ShowFavorites'

class Total extends Component{

  async componentDidMount () {
    this.props.getPeopleData('/api/get_people_data')
    this.props.getPlanetData('/api/get_planet_data')
  }

  render() {
    return(
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
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({getPeopleData, getPlanetData}, dispatch)
}

export default connect(null, mapDispatchToProps)(Total)

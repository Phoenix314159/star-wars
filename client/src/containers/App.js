import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/index'
import '../styles/App.scss'
import Row from './Row'

class App extends Component {

  async componentDidMount () {
    this.props.getPeopleData('/api/get_people_data')
    this.props.getPlanetData('/api/get_planet_data')
  }

  render () {
    return <Row/>
  }
}

const mapDispatchToProps = dispatch => {
  const {getPeopleData, getPlanetData} = actions
  return bindActionCreators({getPeopleData, getPlanetData}, dispatch)
}

export default connect(null, mapDispatchToProps)(App)



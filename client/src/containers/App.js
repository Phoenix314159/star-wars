import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/index'
import '../styles/App.scss'
import Main from './Main'

class App extends Component {

  handlePageChange = page => {
    const {paginateFunc, main: {people, planets}, search: {data, term}} = this.props
    return term !== '' ? paginateFunc(page, data, planets) : paginateFunc(page, people, planets)
  }

  async componentDidMount () {
    this.props.getPeopleData('/api/get_people_data')
    this.props.getPlanetData('/api/get_planet_data')
  }

  render () {
    const {main: {people, planets}, paginate: {subData1, subData2, page}, search: {term, data, planetData}} = this.props
    if (term !== '') {
      return <Main people={page !== 1 ? subData1 : data.slice(0, 5)}
                   planets={page !== 1 ? subData2 : planetData}
                   handlePageChange={this.handlePageChange}
                   totalPeople = {people}
             />
    }
    return <Main people={page !== 1 ? subData1 : people.slice(0, 5)}
                 planets={page !== 1 ? subData2 : planets}
                 handlePageChange={this.handlePageChange}
                 totalPeople = {people}
            />
  }
}
const mapStateToProps = ({main, paginate, search}) => ({main, paginate, search})

const mapDispatchToProps = dispatch => {
  const {getPeopleData, getPlanetData, paginateFunc} = actions
  return bindActionCreators({getPeopleData, getPlanetData, paginateFunc}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)



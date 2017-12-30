import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../styles/App.scss'
import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getPeopleData, getPlanetData } from '../actions/index'
import Main from './Main'

class Total extends Component {

  async componentDidMount () {
    this.props.getPeopleData('/api/get_people_data')
    this.props.getPlanetData('/api/get_planet_data')
  }

  render () {
    const {main: {people, planets}, paginate: {subData1, subData2, page}, search: {term, data, planetData}} = this.props
    if (term !== '') {
      return <Main people={page !== 1 ? subData1 : data.slice(0, 5)}
                   planets={page !== 1 ? subData2 : planetData}/>
    }
    return <Main people={page !== 1 ? subData1 : people.slice(0, 5)}
                 planets={page !== 1 ? subData2 : planets}/>

  }
}

const mapStateToProps = ({main, paginate, search}) => ({main, paginate, search})
const mapDispatchToProps = dispatch => (bindActionCreators({getPeopleData, getPlanetData}, dispatch))
export default connect(mapStateToProps, mapDispatchToProps)(Total)



import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getPeopleData, getPlanetData, getImageUrl } from '../actions'
import Main from './Main'

class Total extends Component {

  async componentDidMount () {
    const {main: {initialLoad}} = this.props
    if(!initialLoad) {
      this.props.getPeopleData('/api/get_people_data')
      this.props.getPlanetData('/api/get_planet_data')
      this.props.getImageUrl('/api/get_image_url')
    }
  }

  render () {
    const {main: {people, planets}, paginate: {subData1, subData2, page}, search: {term, data, planetData}} = this.props
    if (people.length === 0 || planets.length === 0) {
      return <h1 className="animated fadeIn loading">Loading...</h1>
    }
    if (term !== '') {
      return (
        <Main people={page !== 1 ? subData1 : data.slice(0, 5)}
              planets={page !== 1 ? subData2 : planetData} />
      )
    }
    return (
      <Main people={page !== 1 ? subData1 : people.slice(0, 5)}
            planets={page !== 1 ? subData2 : planets} />
    )
  }
}

const mapStateToProps = ({main, paginate, search}) => ({main, paginate, search})
const mapDispatchToProps = dispatch => (bindActionCreators({getPeopleData, getPlanetData, getImageUrl}, dispatch))
export default connect(mapStateToProps, mapDispatchToProps)(Total)



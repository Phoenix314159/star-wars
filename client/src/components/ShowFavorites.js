import React from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import {hidePagBar, getPeopleData, getPlanetData} from '../actions/index'
import { Link } from 'react-router-dom'
import Row from '../containers/Row'

const ShowFavorites = ({main: {favorite}, hidePagBar, getPeopleData, getPlanetData}) => {
  const goHome = () => {
    getPeopleData('/api/get_people_data')
    getPlanetData('/api/get_planet_data')
    hidePagBar(true)
  }

  if (favorite === 0) {
    return (
      <div className="noFavorites">
        <h2>No Favorites</h2>
        <div className="noFavoritesButton">
          <Link to="/">
            <button className="btn btn-danger"
                    onClick={() => goHome()}>Home</button>
          </Link>
        </div>
      </div>
    )
  }
  return <Row/>
}

const mapStateToProps = ({main}) => ({main})
const mapDispatchToProps = dispatch => (
  bindActionCreators({hidePagBar, getPeopleData, getPlanetData}, dispatch))

export default connect(mapStateToProps, mapDispatchToProps)(ShowFavorites)
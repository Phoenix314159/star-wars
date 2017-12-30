import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Row from '../containers/Row'

const ShowFavorites = ({main: {favorite}}) => {
  if (favorite === 0) {
    return (
      <div className="noFavorites">
        <Link to="/">
          <h2>No Favorites</h2>
          <button className="btn btn-danger">Home</button>
        </Link>
      </div>
    )
  }
  return <Row/>
}

const mapStateToProps = ({main}) => ({main})

export default connect(mapStateToProps)(ShowFavorites)
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Main from './Main'

const ShowFavorites = ({main: {favorite, people, planets}}) => {

  if (favorite === 0) {
    return (
      <div className="noFavorites">
        <h2>No Favorites</h2>
        <div className="noFavoritesButton">
          <Link to="/">
            <button className="btn btn-danger">Home</button>
          </Link>
        </div>
      </div>
    )
  }
  return <Main people={people}
               planets={planets}
  />
}

const mapStateToProps = ({main}) => ({main})

export default connect(mapStateToProps)(ShowFavorites)
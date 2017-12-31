import React from 'react'
import { connect } from 'react-redux'
import Main from './Main'

const ShowFavorites = ({main: {people, planets}}) => {

  if (people.length === 0) {
    return (
      <div className="noFavorites">
        <h2>No Favorites</h2>
      </div>
    )
  }
  return (
    <Main people={people}
          planets={planets}
    />
  )
}

const mapStateToProps = ({main}) => ({main})

export default connect(mapStateToProps)(ShowFavorites)
import React from 'react'
import { withRouter } from 'react-router-dom'
const NoResults = ({history}) => (
  <div className="noResults">
    <h1>No Results Found</h1>
    <button className="btn btn-danger"
      onClick={() => history.push('/main')}>Home</button>
  </div>
)

export default withRouter(NoResults)
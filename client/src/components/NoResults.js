import React from 'react'
import { Link } from 'react-router-dom'
export default () => (
  <div className="noResults">
    <h1>No Results Found</h1>
    <Link to="/">
      <button className="btn btn-danger">Home</button>
    </Link>
  </div>
)
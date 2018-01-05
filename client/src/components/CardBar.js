import React from 'react'
import PagBar from '../containers/PagBar'
import Card from '../containers/Card'

export default ({people, planets, handlePageChange}) => (
  <div>
    <Card people={people}
          planets={planets}/>
    <PagBar handlePageChange={handlePageChange}/>
  </div>
)


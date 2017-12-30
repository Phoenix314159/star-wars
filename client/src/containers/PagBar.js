import React from 'react'
import { connect } from 'react-redux'
import Paginate from 'react-js-pagination'
import { Link } from 'react-router-dom'

const PagBar = ({handlePageChange, paginate: {page}, search: {totalItems, size, hide}}) => {
  const pageRangeDisplayed = Math.round((totalItems / size))
  const pagBarStyle = hide ? 'pagHide' : 'pagContainer'
  return (
    <div>
      <div className={pagBarStyle}>
        <div className="movePag">
          <Paginate activePage={page}
                    itemsCountPerPage={size}
                    totalItemsCount={totalItems}
                    pageRangeDisplayed={pageRangeDisplayed}
                    onChange={handlePageChange}
          />
        </div>
      </div>
      <div className="homeButton">
        <Link to="/home">
          <button className="btn btn-primary">Home</button>
        </Link>
      </div>
    </div>
  )
}

const mapStateToProps = ({main, paginate, search}) => ({main, paginate, search})

export default connect(mapStateToProps)(PagBar)
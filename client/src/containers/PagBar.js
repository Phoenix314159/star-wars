import React from 'react'
import { connect } from 'react-redux'
import Paginate from 'react-js-pagination'

const PagBar = ({handlePageChange, paginate: {page}, search: {totalItems, hide, hide2}}) => {
  const pageRangeDisplayed = Math.round((totalItems / 5))
  const pagBarStyle = hide || hide2 ? 'pagHide' : 'pagContainer'
  return (
    <div className={pagBarStyle}>
      <div className="movePag">
        <Paginate activePage={page}
                  itemsCountPerPage={5}
                  totalItemsCount={totalItems}
                  pageRangeDisplayed={pageRangeDisplayed}
                  onChange={handlePageChange}/>
      </div>
    </div>
  )
}

const mapStateToProps = ({paginate, search}) => ({paginate, search})
export default connect(mapStateToProps)(PagBar)
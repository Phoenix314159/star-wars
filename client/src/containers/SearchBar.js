import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { peopleSearch, paginateFunc } from '../actions'

class SearchBar extends Component {

  onInputChange (term) {
    const {main: {people, planets}, paginate: {page}, peopleSearch, paginateFunc} = this.props
    if (page > 1) {
      paginateFunc(1, people, planets)
      return peopleSearch(people, planets, term, page)
    }
    return peopleSearch(people, planets, term, page)
  }

  render () {
    const {search: {term}, starWarsHide} = this.props
    return (
      <div className={starWarsHide}>
        <div className="animated fadeIn search-bar">
          <input placeholder="Search Your Destiny"
                 value={term}
                 onChange={e => this.onInputChange(e.target.value)}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({main, paginate, search}) => ({main, paginate, search})
const mapDispatchToProps = dispatch => (bindActionCreators({peopleSearch, paginateFunc}, dispatch))
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
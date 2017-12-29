import React, { Component } from 'react';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/index'
import Card from './Card'
import PagBar from './PagBar'
import SearchBar from './SearchBar'
import star from '../images/star.svg'
import wars from '../images/wars.svg'

class Main extends Component {

  goHome = () => {
    const {hidePagBar, peopleSearch, showEdit, paginate: {page},
      main: {people, planets}, search: {term}} = this.props
    hidePagBar(false)
    showEdit(false)
    peopleSearch(people, planets, term, page)
  }

  showFavorites = () => {
    const {main: {people, planets}, paginate: {page}, showFavorites} = this.props
    showFavorites(people, page, planets)
  }

  renderTop = () => {
    const {main: {people, favorite}, paginate: {subData1}, goHome} = this.props
    if (people.length === 0 && !subData1) return <div>Loading...</div>
    return (
      <div className='content'>
        <div className='logo'>
          <img src={star} alt="star-logo"/>
          <img src={wars} alt="wars-logo"/>
          <div className="favoriteCount">
            <div>{favorite}</div>
          </div>
          <button className="btn btn-default"
                  onClick={() => this.showFavorites()}>Show Favorites</button>
        </div>
        <SearchBar goHome={goHome}/>
      </div>
    )
  }
  render () {
    const {people, planets, handlePageChange} = this.props
    return (
      <div>
        {this.renderTop()}
        <Card people={people}
              planets={planets}
              goHome={this.goHome}
        />
        <div className="pagBar">
          <PagBar handlePageChange={handlePageChange}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({main, paginate, search}) => ({main, paginate, search})

const mapDispatchToProps = dispatch => {
  const {peopleSearch, hidePagBar, showEdit, showFavorites} = actions
  return bindActionCreators({peopleSearch, hidePagBar, showEdit, showFavorites}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)

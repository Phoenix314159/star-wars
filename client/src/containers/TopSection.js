import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { showFavorites } from '../actions'
import star from '../images/star.svg'
import wars from '../images/wars.svg'
import SearchBar from './SearchBar'

const TopSection = ({main: {people, planets, favorite, hideButton, showButton}, paginate: {page}, showFavorites}) => {
  const homeButtonStyle = hideButton ? 'pagHide' : 'homeButton'
  const showFavoritesButtonStyle = showButton ? 'btn btn-default' : 'pagHide'
  return (
    <div>
      <div className='content'>
        <div className='logo'>
          <img src={star} alt="star-logo"/>
          <img src={wars} alt="wars-logo"/>
          <div className="favoriteCount">
            <div>{favorite}</div>
          </div>
          <Link to="/favorites">
            <button className={showFavoritesButtonStyle}
                    onClick={() => showFavorites(people, planets, page)}>
              Show Favorites
            </button>
          </Link>
        </div>
        <SearchBar/>
      </div>
      <div className={homeButtonStyle}>
        <Link to="/">
          <button className="btn btn-primary">Home</button>
        </Link>
      </div>
    </div>
  )
}

const mapStateToProps = ({main, paginate}) => ({main, paginate})
const mapDispatchToProps = dispatch => (bindActionCreators({showFavorites}, dispatch))
export default connect(mapStateToProps, mapDispatchToProps)(TopSection)

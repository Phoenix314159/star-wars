import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { showFavorites } from '../actions'
import starWarsLogo from '../images/star-wars-logo.png'
import SearchBar from './SearchBar'

const TopSection = ({main: {people, planets, favorite, hideButton, showButton},
                      paginate: {page}, open: {starWarsHide}, showFavorites}) => {
  const homeButtonStyle = hideButton ? 'animated fadeOut pagHide' : 'animated fadeIn homeButton',
    showFavoritesButtonStyle = showButton ? 'animated fadeIn btn btn-default' : 'animated fadeOut pagHide',
    starWars = starWarsHide ? 'pagHide' : '',
    showFavoriteCount = favorite === 0 ? '' : favorite
  return (
    <div>
      <div className="content">
        <div className="logo">
          <div className={starWars}>
            <img className="animated fadeIn" src={starWarsLogo} alt="" />
            <div className="animated slideInRight favoriteCount">
              <div>{showFavoriteCount}</div>
            </div>
            <Link to="/favorites">
              <button className={showFavoritesButtonStyle}
                      onClick={() => showFavorites(people, planets, page)}>
                Show Favorites
              </button>
            </Link>
          </div>
        </div>
        <SearchBar starWarsHide={starWars} />
      </div>
      <div className={homeButtonStyle}>
        <Link to="/">
          <button className="btn btn-primary">Home</button>
        </Link>
      </div>
    </div>
  )
}

const mapStateToProps = ({main, paginate, open}) => ({main, paginate, open})
const mapDispatchToProps = dispatch => (bindActionCreators({showFavorites}, dispatch))
export default connect(mapStateToProps, mapDispatchToProps)(TopSection)

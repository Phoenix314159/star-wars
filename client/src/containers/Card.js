import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link, withRouter } from 'react-router-dom'
import * as actions from '../actions'
import PopUp from '../components/PopUp'
import getHomeWorldById from '../utilities/getHomeWorldById'
import RenderRemoveButton from '../components/RenderRemoveButton'

class Card extends Component {

  showEdit = person => {
    const {main: {people, planets}, showEdit, hidePagBar} = this.props
    showEdit(people, person, planets)
    hidePagBar(true)
  }

  addFavorite = (person, favorite) => {
    const {history: {location: {pathname}}, addFavorite} = this.props
    const {isFavorite} = person
    if (isFavorite || pathname === '/favorites') return
    addFavorite(person, favorite)
  }

  onClick = (p) => {
    const {main: {people, favorite}, paginate: {page}, history: {location: {pathname}}, removeFavorite, removeFavorited} = this.props
    if (pathname === '/favorites') {
      removeFavorited(people, p, page, favorite)
      return removeFavorite(p, favorite, people)
    }
    return removeFavorite(p, favorite, people)
  }

  openPopUp = (index, name, image, info) => {
    this.props.openPopUp(true, index, name, image, info)
  }

  closePopUp = () => {
    this.props.openPopUp(false)
  }

  onMouseOver = boolean => {
    this.props.onMouseOver(boolean)
  }

  onMouseOverStyle = str => {
    const {match: {path}} = this.props
    if(path === '/favorites') return {maxWidth: '1650px'}
    return {
      maxWidth: str,
      transitionDuration: '.9s'
    }
  }

  render () {
    const {people, planets, main: {favorite, imageUrl, hover}, open: {show, name, image, info}} = this.props
    if (people.length === 0 || planets.length === 0) {
      return (
        <div className="noResults">
          <h1>No Results Found</h1>
        </div>
      )
    }
    if (show) {
      return (
        <PopUp close={this.closePopUp}
               image={image}
               name={name}
               info={info}
        />
      )
    }
    return (
      <div className="displayCards" style={hover ? this.onMouseOverStyle('1700px') : this.onMouseOverStyle('1600px')}>
        {people.map((person, i) => {
          const {fields: {name, image, birth_year, homeworld, newImage, isImageUpdated, info}} = person,
            characterImage = isImageUpdated ? newImage : `${imageUrl}/${image}`
          return (
            <div className='card' key={i}
                 onMouseEnter={() => this.onMouseOver(true)}
                 onMouseLeave={() => this.onMouseOver(false)}>
              <div className='card-content'>
                <div className='card-name text-center'>{name}</div>
                <img src={characterImage} alt='image url not found'
                     onClick={() => this.openPopUp(i, name, characterImage, info)}
                />
                <p>
                  <span>Birthday:</span>
                  <span>{birth_year}</span>
                </p>
                <p>
                  <span>Homeworld:</span>
                  <span>{getHomeWorldById(planets, homeworld)}</span>
                </p>
                <div className="editButtons">
                  <Link to="/edit">
                    <button className="btn btn-default" onClick={() => this.showEdit(person)}>Edit</button>
                  </Link>
                  <button className="btn btn-success" onClick={() => this.addFavorite(person, favorite, planets)}>
                    Favorite
                  </button>
                  <RenderRemoveButton onClick={this.onClick} person={person}/>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}
const mapStateToProps = ({main, paginate, open}) => ({main, paginate, open})

const mapDispatchToProps = dispatch => {
  const {showEdit, hidePagBar, addFavorite, removeFavorite, removeFavorited, openPopUp, onMouseOver} = actions
  return bindActionCreators({showEdit, hidePagBar, addFavorite, removeFavorite, removeFavorited, openPopUp, onMouseOver}, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Card))



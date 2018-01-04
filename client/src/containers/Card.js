import '../styles/Card.scss'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link, withRouter } from 'react-router-dom'
import * as actions from '../actions'
import PopUp from '../components/PopUp'

class Card extends Component {

  getHomeWorldById (id) {
    const {planets} = this.props, home = []
    planets.forEach((element) => {
      if (element.pk === id) {
        const {fields: {name}} = element
        home.push(name)
      }
    })
    return <span>{home[0]}</span>
  }

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

  renderRemoveButton = p => {
    const {isFavorite} = p
    return (
      <button className={isFavorite ? 'btn btn-danger' : 'favoriteHide'}
              onClick={() => this.onClick(p) }>X</button>
    )
  }

  openPopUp = (index, name, image, info) => {
    this.props.openPopUp(true, index, name, image, info)
  }

  closePopUp = () => {
    this.props.openPopUp(false)
  }

  render () {
    const {people, planets, main: {favorite, imageUrl}, open: {show, name, image, info}} = this.props
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
      <div className="displayCards">
        {people.map((person, i) => {
          const {fields: {name, image, birth_year, homeworld, newImage, isImageUpdated, info}} = person
          const characterImage = isImageUpdated ? newImage : `${imageUrl}/${image}`
          const homeWorldName = this.getHomeWorldById(homeworld)
          return (
            <div className='card' key={i}>
              <div className='card-content'>
                <div className='card-name text-center'>{name}</div>
                <img src={characterImage} alt='image url not found'
                     style={{height: '150px', width: '150px'}}
                     onClick={() => this.openPopUp(i, name, characterImage, info)}
                />
                <p>
                  <span>Birthday:</span>
                  <span>{birth_year}</span>
                </p>
                <p>
                  <span>Homeworld:</span>
                  {homeWorldName}
                </p>
                <div className="editPerson">
                  <Link to="/edit">
                    <button className="btn btn-default" onClick={() => this.showEdit(person)}>Edit</button>
                  </Link>
                  <button className="btn btn-success" onClick={() => this.addFavorite(person, favorite, planets)}>
                    Favorite
                  </button>
                  {this.renderRemoveButton(person)}
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
  const {showEdit, hidePagBar, addFavorite, removeFavorite, removeFavorited, openPopUp} = actions
  return bindActionCreators({showEdit, hidePagBar, addFavorite, removeFavorite, removeFavorited, openPopUp}, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Card))



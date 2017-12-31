import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link, withRouter} from 'react-router-dom'
import * as actions from '../actions/index'
import '../styles/Card.scss'

class Card extends Component {

  getHomeWorldById (id) {
    let {planets} = this.props, home
    for (let i = 0; i < planets.length; i++) {
      if (planets[i].pk === id) {
        home = planets[i].fields.name
      }
    }
    return <span>{home}</span>
  }

  showEdit = person => {
    const {showEdit, hidePagBar, main: {people, planets}} = this.props
    showEdit(people, person, planets)
    hidePagBar(true)
  }

  addFavorite = (person, favorite) => {
    if (person.isFavorite) return
    this.props.addFavorite(person, favorite)
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

  render () {
    const {people, planets, main: {favorite}} = this.props
    if (people.length === 0 || planets.length === 0) {
      return (
        <div className="noResults">
          <h1>No Results Found</h1>
        </div>
      )
    }
    return (
      <div className="displayCards">
        {people.map((person, i) => {
          const {name, image, birth_year, homeworld} = person.fields
          return (
            <div className='card' key={i}>
              <div className='card-content'>
                <div className='card-name text-center'>{name}</div>
                <img src={`/imgs/${image}`} alt=''
                     style={{height: '150px', width: '150px'}}/>
                <p>
                  <span>Birthday:</span>
                  <span>{birth_year}</span>
                </p>
                <p>
                  <span>Homeworld:</span>
                  {this.getHomeWorldById(homeworld)}
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
const mapStateToProps = ({main, edit, search, paginate}) => ({main, edit, search, paginate})

const mapDispatchToProps = dispatch => {
  const {showEdit, hidePagBar, setNewPlanet, updatePerson, addFavorite, removeFavorite, peopleSearch, paginateFunc, removeFavorited} = actions
  return bindActionCreators({showEdit, hidePagBar, setNewPlanet, updatePerson, addFavorite, removeFavorite, peopleSearch, paginateFunc, removeFavorited}, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Card))



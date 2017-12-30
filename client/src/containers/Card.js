import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link, withRouter } from 'react-router-dom'
import NoResults from '../components/NoResults'
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

  handleSubmit = e => {
    const newName = this.arr1[this.arr1.length - 1],
      newImage = this.arr2[this.arr2.length - 1],
      newBirthday = this.arr3[this.arr3.length - 1],
      url = '/api/get_people_data',
      {goHome, main: {people, planets}, edit: {newPlanet, id}, search: {term}, paginate: {page}, peopleSearch, paginateFunc} = this.props
    this.props.updatePerson(newName, newImage, newBirthday, newPlanet, id, url, page, planets, term)
    peopleSearch(people, planets, term, page)
    paginateFunc(page, people, planets)
    e.preventDefault()
    goHome()
  }

  selectedPlanet = e => {
    const {planets} = this.props
    const {target: {selectedOptions}} = e
    this.props.setNewPlanet(planets, selectedOptions[0].text)
  }

  arr1 = []
  arr2 = []
  arr3 = []

  changeInfo1 = a => {
    this.arr1.push(a)
  }
  changeInfo2 = a => {
    this.arr2.push(a)
  }
  changeInfo3 = a => {
    this.arr3.push(a)
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
    const {main: {people, favorite}, paginate: {page}, removeFavorite, remove, removeFavorited} = this.props
    if(this.props.history.location.pathname === '/favorites') {
      removeFavorited(people, p, page)
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
    const {people, planets, main: {favorite}, search: {hide, term}} = this.props
    if(people.length === 0 || planets.length === 0) {
      return <div className="loading"><h2>Loading....</h2></div>
    }
    if (hide && term !== '') {
      return <NoResults/>
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
                  <button className="btn btn-success" onClick={() => this.addFavorite(person, favorite, planets)}>Favorite
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



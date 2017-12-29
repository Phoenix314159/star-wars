import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/index'
import '../styles/Card.scss'
import ChangePersonField from '../components/ChangePersonField'
// const images = require.context('../images', true)

// console.log(images())


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
    const {showEdit, hidePagBar, main: {people}} = this.props
    showEdit(true, people, person)
    hidePagBar(true)
  }

  addFavorite = (person, favorite) => {
    if (person.isFavorite) return
    this.props.addFavorite(person, favorite)
  }

  onClick (person) {
    const {main: {people, planets, favorite}, paginate: {page}, removeFavorite, showFavorites, reset} = this.props
    const url = '/api/get_people_data'
    removeFavorite(person, favorite, people, url)
    showFavorites(people, page, planets)
    reset(favorite, url)
  }

  renderRemoveButton = person => {
    const {isFavorite} = person
    return (
      <button className={isFavorite ? 'btn btn-danger' : 'favoriteHide'}
              onClick={() => this.onClick(person)}>X</button>
    )
  }

  render () {
    const {people, planets, goHome, main: {favorite}, edit: {editCard}, search: {hide}} = this.props
    if (editCard) {
      const {edit: {name, image}} = this.props
      console.log(image)
      return (
        <ChangePersonField
          name={name}
          people={people}
          url={image}
          planets={planets}
          handleSubmit={this.handleSubmit}
          selectedPlanet={this.selectedPlanet}
          onChange1={e => this.changeInfo1(e.target.value)}
          onChange2={e => this.changeInfo2(e.target.value)}
          onChange3={e => this.changeInfo3(e.target.value)}
          goHome={goHome}
        />
      )
    }
    if (hide) {
      return (
        <div className="noResults">
          <h1>No Results Found</h1>
          <button className="btn btn-danger" onClick={() => goHome()}>Home</button>
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
                  <button className="btn btn-default" onClick={() => this.showEdit(person)}>Edit</button>
                  <button className="btn btn-success" onClick={event => this.addFavorite(person, favorite)}>Favorite
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
  const {showEdit, hidePagBar, setNewPlanet, updatePerson, addFavorite, removeFavorite, peopleSearch, paginateFunc, showFavorites, reset} = actions
  return bindActionCreators({
    showEdit,
    hidePagBar,
    setNewPlanet,
    updatePerson,
    addFavorite,
    removeFavorite,
    peopleSearch,
    paginateFunc,
    showFavorites,
    reset
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)



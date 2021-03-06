import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updatePerson, setNewPlanet, showFavoritesButton } from '../actions'
import ChangePersonField from '../components/ChangePersonField'
import Main from './Main'

class ShowEdit extends Component {

  handleSubmit = e => {
    e.preventDefault()
    const newName = this.nameArr[this.nameArr.length - 1],
      newImage = this.imageArr[this.imageArr.length - 1],
      newBirthday = this.birthdayArr[this.birthdayArr.length - 1],
      {main: {planets, person}, paginate: {page}, edit: {newPlanet, id}, search: {term}, updatePerson} = this.props
    updatePerson(newName, newImage, newBirthday, newPlanet, id, page, planets, person, term)
  }

  selectedPlanet = e => {
    const {main: {planets}, setNewPlanet} = this.props
    const {target: {selectedOptions}} = e
    setNewPlanet(planets, selectedOptions[0].text)
  }

  nameArr = []
  imageArr = []
  birthdayArr = []

  changeInfo = e => {
    const {target: {name, value}} = e
    if (name === 'newPersonName') {
      this.nameArr.push(value)
    } else if (name === 'newPersonImage') {
      this.imageArr.push(value)
    } else if (name === 'newPersonBirthday') {
      this.birthdayArr.push(value)
    }
  }
  showFavoritesButton = () => {
    const {showFavoritesButton, match: {path}, main: {favorite}} = this.props
    if(path === '/edit' && favorite > 0) {
      return showFavoritesButton(true)
    }
    return showFavoritesButton(false)
  }

  render () {
    const {main: {people, planets, person, ok, imageUrl}} = this.props
    if (person) {
      const {fields: {name, image, newImage, isImageUpdated}} = person
      return (
        <ChangePersonField
          name={name}
          people={people}
          image={image}
          imageUrl={imageUrl}
          newImage={newImage}
          isImageUpdated={isImageUpdated}
          planets={planets}
          ok={ok}
          spinner={null}
          handleSubmit={this.handleSubmit}
          selectedPlanet={this.selectedPlanet}
          handleChange={this.changeInfo}
          showFavoritesButton={this.showFavoritesButton}/>
      )
    }
    return (
      <Main people={people}
            planets={planets}/>
    )
  }
}

const mapStateToProps = ({main, paginate, edit, search}) => ({main, paginate, edit, search})
const mapDispatchToProps = dispatch => (bindActionCreators({updatePerson, setNewPlanet, showFavoritesButton}, dispatch))
export default connect(mapStateToProps, mapDispatchToProps)(ShowEdit)
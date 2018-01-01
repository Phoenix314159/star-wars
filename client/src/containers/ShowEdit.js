import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { paginateFunc, updatePerson, peopleSearch, setNewPlanet } from '../actions'
import ChangePersonField from '../components/ChangePersonField'
import Main from './Main'

class ShowEdit extends Component {


  handleSubmit = e => {
    e.preventDefault()
    const url1 = '/api/update_person',
      url2 = '/api/get_people_data',
      newName = this.nameArr[this.nameArr.length - 1],
      newImage = this.imageArr[this.imageArr.length - 1],
      newBirthday = this.birthdayArr[this.birthdayArr.length - 1],
      {main: {planets}, search: {term}, edit: {newPlanet, id}, paginate: {page}, updatePerson} = this.props
    updatePerson(newName, newImage, newBirthday, newPlanet, id, page, url1, url2, planets, term)
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

  render () {
    const {main: {people, planets, person, ok}} = this.props
    if (person) {
      const {fields: {name, image}} = person
      return (
        <ChangePersonField
          name={name}
          people={people}
          url={image}
          planets={planets}
          ok={ok}
          spinner={null}
          handleSubmit={this.handleSubmit}
          selectedPlanet={this.selectedPlanet}
          handleChange={this.changeInfo}
        />
      )
    }
    return (
      <Main people={people}
            planets={planets}
      />
    )
  }
}

const mapStateToProps = ({main, paginate, search, edit}) => ({main, paginate, search, edit})
const mapDispatchToProps = dispatch => (bindActionCreators({paginateFunc, updatePerson, peopleSearch, setNewPlanet}, dispatch))
export default connect(mapStateToProps, mapDispatchToProps)(ShowEdit)
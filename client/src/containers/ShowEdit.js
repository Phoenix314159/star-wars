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
      newName = this.arr1[this.arr1.length - 1],
      newImage = this.arr2[this.arr2.length - 1],
      newBirthday = this.arr3[this.arr3.length - 1],
      {main: {planets}, search: {term}, edit: {newPlanet, id}, paginate: {page}, updatePerson} = this.props
    updatePerson(newName, newImage, newBirthday, newPlanet, id, page, url1, url2, planets, term)
  }

  selectedPlanet = e => {
    const {main: {planets}, setNewPlanet} = this.props
    const {target: {selectedOptions}} = e
    setNewPlanet(planets, selectedOptions[0].text)
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

  render () {
    const {main: {people, planets, person, ok}, edit:{spinner}} = this.props
    if (person) {
      const {fields: {name, image}} = person
      return (
        <ChangePersonField
          name={name}
          people={people}
          url={image}
          planets={planets}
          ok={ok}
          spinner={spinner}
          handleSubmit={this.handleSubmit}
          selectedPlanet={this.selectedPlanet}
          onChange1={e => this.changeInfo1(e.target.value)}
          onChange2={e => this.changeInfo2(e.target.value)}
          onChange3={e => this.changeInfo3(e.target.value)}
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
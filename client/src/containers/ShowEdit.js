import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {paginateFunc} from '../actions'
import ChangePersonField from '../components/ChangePersonField'
import Main from './Main'

const ShowEdit = ({main: {people, planets, person}, paginate: {page}, paginateFunc}) => {
  if(person) {
    const {fields: {name, image}} = person
    return (
      <ChangePersonField
        name={name}
        people={people}
        url={image}
        planets={planets}
        pag={() => paginateFunc(page, people, planets)}
        // handleSubmit={this.handleSubmit}
        // selectedPlanet={this.selectedPlanet}
        // onChange1={e => this.changeInfo1(e.target.value)}
        // onChange2={e => this.changeInfo2(e.target.value)}
        // onChange3={e => this.changeInfo3(e.target.value)}
      />
    )
  }
  return <Main  people={people}
                planets={planets}/>

}

const mapStateToProps = ({main, paginate, search}) => ({main, paginate, search})
const mapDispatchToProps = dispatch => (bindActionCreators({paginateFunc}, dispatch))
export default connect(mapStateToProps, mapDispatchToProps)(ShowEdit)
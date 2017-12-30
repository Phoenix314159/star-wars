import React from 'react'
import {connect} from 'react-redux'
import ChangePersonField from './ChangePersonField'

const ShowEdit = ({main: {people, planets}}) => {
  return (
    <ChangePersonField
      // name={name}
      people={people}
      // url={image}
      planets={planets}
      // handleSubmit={this.handleSubmit}
      // selectedPlanet={this.selectedPlanet}
      // onChange1={e => this.changeInfo1(e.target.value)}
      // onChange2={e => this.changeInfo2(e.target.value)}
      // onChange3={e => this.changeInfo3(e.target.value)}
      // goHome={goHome}
    />
  )
}

const mapStateToProps = ({main, paginate, search}) => ({main, paginate, search})

export default connect(mapStateToProps)(ShowEdit)
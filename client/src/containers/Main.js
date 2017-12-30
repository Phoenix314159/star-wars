import React, { Component } from 'react';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/index'
import Card from './Card'
import PagBar from './PagBar'

class Main extends Component {

  handlePageChange = page => {
    const {paginateFunc, main: {people, planets}, search: {data, term}} = this.props
    return term !== '' ? paginateFunc(page, data, planets) : paginateFunc(page, people, planets)
  }

  render () {
    const {people, planets} = this.props
    return (
      <div>
        <Card people={people}
              planets={planets}/>
        <PagBar handlePageChange={this.handlePageChange}/>
      </div>
    )
  }
}

const mapStateToProps = ({main, paginate, search}) => ({main, paginate, search})

const mapDispatchToProps = dispatch => {
  const {paginateFunc} = actions
  return bindActionCreators({paginateFunc}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)

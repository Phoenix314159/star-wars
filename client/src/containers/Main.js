import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import * as actions from '../actions/index'
import Card from './Card'
import PagBar from './PagBar'

class Main extends Component {

  handlePageChange = page => {
    const {paginateFunc, main: {people, planets}, search: {data, term}} = this.props
    return term !== '' ? paginateFunc(page, data, planets) : paginateFunc(page, people, planets)
  }

  render () {
    if (this.props.history.location.pathname === '/main') {
      const {main: {people, planets}, paginate: {subData1, subData2, page}, search: {term, data, planetData}} = this.props
      if (term !== '') {
        return (
          <div>
            <Card people={page !== 1 ? subData1 : data.slice(0, 5)}
                  planets={page !== 1 ? subData2 : planetData}/>
            <PagBar handlePageChange={this.handlePageChange}/>
          </div>
        )
      }
      return (
        <div>
          <Card people={page !== 1 ? subData1 : people.slice(0, 5)}
                planets={page !== 1 ? subData2 : planets}/>
          <PagBar handlePageChange={this.handlePageChange}/>
        </div>
      )
    }
    const {people, planets, paginate: {subData1, subData2, page}} = this.props
    console.log(people)
    return (
      <div>
        <Card people={page !== 1 ? subData1 : people.slice(0, 5)}
              planets={page !== 1 ? subData2 : planets}
              remove={page!==1}/>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main))

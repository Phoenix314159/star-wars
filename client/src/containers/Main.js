import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import { paginateFunc } from '../actions'
import CardBar from '../components/CardBar'

class Main extends Component {

  handlePageChange = page => {
    const {paginateFunc, main: {people, planets}, search: {data, term}} = this.props
    return term !== '' ? paginateFunc(page, data, planets) : paginateFunc(page, people, planets)
  }

  render () {
    const {history: {location: {pathname}}, paginate: {subData1, subData2, page}} = this.props
    if (pathname === '/main') {
      const {main: {people, planets}, search: {term, data, planetData}} = this.props
      if (term !== '') {
        return (
          <CardBar people={page !== 1 ? subData1 : data.slice(0, 5)}
                   planets={page !== 1 ? subData2 : planetData}
                   handlePageChange={this.handlePageChange} />
        )
      }
      return (
        <CardBar people={page !== 1 ? subData1 : people.slice(0, 5)}
                 planets={page !== 1 ? subData2 : planets}
                 handlePageChange={this.handlePageChange} />
      )
    }
    const {people, planets} = this.props
    return (
      <CardBar people={page !== 1 ? subData1 : people.slice(0, 5)}
               planets={page !== 1 ? subData2 : planets}
               handlePageChange={this.handlePageChange} />
    )
  }
}

const mapStateToProps = ({main, paginate, search}) => ({main, paginate, search})
const mapDispatchToProps = dispatch => (bindActionCreators({paginateFunc}, dispatch))
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main))

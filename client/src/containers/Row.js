import React from 'react'
import {connect} from 'react-redux'
import Main from './Main'

const Row = ({main: {people, planets}, paginate: {subData1, subData2, page}, search: {term, data, planetData}}) => {
  if (term !== '') {
      return <Main people={page !== 1 ? subData1 : data.slice(0, 5)}
                   planets={page !== 1 ? subData2 : planetData}/>
    }
    return <Main people={page !== 1 ? subData1 : people.slice(0, 5)}
                 planets={page !== 1 ? subData2 : planets}/>
}

const mapStateToProps = ({main, paginate, search}) => ({main, paginate, search})


export default connect(mapStateToProps)(Row)


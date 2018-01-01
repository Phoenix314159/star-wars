import types from '../actions/types'
import getSubData from '../utilities/getSubData'

export default (state = {}, action) => {
  const {type} = action
  switch (type) {
    case types.PAGINATE: {
      let {payload: {page, subData1, subData2, boolean}} = action
      return {...state, page, subData1: getSubData(subData1, page), subData2, render: boolean}
    }
    case types.HIDE_PAGBAR: {
      const {payload: {boolean}} = action
      return {...state, hide: boolean}
    }
    case types.UPDATE_PERSON: {
      const {payload: {page, data, planets}} = action
      return {...state, page, subData1: getSubData(data, page), subData2: planets}
    }
    case types.SHOW_FAVORITES: {
      return {...state, page: 1}
    }
    case types.REMOVE: {
      let {payload: {people, page}} = action
      const subData1 = getSubData(people, page)
      if(subData1.length === 0) {
        page -= 1
        return page === 0 ? {...state, page: 1} : {...state, page, subData1}
      }
      return {...state, subData1}
    }
    default:
      return state
  }
}


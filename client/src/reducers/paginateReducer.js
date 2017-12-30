import types from '../actions/types'
import getSubData from '../utilities/getSubData'
import findFavorites from '../utilities/findFavorites'

export default (state = {}, action) => {
  const {type} = action
  switch (type) {
    case types.PAGINATE: {
      const {payload: {page, subData1, subData2}} = action
      return {...state, page, subData1: getSubData(subData1, page), subData2}
    }
    case types.HIDE_PAGBAR: {
      const {payload: {boolean}} = action
      return {...state, hide: boolean}
    }
    case types.UPDATE_PERSON: {
      const {payload: {page, data, planetData}} = action
      return {...state, page, subData1: getSubData(data, page), subData2: planetData}
    }
    case types.SHOW_FAVORITES: {
      return {...state, page: 1}
    }
    default:
      return state
  }
}


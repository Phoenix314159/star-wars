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
      let {payload: {people, page, planets}} = action
      people = findFavorites(people)
      return {...state, page: 1, subData1: getSubData(people, page), subData2: planets}
    }
    case types.REMOVE_FAVORITE: {
      let {payload: {people, page}} = action
      const subData1 = getSubData(people, page)
      console.log(subData1)
      people = people.filter(a => (a.isFavorite !== false))
      return {...state, subData1}
    }
    default:
      return state
  }
}


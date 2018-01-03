import types from '../actions/types'
import getSubData from '../utilities/getSubData'
import findPersonsPage from '../utilities/findPersonsPage'

export default (state = {}, action) => {
  const {type} = action
  switch (type) {
    case types.PAGINATE: {
      let {payload: {page, subData1, subData2}} = action
      return {...state, page, subData1: getSubData(subData1, page), subData2}
    }
    case types.HIDE_PAGBAR: {
      const {payload: {boolean}} = action
      return {...state, hide: boolean}
    }
    case types.UPDATE_PERSON: {
      const {payload: {data, planets, person, page, term}} = action
      if(term !== '') {
        const originalPage = findPersonsPage(data, person)
        return {...state, page: originalPage, subData1: getSubData(data, originalPage), subData2: planets}
      }
      return {...state, page, subData1: getSubData(data, page), subData2: planets}
    }
    case types.SHOW_FAVORITES: {
      return {...state, page: 1}
    }
    case types.REMOVE: {
      let {payload: {people, page}} = action
      const subData1 = getSubData(people, page)
      if (subData1.length === 0) {
        page -= 1
        return page === 0 ? {...state, page: 1} : {...state, page, subData1}
      }
      return {...state, subData1}
    }
    case types.GET_PEOPLE_DATA:
      return {...state, page: 1}
    default:
      return state
  }
}

import types from '../actions/types'
import searchFunc from '../utilities/searchFunc'
import searchPlanets from '../utilities/searchPlanets'
import findFavorites from '../utilities/findFavorites'
import remove from '../utilities/remove'

export default (state = {}, action) => {
  const {type} = action
  switch (type) {
    case types.PEOPLE_SEARCH: {
      const {payload: {data, planetData, term, page}} = action
      const people = searchFunc(data, term)
      const planets = searchPlanets(people, planetData)
      if (term === '') {
        return {...state, totalItems: data.length, term, hide2: false}
      }
      if (people.length === 0) {
        return {...state, totalItems: people.length, term, hide2: true, data: people, planetData: planets}
      }
      return {...state, totalItems: people.length, term, hide2: false, data: people, planetData: planets, page}
    }
    case types.SHOW_FAVORITES: {
      let {payload: {people}} = action
      people = findFavorites(people)
      return {...state, totalItems: people.length, term: ''}
    }
    case types.GET_PEOPLE_DATA: {
      const {payload: {data}} = action
      return {...state, totalItems: data.length}
    }
    case types.UPDATE_PERSON: {
      const {payload: {data, planets}} = action
      return {...state, totalItems: data.length, term: '', data, planets}
    }
    case types.REMOVE: {
      let {payload: {people}} = action
      return {...state, totalItems: people.length}
    }
    case types.OPEN_POPUP:
      const {payload: {show}} = action
      if(!show) {
        return {...state, hide2: false}
      }
      return {...state, hide2: true}

    default:
      return state
  }
}
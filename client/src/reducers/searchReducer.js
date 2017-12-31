import types from '../actions/types'
import searchFunc from '../utilities/searchFunc'
import searchPlanets from '../utilities/searchPlanets'
import findFavorites from '../utilities/findFavorites'

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
    case types.UPDATE_PERSON: {
      let {payload: {data, page, planetData, term}} = action
      if (page === 1) {
        const people = searchFunc(data, term)
        const planets = searchPlanets(people, planetData)
        return {...state, data: people, page, planetData: planets, term, totalItems: people.length}
      }
      break
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
    default:
      return state
  }
}

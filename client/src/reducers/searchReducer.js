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
        return {...state, totalItems: data.length, term}
      }
      if (people.length === 0) {
        return {...state, totalItems: data.length, hide: true, term: '', data, planetData}
      }
      return {...state, data: people, planetData: planets, totalItems: people.length, term, page}
    }
    case types.UPDATE_PERSON: {
      let {payload: {data, page, planetData, term}} = action
      if (page === 1) {
        const people = searchFunc(data, term)
        const planets = searchPlanets(people, planetData)
        return {...state, data: people, planetData: planets, totalItems: people.length, term, page}
      }
      break
    }
    case types.SHOW_FAVORITES: {
      let {payload: {people}} = action
      people = findFavorites(people)
      return {...state, totalItems: people.length}
    }
    // case types.REMOVE_FAVORITE: {
    //   let {payload: {people}} = action
    //   people = people.filter(a => (a.isFavorite !== false))
    //   return {...state, totalItems: people.length}
    // }
    case types.GET_PEOPLE_DATA: {
      const {payload: {data}} = action
      return {...state, totalItems: data.length, term: ''}
    }
    case types.HIDE_PAGBAR:
      return {...state, hide: false}
    default:
      return state
  }
}

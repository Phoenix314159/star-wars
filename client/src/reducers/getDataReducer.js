import types from '../actions/types'
import findFavorites from '../utilities/findFavorites'
export default (state = {}, action) => {
  const {type} = action
  switch(type) {
    case types.GET_PEOPLE_DATA: {
      const {payload: {data}} = action
      return {...state, people: data, favorite: 0}
    }
    case types.GET_PLANETS_DATA: {
      const {payload: {data}} = action
      return {...state, planets: data}
    }
    case types.ADD_FAVORITE: {
      let {payload: {person, favorite}} = action
      person.isFavorite = true
      favorite += 1
      return {...state, favorite, person}
    }
    case types.REMOVE_FAVORITE: {
      let {payload: {person, favorite, people}} = action
      person.isFavorite = false
      favorite -= 1
      if(favorite === 0) {
        return {...state, favorite, people}
      }
      return {...state, favorite, person}
    }
    case types.UPDATE_PERSON: {
      const {payload: {data}} = action
      return {...state, people: data, totalItems: data.length}
    }
    case types.SHOW_FAVORITES: {
      let {payload: {people}} = action
      people = findFavorites(people)
      return {...state, people, totalItems: people.length}
    }
    default:
      return state
  }
}

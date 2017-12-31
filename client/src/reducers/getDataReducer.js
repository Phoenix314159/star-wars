import types from '../actions/types'
import findFavorites from '../utilities/findFavorites'
export default (state = {}, action) => {
  const {type} = action
  switch(type) {
    case types.GET_PEOPLE_DATA: {
      const {payload: {data}} = action
      return {...state, people: data, hideButton: true, favorite: 0, showButton: false}
    }
    case types.GET_PLANETS_DATA: {
      const {payload: {data}} = action
      return {...state, planets: data}
    }
    case types.ADD_FAVORITE: {
      let {payload: {person, favorite}} = action
      person.isFavorite = true
      favorite += 1
      return {...state, favorite, person, showButton: true}
    }
    case types.REMOVE_FAVORITE: {
      let {payload: {person, favorite, people}} = action
      person.isFavorite = false
      favorite -= 1
      if(favorite === 0) {
        return {...state, showButton: false}
      }
      for(let x in people) {
        if(x.isFavorite) {
          delete x.isFavorite
        }
     }
      return {...state, favorite, people}
    }
    case types.REMOVE: {
      let {payload: {people, person, favorite}} = action
      favorite -= 1
      people.splice(people.indexOf(person), 1)
      return {...state, people, favorite}
    }
    case types.SHOW_FAVORITES: {
      let {payload: {people, planets}} = action
      people = findFavorites(people)
      return {...state, people, planets, hideButton: false}
    }
    case types.SHOW_EDIT: {
      const {payload: {people, person, planets}} = action
      return {...state, people, person, planets, cancel: true}
    }
    case types.PEOPLE_SEARCH: {
      const {payload: {data, term}} = action
      if (term === '') {
        return {...state, people: data}
      }
     return state
    }
    default:
      return state
  }
}

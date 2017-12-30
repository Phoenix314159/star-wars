import types from '../actions/types'
import findFavorites from '../utilities/findFavorites'
export default (state = {}, action) => {
  const {type} = action
  switch(type) {
    case types.GET_PEOPLE_DATA: {
      const {payload: {data}} = action
      return {...state, people: data, firstLoadData: true}
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
      let {payload: {person, favorite, people, page, show}} = action
      person.isFavorite = false
      favorite -= 1
      if(show) {
        people = people.filter(a => (a.isFavorite !== false))
        return {...state, favorite, people}
      }
     for(let x in people) {
        if(x.isFavorite) {
          delete x.isFavorite
        }
     }
      return {...state, favorite, people}
    }
    case types.REMOVE: {
      let {payload: {people, person}} = action
      people.splice(people.indexOf(person), 1);
      return {...state, people}
    }
    case types.UPDATE_PERSON: {
      const {payload: {data}} = action
      return {...state, people: data, totalItems: data.length}
    }
    case types.SHOW_FAVORITES: {
      let {payload: {people, planets}} = action
      people = findFavorites(people)
      return {...state, people, planets, totalItems: people.length}
    }
    default:
      return state
  }
}

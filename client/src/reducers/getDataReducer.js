import types from '../actions/types'
import findFavorites from '../utilities/findFavorites'
import removeFavorite from '../utilities/removeFavorite'
import remove from '../utilities/remove'

export default (state = {}, action) => {
  const {type} = action
  switch (type) {
    case types.SET_IMAGES: {
      const {payload: {setImages}} = action
      return {...state, setImages}
    }
    case types.GET_PEOPLE_DATA: {
      const {payload: {data}} = action
      return {...state, people: data, hideButton: true, favorite: 0, showButton: false, ok: false, initialLoad: true}
    }
    case types.GET_PLANETS_DATA: {
      const {payload: {data}} = action
      return {...state, planets: data}
    }
    case types.GET_IMAGE_URL: {
      const {payload: {data}} = action
      return {...state, imageUrl: data}
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
      if (favorite === 0) {
        return {...state, showButton: false, favorite}
      }
      people = removeFavorite(people)
      return {...state, people, favorite}
    }
    case types.REMOVE: {
      let {payload: {people, person, favorite}} = action
      favorite -= 1
      people = remove(people, person)
      return {...state, favorite}
    }
    case types.SHOW_FAVORITES: {
      let {payload: {people, planets}} = action
      people = findFavorites(people)
      return {...state, people, planets, hideButton: false, showButton: false, initialLoad: false}
    }
    case types.SHOW_EDIT: {
      const {payload: {people, person, planets}} = action
      return {...state, people, person, planets, ok: false, showButton: false}
    }
    case types.UPDATE_PERSON: {
      const {payload: {data, planets, newImage}} = action
      return {...state, people: data, planets, newImageUrl: newImage, ok: true}
    }
    case types.MOUSE_OVER: {
      const {payload: {boolean}} = action
      return {...state, hover: boolean}
    }
    case types.SHOW_BUTTON: {
      const {payload: {boolean}} = action
      return {...state, showButton: boolean, hideButton: true}
    }
    default:
      return state
  }
}
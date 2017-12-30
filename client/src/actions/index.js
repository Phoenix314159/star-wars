import types from './types'
import axios from 'axios'

export const getPeopleData = url => async dispatch => {
  const {data: {data}} = await axios.get(url)
  return dispatch({
    type: types.GET_PEOPLE_DATA,
    payload: {data}
  })
}

export const getPlanetData = url => async dispatch => {
  const {data: {data}} = await axios.get(url)
  return dispatch({
    type: types.GET_PLANETS_DATA,
    payload: {data}
  })
}

export const updatePerson = (newName, newImage, newBirthday,
                             newPlanet, id, url, page, planetData, term) => async dispatch => {
  if (!newName || !newImage || !newBirthday) {
    return null
  }
  else {
    const obj = {
      name: newName,
      image: newImage,
      birth_year: newBirthday,
      homeworld: newPlanet
    }
    await axios.patch(`${url}/${id}`, obj)
    const {data} = await axios.get(url)
    return dispatch({
      type: types.UPDATE_PERSON,
      payload: {data, page, planetData, term}
    })
  }
}

export const paginateFunc = (page, subData1, subData2) => (
  {
    type: types.PAGINATE,
    payload: {page, subData1, subData2}
  }
)

export const peopleSearch = (data, planetData, term, page) => (
  {
    type: types.PEOPLE_SEARCH,
    payload: {data, planetData, term, page}
  }
)

export const setNewPlanet = (planets, name) => (
  {
    type: types.NEW_PLANET,
    payload: {planets, name}
  }
)

export const hidePagBar = boolean => (
  {
    type: types.HIDE_PAGBAR,
    payload: {boolean}
  }
)

export const showEdit = (boolean, people, person) => (
  {
    type: types.SHOW_EDIT,
    payload: {boolean, people, person}
  }
)

export const addFavorite = (person, favorite, planets) => (
  {
    type: types.ADD_FAVORITE,
    payload: {person, favorite, planets}
  }
)

export const removeFavorite = (person, favorite, people, page) => (
  {
    type: types.REMOVE_FAVORITE,
    payload: {person, favorite, people, page}
  }
)

export const showFavorites = (people, planets, page) => {
  return {
    type: types.SHOW_FAVORITES,
    payload: {people, planets, page}
  }
}

export const reset = (people, favorite, url) => async dispatch => {
  if (people.length === 0) {
    const {data} = await axios.get(url)
    return dispatch({
      type: types.GET_PEOPLE_DATA,
      payload: {data}
    })
  }
}



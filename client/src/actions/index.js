import types from './types'
import axios from 'axios'

export const resetImages = url => async dispatch => {
  const {data} = await axios.put(url, null) //on page refresh images are set back to original
  if(data === 'pictures updated') {
    const setImages = true
    return dispatch({
      type: types.SET_IMAGES,
      payload: {setImages}
    })
  }
}

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

export const getImageUrl = url => async dispatch => {
  const {data} = await axios.get(url)
  return dispatch({
    type: types.GET_IMAGE_URL,
    payload: {data}
  })
}

export const updatePerson = (newName, newImage, newBirthday, newPlanet,
                             id, page, planets, person, term) => async dispatch => {
  const obj = {
    name: newName,
    image: newImage,
    birth_year: newBirthday,
    homeworld: newPlanet
  }
  const {data: {data}} = await axios.put(`${'/api/update_person'}?id=${id}`, obj)
  return dispatch({
    type: types.UPDATE_PERSON,
    payload: {data, planets, page, newImage, person, term}
  })
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

export const showEdit = (people, person, planets) => (
  {
    type: types.SHOW_EDIT,
    payload: {people, person, planets}
  }
)

export const showFavorites = (people, planets, page) => (
  {
    type: types.SHOW_FAVORITES,
    payload: {people, planets, page}
  }
)

export const addFavorite = (person, favorite, planets) => (
  {
    type: types.ADD_FAVORITE,
    payload: {person, favorite, planets}
  }
)

export const removeFavorite = (person, favorite, people) => (
  {
    type: types.REMOVE_FAVORITE,
    payload: {person, favorite, people}
  }
)
export const removeFavorited = (people, person, page, favorite) => (
  {
    type: types.REMOVE,
    payload: {people, person, page, favorite}
  }
)

export const openPopUp = (show, index, name, image, info) => (
  {
    type: types.OPEN_POPUP,
    payload: {show, index, name, image, info}
  }
)
export const onMouseOver = boolean => (
  {
    type: types.MOUSE_OVER,
    payload: {boolean}
  }
)

export const showFavoritesButton = boolean => (
  {
    type: types.SHOW_BUTTON,
    payload: {boolean}
  }
)





import types from '../actions/types'
import findId from '../utilities/findId'

export default (state = {}, action) => {
  const {type} = action
  switch (type) {
    case types.SHOW_EDIT: {
      const {payload: {person}} = action
      const {name, image, pk} = person
      return {...state, name, image, id: pk}
    }
    case types.NEW_PLANET: {
      const {payload: {planets, name}} = action
      const newPlanet = findId(planets, name)
      return {...state, newPlanet}
    }
    default:
      return state
  }
}
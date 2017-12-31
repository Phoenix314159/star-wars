import types from '../actions/types'
import findPerson from '../utilities/findPerson'
import findId from '../utilities/findId'

export default (state = {}, action) => {
  const {type} = action
  switch (type) {
    case types.SHOW_EDIT: {
      const {payload: {people, person}} = action
      const {name, image} = findPerson(people, person)
      const id = findId(people, name)
      return {...state, name, image, id}
    }
    case types.NEW_PLANET: {
      const {payload: {planets, name}} = action
      return {...state, newPlanet: findId(planets, name)}
    }
    default:
      return state
  }
}
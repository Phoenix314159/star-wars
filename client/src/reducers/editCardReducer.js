import types from '../actions/types'
import findPerson from '../utilities/findPerson'
import findId from '../utilities/findId'

export default (state = {}, action) => {
  const {type} = action
  switch (type) {
    case types.SHOW_EDIT: {
      const {payload: {boolean, people, person}} = action
      if (!people || !person) {
        return {...state, editCard: boolean}
      }
      const {name, image} = findPerson(people, person)
      const id = findId(people, name)
      return {...state, editCard: boolean, name, image, id}
    }
    case types.NEW_PLANET: {
      const {payload: {planets, name}} = action
      return {...state, newPlanet: findId(planets, name)}
    }
    default:
      return state
  }
}
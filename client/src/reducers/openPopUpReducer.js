import types from '../actions/types'

export default (state = {}, action) => {
  const {type} = action
  switch (type) {
    case types.OPEN_POPUP:
      const {payload: {show, index, name, image, info}} = action
      if(!show) {
        return {...state, show, starWarsHide: false}
      }
      return {...state, show, index, name, image, info, starWarsHide: true}
    default:
      return state
  }
}

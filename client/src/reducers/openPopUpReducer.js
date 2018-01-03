import types from '../actions/types'

export default (state = {}, action) => {
  const {type} = action
  switch (type) {
    case types.OPEN_POPUP:  //on popUp close, state.open.pageNum = -1
      const {payload: {show, index, image}} = action
      return {...state, show, index, image}
    default:
      return state
  }
}

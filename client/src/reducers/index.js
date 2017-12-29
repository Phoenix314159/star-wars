import {combineReducers} from 'redux'
import getDataReducer from './getDataReducer'
import paginateReducer from './paginateReducer'
import searchReducer from './searchReducer'
import editCardReducer from './editCardReducer'

export default combineReducers({
  main: getDataReducer,
  paginate: paginateReducer,
  search: searchReducer,
  edit: editCardReducer
})

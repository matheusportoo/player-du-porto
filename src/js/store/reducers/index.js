import { combineReducers } from 'redux'
import { FETCH_ALBUMS_SUCCESS } from '../types'

const initialState = {
  albums: {}
}

export function albums(state = initialState, action) {
  switch (action.type) {
    case FETCH_ALBUMS_SUCCESS:
      return Object.assign({}, action.payload)

    default:
      return state.albums
  }
}

export default combineReducers({
  albums
})

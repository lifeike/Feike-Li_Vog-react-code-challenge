import * as actionTypes from "../action-types"

let initialState = { list: [] }

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_HOMES:
      let list = action.payload
      return { state, list }
    case actionTypes.GET_HOMES_BYID:
      let listById = action.payload
      return { state, list: [{ ...listById }] }
    case actionTypes.DEL_HOMES:
      return { ...state }
    case actionTypes.ADD_HOMES:
      return { ...state }
    case actionTypes.EDIT_HOMES:
      return { ...state }
    default:
      return state
  }
}

export default reducer

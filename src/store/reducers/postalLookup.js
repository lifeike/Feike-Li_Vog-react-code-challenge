import * as actionTypes from "../action-types"

let initialState = { postalLookup: "" }

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_POSTAL:
      return { postalLookup: action.payload }
    default:
      return state
  }
}

export default reducer

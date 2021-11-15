import * as actionTypes from "../action-types"

let initialState = { countryList: [], universitiesList: [] }

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_COUNTRY:
      return { ...state, countryList: action.payload }
    case actionTypes.GET_UNIVERSITIES:
      return { ...state, universitiesList: action.payload }
    default:
      return state
  }
}

export default reducer

import { connectRouter } from "connected-react-router"

import { combineReducers } from "redux"
import history from "../../history"
import postalLookup from "./postalLookup"
import loading from "./loading"
let reducers = {
  router: connectRouter(history),
  postalLookup,
  loading,
}

export default combineReducers(reducers)

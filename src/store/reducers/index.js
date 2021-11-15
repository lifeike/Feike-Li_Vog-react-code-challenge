import { connectRouter } from "connected-react-router"
import { combineReducers } from "redux"
import history from "../../history"
import home from "./home"
import loading from "./loading"

let reducers = {
  router: connectRouter(history),
  home,
  loading,
}

const combinedReducer = combineReducers(reducers)
export default combinedReducer

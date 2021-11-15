import * as actionTypes from "../action-types"
import { getPostal } from "../../api/postalLookup"

const actionCreators = {
  getPostal(code) {
    return function (dispatch) {
      ;(async () => {
        try {
          dispatch({ type: actionTypes.SHOW_LOADING, payload: true })
          let res = await getPostal(code)
          dispatch({ type: actionTypes.GET_POSTAL, payload: res })
        } catch (error) {
          console.log(error)
        } finally {
          dispatch({ type: actionTypes.HIDE_LOADING, payload: false })
        }
      })()
    }
  },
}

export default actionCreators

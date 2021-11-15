import * as actionTypes from "../action-types"
import { getCountries, getUniversities } from "../../api/universities"

const actionCreators = {
  getCountries() {
    return (dispatch) =>
      new Promise(async (resolve, reject) => {
        try {
          dispatch({ type: actionTypes.SHOW_LOADING, payload: true })
          let country = []
          let res = await getCountries()
          res.forEach((item) => {
            country.push(item.name)
          })
          dispatch({ type: actionTypes.GET_COUNTRY, payload: country })
          resolve(country)
        } catch (error) {
          console.log(error)
        } finally {
          dispatch({ type: actionTypes.HIDE_LOADING, payload: false })
        }
      })
  },

  getUniversities(country) {
    return function (dispatch) {
      ;(async () => {
        try {
          dispatch({ type: actionTypes.SHOW_LOADING, payload: true })
          let res = await getUniversities(country)
          dispatch({ type: actionTypes.GET_UNIVERSITIES, payload: res })
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

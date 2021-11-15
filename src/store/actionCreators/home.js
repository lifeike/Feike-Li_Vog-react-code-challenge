import * as actionTypes from "../action-types"
import { getHomeData, getHomeDataById, addHomeData, editHomeData, delHomeData } from "../../api/home"

const actionCreators = {
  getHomeData(data) {
    return function (dispatch) {
      ;(async () => {
        try {
          dispatch({ type: actionTypes.SHOW_LOADING, payload: true })
          let res = await getHomeData(data)
          dispatch({ type: actionTypes.GET_HOMES, payload: res })
        } catch (error) {
          console.log(error)
        } finally {
          dispatch({ type: actionTypes.HIDE_LOADING, payload: false })
        }
      })()
    }
  },
  getHomeDataById(id) {
    return function (dispatch) {
      ;(async () => {
        try {
          dispatch({ type: actionTypes.SHOW_LOADING, payload: true })
          let res = await getHomeDataById(id)
          dispatch({ type: actionTypes.GET_HOMES_BYID, payload: res })
        } catch (error) {
          console.log(error)
        } finally {
          dispatch({ type: actionTypes.HIDE_LOADING, payload: false })
        }
      })()
    }
  },
  delHomeData(id) {
    return (dispatch) =>
      new Promise(async (resolve, reject) => {
        try {
          dispatch({ type: actionTypes.SHOW_LOADING, payload: true })
          let res = await delHomeData(id)
          resolve()
        } catch (error) {
          console.log(error)
        } finally {
          dispatch({ type: actionTypes.HIDE_LOADING, payload: false })
        }
      })
  },
  addHomeData(obj) {
    return (dispatch) =>
      new Promise(async (resolve, reject) => {
        try {
          dispatch({ type: actionTypes.SHOW_LOADING, payload: true })
          let res = await addHomeData(obj)
          if (res) {
            resolve(res)
          }
        } catch (error) {
          console.log(error)
        } finally {
          dispatch({ type: actionTypes.HIDE_LOADING, payload: false })
        }
      })
  },
  editHomeData(id, obj) {
    return (dispatch) =>
      new Promise(async (resolve, reject) => {
        try {
          dispatch({ type: actionTypes.SHOW_LOADING, payload: true })
          let res = await editHomeData(id, obj)
          if (res) {
            resolve(res)
          }
        } catch (error) {
          console.log(error)
        } finally {
          dispatch({ type: actionTypes.HIDE_LOADING, payload: false })
        }
      })
  },
}

export default actionCreators

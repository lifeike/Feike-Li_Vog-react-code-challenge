import axios from "../utils/request"
export function getHomeData(params) {
  return axios({
    url: "http://jsonplaceholder.typicode.com/posts",
    method: "GET",
    params,
  })
}
export function getHomeDataById(id) {
  return axios({
    url: `http://jsonplaceholder.typicode.com/posts/${id}`,
    method: "GET",
  })
}
export function addHomeData(data) {
  return axios({
    url: `http://jsonplaceholder.typicode.com/posts/`,
    method: "POST",
    data,
  })
}
export function editHomeData(id, data) {
  return axios({
    url: `http://jsonplaceholder.typicode.com/posts/${id}`,
    method: "PUT",
    data,
  })
}
export function delHomeData(id) {
  return axios({
    url: `http://jsonplaceholder.typicode.com/posts/${id}`,
    method: "DELETE",
  })
}

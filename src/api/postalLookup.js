import axios from "../utils/request"

export function getPostal(code) {
  return axios({
    url: `https://api.zippopotam.us/us/${code}`,
    method: "get",
  })
}

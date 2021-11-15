import axios from "../utils/request"
export function getCountries() {
  return axios({
    url: "https://restcountries.com/v2/all",
    method: "get",
  })
}

export function getUniversities(country) {
  return axios({
    url: `http://universities.hipolabs.com/search?country=${country}`,
    method: "get",
  })
}

import { setup } from "axios-cache-adapter"
import { message } from "antd"
let axios = setup({
  timeout: 60000,
  cache: {
    maxAge: 1000 * 60,
    exclude: {
      paths: ["/*/posts/*", "/*/us/*"],
    },
  },
})

axios.interceptors.request.use(
  (config) => {
    config.headers = { "Content-Type": "application/json" }
    return config
  },
  (error) => Promise.reject(error)
)
axios.interceptors.response.use(
  (response) => response.data,
  (error) => {
    message.error("response error")
    Promise.reject(error)
  }
)
export default axios

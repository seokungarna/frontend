// axios
import axios from 'axios'

// const baseURL = ''

// export default axios.create({
//   baseURL
//   // You can add your headers here
// })

console.log(process.env.VUE_APP_BACKEND_URL);
export default  axios.create({
  baseURL: process.env.VUE_APP_BACKEND_URL,
  withCredentials: true,
  headers: {
    "X-Requested-With": 'XMLHttpRequest',
    "Content-Type": 'application/json'
  }
})


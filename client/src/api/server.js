import Axios from 'axios'

let serverURL = "https://hackers-pl.herokuapp.com"

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  serverURL = "http://localhost:4000"
}

const server = Axios.create({
  baseURL: serverURL
})

export default server
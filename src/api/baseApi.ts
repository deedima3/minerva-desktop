import axios from "axios"

const client = axios.create({
    baseURL: "http://localhost:3000/api",
    timeout: 1000,
})

export default client
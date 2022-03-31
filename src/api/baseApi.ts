import axios from "axios"

const client = axios.create({
    baseURL: "https://minerva-production.up.railway.app/api",
    withCredentials: true,
})

export default client
import axios from 'axios'

export const userClient = axios.create({
    baseURL: 'http://localhost:9001',
    headers: {
        'Content-Types':'application/json'
    },
    withCredentials:true
})
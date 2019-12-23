import axios from 'axios'

export const ReimbursementClient = axios.create({
    baseURL: 'http://localhost:9001', 
    headers:{
        'Content-Type':'application/json'
    },
    withCredentials:true
})
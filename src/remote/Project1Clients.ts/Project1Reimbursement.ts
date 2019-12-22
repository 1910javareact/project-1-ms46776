import axios from 'axios'



export const UserClient = axios.create({
    baseURL:'http://localhost:9001',
    headers:{
        'Content-Type':'application/json'
    },
    withCredentials:true
})
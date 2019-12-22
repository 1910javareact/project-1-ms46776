import { userClient } from "./Project1Client";

export async function ersLogin(username:string, password:string){
    const credentials = {
        username,
        password
    }
    try{
        const response = await userClient.post('/login', credentials)
        if(response.status===200){
            return{
                status:response.status,
                body: response.data
            }
        }else{
            return{
                status:response.status,
                body:undefined
            }
        }
    }catch(e){
        console.log(e);
        throw new Error('Something Went Wrong')
    }
    
}

export const getAllUsers = async () => {
    try{
        let response = await userClient.get('/user')
        if(response.status === 200){
            return{
                status:response.status,
                body:response.data
            }
        }else{
            return {
                status:response.status,
                body:undefined
            }
        }
    }catch(e){
        console.log(e);
        throw new Error('Something Went Wrong')
    }
}

export const getUserById = async (id:number) => {
    try{
        let response = await userClient.get('/user/' + id)
        if(response.status === 200){
            return{
                status:response.status,
                body:response.data
            }
        }else{
            return {
                status:response.status,
                body:undefined
            }
        }
    }catch(e){
        console.log(e);
        throw new Error('Something Went Wrong 1')
    }
}

export async function updateUser(userId: number, username: string, password: string, firstName: string, lastName: string, email: string, role: number) {
    const fields = {
        userId,
        username,
        password,
        firstName,
        lastName,
        email,
        role
    }
    try {
        let response = await userClient.patch('/user', fields)
        if (response.status === 200) {
            return {
                status: response.status,
                body: response.data
            }
        } else {
            return {
                status: response.status,
                body: undefined
            }
        }
    } catch (e) {
        console.log(e);
        throw new Error('Something Went Wrong')
    }
}
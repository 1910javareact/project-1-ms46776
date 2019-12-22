import { userClient } from "./Project1Client";


export async function userLogin(username:string, password:string){
   
    const credentials = {
        username,
        password
    }
    try{
        const response = await userClient.post('/login', credentials)
        if(response.status===200){
            console.log(response);
            
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
        throw new Error('Something Went Wrong1')
    }
}








// export async function userLogin(username:string, password:string){
//     const credentials = {
//         username, 
//         password
//     }
//     try{
//         const response = await fetch('http://localhost:7000/login',{
//             //this object is the config for our request
//             //we use it, to set headers and method and such
//             method:'POST',
//             credentials:'include',
//             body: JSON.stringify(credentials),
//             headers:{
//                 'content-type':'application/json'
//             }
//         })
//         let test = await response.json()
//         console.log(test);
//         return test
//     }catch(e){
//         console.log(e);
        
//     }


// }
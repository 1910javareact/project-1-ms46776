import { userClient } from "./Project1Client";


export const getReimbursementByStatus = async (id:number) => {
    try{
        let response = await userClient.get('/reimbursements/status/' + id)
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
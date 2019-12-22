import { getUserById } from "../remote/Project1Clients.ts/Project1User"



export const UserTypes = {
    INVALID_CREDENTIALS: 'TOKEN_HAS_EXPIRED',
    SUCCESSFUL_REIMBURSEMENT: 'USER_FOUND',
    UNSUCCESSFUL_FAILED: 'User_NOT_FOUND'
}
export const userID = (id:number) => async (dispatch:any) => {

    try{
        let res = await getUserById(id)//getUserById is coming from remote(User-by-id.ts)
        //a successful login
        if(res.status === 200){
            //this is how do it when we have async operations
            dispatch({
                type:UserTypes.SUCCESSFUL_REIMBURSEMENT,
                payload:{
                    User:res.body//payload is data which is comimg fron server (database)
                }
            })
        }else{
            dispatch({
                type:UserTypes.INVALID_CREDENTIALS
            })
        }
    }catch(e){
        dispatch({
            type:UserTypes.UNSUCCESSFUL_FAILED
        })
    }
    
}
import { IUser } from "."
import { User } from "../models/user"
import { UserTypes } from "../action-mappers/user-action-mapper"



const initialStater: IUser = {
    User: [new User(0, '', '', '', '','',0)]
 }
 
 
 
 export const userReducer = (state = initialStater, action:any) => {
     
     switch (action.type) {
         case UserTypes.SUCCESSFUL_REIMBURSEMENT:{
            
             return {
                 ...state,
                 User:action.payload.User,
               
             }
         }
         default:
             return state
     }
 
 }
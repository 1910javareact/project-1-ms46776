import { combineReducers } from "redux";

import { loginReducer } from "./login-reducer";

import { User } from "../models/user";
import { Reimbursement } from "../models/reimbursement";
import { reimbursementReducer } from "./reimbursement-reducer";
import { useReducer } from "react";
import { userReducer } from "./user-reducer";


export interface ILoginState {
    user:User
}



export interface IState{
    reimb: IReimbursment,
    login:ILoginState,
    user:IUser
    
    
}


export const state = combineReducers<IState>({
    login:loginReducer,
    reimb:reimbursementReducer,
    user:userReducer
    
})



export interface IReimbursment {
    Reimbursement:Reimbursement[]
}
export interface IUser{
    User:User[]
}
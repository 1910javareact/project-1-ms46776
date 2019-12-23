import { combineReducers } from "redux";
import { User } from "../models/user";
import { loginReducer } from "./login-reducer";
import { userInfoReducer } from "./user-reducer";
import { Reimbursement } from "../models/reimbursement";


import { userByIdReducer } from "./user-by-id-reducer";
import { reimbursementByStatusIdReducer } from "./reimbursement-by-status-id-reducer";
import { reimbursementInfoReducer } from "./reimbursement-info-reducer";

//this file will contain the type definitions for our store
//there will be many interfaces, that contain what each chunk of store should have
//there will be a special function called combine reducers
//this function will take all of the individual reducers and turn them into one super reducer

//this is specifically, the state from the login component
//other things will be able to use it, but it is under the nme of login
export interface ILoginState {
    user: User
}

export interface IUserState {
    user: User
}

export interface IReimbursementState {
    reimbursement: Reimbursement[]
}

//will be the typing of our entire global state
export interface IState {
    login: ILoginState,
    user: IUserState,
    userById: IUserState,
    reimbursementByStatusId: IReimbursementState,
    reimbursementInfo: IReimbursementState
  
}

//this will combine all of our reducers
//and make sure they fufill the state required by IState
export const state = combineReducers<IState>({
    login: loginReducer,
    user: userInfoReducer,
    userById: userByIdReducer,
    reimbursementByStatusId: reimbursementByStatusIdReducer,
    reimbursementInfo: reimbursementInfoReducer
    
})
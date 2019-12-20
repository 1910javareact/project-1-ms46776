import { User } from "../models/user"
import { ILoginState } from "."
import { ersLoginTypes } from "../action-mappers/login-action-mapper"

const initialState: ILoginState = {
    user: new User(0, '', '', '', '', '', 0)
}

export const loginReducer = (state = initialState, action:any) => {
    
    switch (action.type) {
        case ersLoginTypes.SUCCESSFUL_LOGIN:{
            return {
                ...state,
                user:action.payload.user
            }
        }
        default:
            return state
    }

}
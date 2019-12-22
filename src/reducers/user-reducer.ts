
import { ILoginState } from ".";
import { User } from "../models/user";
import { ersUserInfoTypes } from "../action-mappers/user-action-mapper";


const initialState: ILoginState = {
    user: new User(0, '', '', '', '', '', 0)
}

export const userInfoReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ersUserInfoTypes.USER_INFO: {
            return {
                ...state,
                user: action.payload.user
            }
        }
        default:
            return state
    }
}
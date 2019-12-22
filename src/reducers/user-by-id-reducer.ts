import { IUserState } from ".";
import { User } from "../models/user";
import { ersUserByIdType } from "../action-mappers/user-by-id-action-mapper";

const initialState: IUserState = {
    user: new User(0, '', '', '', '', '',0)
}

export const userByIdReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ersUserByIdType.GOT_USER_BY_ID: {
            return {
                ...state,
                user: action.payload.user
            }
        }
        default:
            return state
    }
}
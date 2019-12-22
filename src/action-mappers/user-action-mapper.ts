import { User } from "../models/user"

export const ersUserInfoTypes = {
    USER_INFO: 'ERS_USER_INFO'
}

export const userAction = (user: User) => {
    return {
        type: ersUserInfoTypes.USER_INFO,
        payload: {
            user
        }
    }
}

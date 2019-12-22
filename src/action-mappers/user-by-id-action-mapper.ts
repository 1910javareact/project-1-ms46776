import { getUserById } from "../remote/Project1Clients.ts/Project1User"


export const ersUserByIdType = {
    GOT_USER_BY_ID: 'ERS_GOT_USER_BY_ID',
    FAILED_USER_BY_ID: 'ERS_FAILED_USER_BY_ID'
}

export const ersUserById = (userId: number) => async (dispatch: any) => {
    try {
        let res = await getUserById(userId)
        if (res.status === 200) {
            dispatch({
                type: ersUserByIdType.GOT_USER_BY_ID,
                payload: {
                    user: res.body
                }
            })
        } else {
            dispatch({
                type: ersUserByIdType.FAILED_USER_BY_ID
            })
        }

    } catch (e) {
        dispatch({
            type: ersUserByIdType.FAILED_USER_BY_ID
        })
    }
}
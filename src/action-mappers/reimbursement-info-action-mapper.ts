import { ersRemoteReimbursement } from "../remote/Project1Clients.ts/Project1Reimbursement"

export const ersReimbursementInfoType = {
    GOT_REIMBURSEMENT_INFO: 'ERS_GOT_REIMBURSEMENT_INFO',
    FAILED_REIMBURSEMENT_INFO: 'ERS_FAILED_REIMBURSEMENT_INFO'
}

export const ersReimbursementInfo = (userId: number) => async (dispatch: any) => {
    try {
        let res = await ersRemoteReimbursement(userId)
        // Request successful
        if (res.status === 200) {
            dispatch({
                type: ersReimbursementInfoType.GOT_REIMBURSEMENT_INFO,
                payload: {
                    reimbursement: res.body
                }
            })
        } else {
            dispatch({
                type: ersReimbursementInfoType.FAILED_REIMBURSEMENT_INFO
            })
        }

    } catch (e) {
        dispatch({
            type: ersReimbursementInfoType.FAILED_REIMBURSEMENT_INFO
        })
    }
}
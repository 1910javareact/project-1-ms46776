import { ersRemoteReimbursementByStatusId } from "../remote/Project1Clients.ts/Project1Reimbursement"




export const ersReimbursementByStatusIdType = {
    GOT_REIMBURSEMENT_BY_STATUS_ID: 'ERS_GOT_REIMBURSEMENT_BY_STATUS_ID',
    FAILED_REIMBURSEMENT_BY_STATUS_ID: 'ERS_FAILED_REIMBURSEMENT_BY_STATUS_ID'
}

export const ersReimbursementByStatusId = (statusId: number) => async (dispatch: any) => {
    try {
        let res = await ersRemoteReimbursementByStatusId(statusId)
        if (res.status === 200) {
            dispatch({
                type: ersReimbursementByStatusIdType.GOT_REIMBURSEMENT_BY_STATUS_ID,
                payload: {
                    reimbursement: res.body
                }
            })
        } else {
            dispatch({
                type: ersReimbursementByStatusIdType.FAILED_REIMBURSEMENT_BY_STATUS_ID
            })
        }

    } catch (e) {
        dispatch({
            type: ersReimbursementByStatusIdType.FAILED_REIMBURSEMENT_BY_STATUS_ID
        })
    }
}
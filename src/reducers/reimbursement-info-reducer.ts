import { IReimbursementState } from ".";
import { Reimbursement } from "../models/reimbursement";
import { ersReimbursementInfoType } from "../action-mappers/reimbursement-info-action-mapper";

const initialState: IReimbursementState = {
    reimbursement: [new Reimbursement(0, 0, 0, 0, 0, '', 0, 0, 0)]
}

export const reimbursementInfoReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ersReimbursementInfoType.GOT_REIMBURSEMENT_INFO: {
            return {
                ...state,
                reimbursement: action.payload.reimbursement
            }
        }
        default:
            return state
    }
}
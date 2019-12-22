import { ReimbTypes } from "../action-mappers/reimbursement-action-mapper"

import { Reimbursement } from "../models/reimbursement"
import { IReimbursment } from "."

const initialState: IReimbursment = {
    Reimbursement: [new Reimbursement(0, 0, 0, 0, 0, '', 0, 0, 0)]
 }
 export const reimbursementReducer = (state = initialState, action:any) => {
     
     switch (action.type) {
         case ReimbTypes.SUCCESSFUL_REIMBURSEMENT:{
             
             return {
                 ...state,
                 Reimbursement:action.payload.Reimbursement,
                
             }
         }
         default:
             return state
     }
 
 }
import React from "react"
import { Reimbursement } from "../../models/reimbursement"

interface IReimbursementsByStatusDisplayRowProps{
    Reimbursement: Reimbursement
}

export const ReimbursementByStatusDisplayRowComponent: React.FC<IReimbursementsByStatusDisplayRowProps> = (props) => { 
    return (
        <tr>
            <td>{props.Reimbursement.reimbursementId}</td>
            <td>{props.Reimbursement.author}</td>
            <td>{props.Reimbursement.amount}</td>
            <td>{props.Reimbursement.dateSubmitted}</td>
            <td>{props.Reimbursement.description}</td>
            <td>{props.Reimbursement.status}</td>
        </tr>
    )
}
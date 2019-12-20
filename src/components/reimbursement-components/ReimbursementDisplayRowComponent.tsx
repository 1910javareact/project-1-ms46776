import React from 'react'
import { Reimbursement } from '../../models/reimbursement'

interface IReimbursementsDisplayRowProps{
    reimbursement: Reimbursement
}

export const ReimbursementsDisplayRowComponent: React.FC<IReimbursementsDisplayRowProps> = (props) => {
    return (
        <tr>
            <td>{props.reimbursement.author}</td>
            <td>{props.reimbursement.description}</td>
            <td>{props.reimbursement.amount}</td>
            <td>{props.reimbursement.dateSubmitted}</td>
            <td>{props.reimbursement.dateResolved}</td>
            <td>{props.reimbursement.resolver}</td>
            <td>{props.reimbursement.status}</td>
            <td>{props.reimbursement.type}</td>
        </tr>
    )
}
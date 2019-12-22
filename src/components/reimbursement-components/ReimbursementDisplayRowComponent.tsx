import React from 'react'
import { TableRow, TableCell } from '@material-ui/core';
import { Reimbursement } from '../../models/reimbursement';

interface IReimbursementRowProps {
    reimbursement: Reimbursement
}

export const ReimbursementRowComponent: React.FC<IReimbursementRowProps> = (props) => {
    return (
        <TableRow>
            <TableCell>{props.reimbursement.reimbursementId}</TableCell>
            <TableCell>{props.reimbursement.author}</TableCell>
            <TableCell>{props.reimbursement.amount}</TableCell>
            <TableCell>{props.reimbursement.dateSubmitted}</TableCell>
            <TableCell>{props.reimbursement.dateResolved}</TableCell>
            <TableCell>{props.reimbursement.description}</TableCell>
            <TableCell>{props.reimbursement.status}</TableCell>
            <TableCell>{props.reimbursement.type}</TableCell>
        </TableRow>
    )
}
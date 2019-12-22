import React from 'react'
import { User } from '../../models/user';
import { TableRow, TableCell } from '@material-ui/core';

interface IUsersRowProps {
    user: User
}

export const UsersRowComponent: React.FC<IUsersRowProps> = (props) => {
    return (
        <TableRow>
            <TableCell>{props.user.userId}</TableCell>
            <TableCell>{props.user.username}</TableCell>
            <TableCell>{props.user.firstName}</TableCell>
            <TableCell>{props.user.lastName}</TableCell>
            <TableCell>{props.user.email}</TableCell>
            
        </TableRow>
    )
}
import React from 'react'
import { User } from '../../models/user'
interface IUserByIdDisplayRowComponent{
User:User
}

export const UserByIdDisplayRowComponent: React.FC<IUserByIdDisplayRowComponent> = (props) =>{
    return(
        <tr>
<td>{props.User.userId}</td>
    <td>{props.User.username}</td>
<td>{props.User.firstName}</td>
<td>{props.User.lastName}</td>
    <td>{props.User.email}</td>
            </tr>
    )
}
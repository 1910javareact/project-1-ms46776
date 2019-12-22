import React from 'react'
import { User } from '../../models/user';
import { Card, Container } from '@material-ui/core';

interface IUserInfoComponentProps {
    user: User
}

export class UserInfoComponent extends React.Component<IUserInfoComponentProps, any>{

    render() {
        return (
            <Container component="main" maxWidth="xs" >
                <Card >
                    <p className="cardP">UserID: {this.props.user.userId}</p>
                    <p className="cardP">Username: {this.props.user.username}</p>
                    <p className="cardP">First name: {this.props.user.firstName}</p>
                    <p className="cardP">Last name: {this.props.user.lastName}</p>
                    <p className="cardP">Email: {this.props.user.email}</p>
            
                </Card>
            </Container>
        )
    }
}
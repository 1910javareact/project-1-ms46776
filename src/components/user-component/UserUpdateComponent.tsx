import React, { SyntheticEvent } from 'react'
import { Container, Card, TextField, Button } from '@material-ui/core'
import { updateUser } from '../../remote/Project1Clients.ts/Project1User'
import { Role } from '../../models/role'

export class UpdateUserComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            updated: false,
            userId: 0,
            username: '',
            password: '',
            firstname: '',
            lastname: '',
            email: '',
            role: 0,
        }
    }
    updateUserId = (e: any) => {
        this.setState({
            ...this.state,
            userId: e.target.value
        })
    }
    updateUsername = (e: any) => {
        this.setState({
            ...this.state,
            username: e.target.value
        })
    }
    updatePassword = (e: any) => {
        this.setState({
            ...this.state,
            password: e.target.value
        })
    }
    updateFirstname = (e: any) => {
        this.setState({
            ...this.state,
            firstname: e.target.value
        })
    }
    updateLastname = (e: any) => {
        this.setState({
            ...this.state,
            lastname: e.target.value
        })
    }
    updateEmail = (e: any) => {
        this.setState({
            ...this.state,
            email: e.target.value
        })
    }
    updateRole = (e: any) => {
        this.setState({
            ...this.state,
            role: new Role(e.target.value, '')
        })
    }
    submitUpdate = async (e: SyntheticEvent) => {
        e.preventDefault()
        try {
            let u = await updateUser(this.state.userId, this.state.username, this.state.password, this.state.firstname, this.state.lastname, this.state.email, this.state.role)
            if (u.status === 200) {
                this.setState({
                    ...this.state,
                    updated: true
                })
            } else {
                this.setState({
                    ...this.state,
                    updated: false
                })
            }
        } catch (e) {
            console.log(e);

        }


    }

    render() {
        let message = () => {
            if (this.state.updated) {
                return <p>User Updated</p>
            }
        }
        return (
            <Container component="main" maxWidth="xs">
                <Card>
                    <form onSubmit={this.submitUpdate} className="updateComponent" noValidate autoComplete="off">
                        <TextField value={this.state.userId} onChange={this.updateUserId} id="standard-basic-1" label="User ID" />
                        <TextField value={this.state.username} onChange={this.updateUsername} id="standard-basic-2" label="Username" />
                        <TextField value={this.state.password} onChange={this.updatePassword} id="standard-basic-3" label="Password" />
                        <TextField value={this.state.firstname} onChange={this.updateFirstname} id="standard-basic-4" label="First Name" />
                        <TextField value={this.state.lastname} onChange={this.updateLastname} id="standard-basic-5" label="Last Name" />
                        <TextField value={this.state.email} onChange={this.updateEmail} id="standard-basic-6" label="Email" />
                        <TextField value={this.state.role.roleId} onChange={this.updateRole} id="standard-basic" label="Role" />
                        <br />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className='{classes.submit}'
                        >
                            Update User INFO
                        </Button>
                    </form>
                    {message()}
                </Card>
            </Container>
        )
    }
}
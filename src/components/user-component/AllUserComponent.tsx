import React from 'react'
import { Table, Container, Card, TableHead, TableRow, TableBody, TableCell } from '@material-ui/core'
import { User } from '../../models/user'
import { UsersRowComponent } from './UserDisplayRow'
import { getAllUsers } from '../../remote/Project1Clients.ts/Project1User'

interface IAllUsersState {
    allUsers: User[]
}

export class AllUsersComponent extends React.Component<any, IAllUsersState>{
    constructor(props: any) {
        super(props)
        this.state = {
            allUsers: []
        }
    }

    async componentDidMount() {
        try {
            let g = await getAllUsers()
            if (g.status === 200) {
                this.setState({
                    ...this.state,
                    allUsers: g.body
                })
            }
        } catch (e) {
            console.log(e);

        }
    }

    render() {
        let rows = this.state.allUsers.map((e) => {
            return <UsersRowComponent user={e} key={'user ' + e.userId} />
        })
        return (
            <Container component="main" maxWidth="md" >
                <Card>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>User ID</TableCell>
                                <TableCell>Username</TableCell>
                                <TableCell>First Name</TableCell>
                                <TableCell>Last Name</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Role</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows}
                        </TableBody>
                    </Table>
                </Card>
            </Container>
        )
    }
}
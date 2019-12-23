import React, { SyntheticEvent } from "react"
import { Container, Card, TextField, Button } from "@material-ui/core"
import { ersRemoteUpdateReimbursement } from "../../remote/Project1Clients.ts/Project1Reimbursement"


export class UpdateReimbursementComponent extends React.Component<any, any>{
    constructor(props: any) {
        super(props)
        this.state = {
            updated: '',
            reimbursementId: 0,
            status: 1
        }
    }
    updateReimbursementId = (e: any) => {
        this.setState({
            ...this.state,
            reimbursementId: e.target.value
        })
    }
    updateStatus = (e: any) => {
        this.setState({
            ...this.state,
            status: e.target.value
        })
    }
    updateReimbursement = async (e: SyntheticEvent) => {
        e.preventDefault()
        try {
            let u = await ersRemoteUpdateReimbursement(this.state.reimbursementId, this.state.status)
            if (u.status === 200) {
                this.setState({
                    ...this.state,
                    updated: 'Updated'
                })
            } else {
                this.setState({
                    ...this.state,
                    updated: u.status
                })
            }
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <Container component="main" maxWidth="xs">
                <Card>
                    <form onSubmit={this.updateReimbursement} className="updateComponent" noValidate autoComplete="off">
                        <TextField onChange={this.updateReimbursementId} id="standard-basic-1" label="Reimbursement ID" />
                        <br />
                        <TextField onChange={this.updateStatus} id="standard-basic-3" label="Status" />
                        <br />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className='{classes.submit}'
                        >
                            Update
                        </Button>
                    </form>
                    <p>{this.state.updated}</p>
                </Card>
            </Container>
        )
    }
}
import React, { SyntheticEvent } from "react"
import { ersRemoteUpdateReimbursement } from "../../remote/Project1Clients.ts/Project1Reimbursement"
import { Container, Card, TextField, Button, Typography } from "@material-ui/core"

export class UpdateReimbursementComponent extends React.Component<any, any>{
    constructor(props: any) {
        super(props)
        this.state = {
            author: 0,
            amount: 0,
            dateSubmitted: 0,
            dateResolved: 0,
            description: '',
            resolver: 0,
            status: 0,
            type: 0
        }
    }
    updateReimbursementId = (e: any) => {
        this.setState({
            ...this.state,
            reimbursementId: e.target.value
        })

    }
    updateAuthor = (e: any) => {
        this.setState({
            ...this.state,
            author: e.target.value
        })
    }

    updateAmount = (e: any) => {
        this.setState({
            ...this.state,
            amount: e.target.value
        })
    }

    updateDateSubmitted = (e: any) => {
        this.setState({
            ...this.state,
            dateSubmitted: e.target.value
        })
    }

    updateDateResolved = (e: any) => {
        this.setState({
            ...this.state,
            dateResolved: e.target.value
        })
    }

    updateDescription = (e: any) => {
        this.setState({
            ...this.state,
            description: e.target.value
        })
    }

    updateResolver = (e: any) => {
        this.setState({
            ...this.state,
            resolver: e.target.value
        })
    }

    updateStatus = (e: any) => {
        this.setState({
            ...this.state,
            amount: e.target.value
        })
    }

    updateType = (e: any) => {
        this.setState({
            ...this.state,
            type: e.target.value
        })
    }

    updateReimbursement = async (e: SyntheticEvent) => {
        e.preventDefault()
        try {
            let s = await ersRemoteUpdateReimbursement(this.state.reimbursementId, this.state.author, this.state.amount, this.state.dateSubmitted, this.state.dateResolved, this.state.description, this.state.resolver, this.state.status, this.state.type)
            if (s.status === 201) {
                this.setState({
                    ...this.state,
                    sumbitted: 'Sumbitted successfully'
                })
            } else {
                this.setState({
                    ...this.state,
                    sumbitted: s.status
                })
            }
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <Container component="main" maxWidth="xs">
                <Typography component="h1" variant="h5">
                    Update Reimbursement
                </Typography>
                <Card>
                    <form onSubmit={this.updateReimbursement} className="updateComponent" noValidate autoComplete="off">
                        <TextField onChange={this.updateReimbursementId} label="Reimbursement Id" />
                        <br />
                        
                        <TextField onChange={this.updateAmount} label="Amount" />
                        <br />
                        <TextField onChange={this.updateStatus} label="Status" />
                        <br />
                        <TextField onChange={this.updateAuthor} label="Author" />
                        <br />
                        <TextField onChange={this.updateDateSubmitted} label="Date Submitted" />
                        <br />
                        <TextField onChange={this.updateDateResolved} label="Date Resolved" />
                        <br />
                        <TextField onChange={this.updateDescription} label="Description" />
                        <br />
                        <TextField onChange={this.updateResolver} label="Resolver" />
                        <br />
                        <TextField onChange={this.updateType} label="Type" />
                        <br />
                        <p> </p>
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
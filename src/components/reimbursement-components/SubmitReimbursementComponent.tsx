import React, { SyntheticEvent } from 'react'
import { Container, Card, TextField, Button } from '@material-ui/core'
import { ersRemoteSubmitReimbursement } from '../../remote/Project1Clients.ts/Project1Reimbursement'
let dt = new Date()
let today = '' + dt.getFullYear() + dt.getMonth() + dt.getDate()
export class SubmitReimbursementComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            sumbitted: '',
            amount: 0,
            dateSubmitted: today,
            description: '',
            type: 1
        }
    }
    updateAmount = (e: any) => {
        this.setState({
            ...this.state,
            amount: e.target.value
        })
    }
    updateDescription = (e: any) => {
        this.setState({
            ...this.state,
            description: e.target.value
        })
    }
    updateType = (e: any) => {
        this.setState({
            ...this.state,
            type: e.target.value
        })
    }
    submitReimbursement = async (e: SyntheticEvent) => {
        e.preventDefault()
        try {
            let s = await ersRemoteSubmitReimbursement(this.state.amount, this.state.description, this.state.type, this.state.dateSubmitted)
            if (s.status === 201) {
                this.setState({
                    ...this.state,
                    sumbitted: 'Successfully Sumbitted'
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
                <Card>
                    <form onSubmit={this.submitReimbursement} className="updateComponent" noValidate autoComplete="off">
                        <TextField onChange={this.updateAmount} id="standard-basic-1" label="Amount" />
                        <TextField onChange={this.updateDescription} id="standard-basic-3" label="Description" />
                        <TextField onChange={this.updateType} id="standard-basic-4" label="Type" />
                        <br />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className='{classes.submit}'
                        >
                            Submit
                        </Button>
                    </form>
                    <p>{this.state.dateSubmitted}</p>
                    <p>{this.state.sumbitted}</p>
                </Card>
            </Container>
        )
    }
}
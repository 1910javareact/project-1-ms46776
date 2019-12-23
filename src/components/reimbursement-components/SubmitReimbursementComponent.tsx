import React, { SyntheticEvent } from 'react'
import { Container, Card, TextField, Button, Typography, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@material-ui/core'
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
                <Typography component="h1" variant="h5">
                    Submit Reimbursement
                </Typography>
                <Card>
                    <form onSubmit={this.submitReimbursement} className="updateComponent" noValidate autoComplete="off">
                        <TextField onChange={this.updateAmount} label="Amount" />
                        <br />
                        <TextField onChange={this.updateDescription} label="Description" />
                        <br />
                        <p> </p>
                        <FormControl component="fieldset" className='{classes.formControl}'>
                            <FormLabel component="legend">Type</FormLabel>
                            <RadioGroup name="type" value={this.state.type} onChange={this.updateType}>
                                <FormControlLabel value="1" control={<Radio />} label="Lodging" />
                                <FormControlLabel value="2" control={<Radio />} label="Travel" />
                                <FormControlLabel value="3" control={<Radio />} label="Food" />
                                <FormControlLabel value="4" control={<Radio />} label="Other" />
                            </RadioGroup>
                        </FormControl>
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
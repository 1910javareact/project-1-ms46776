import React, { SyntheticEvent } from 'react'
import { Reimbursement } from '../../models/reimbursement'
import { Container, Card, Table, TableHead, TableRow, TableCell, TableBody, TextField, Button } from '@material-ui/core'
import { ReimbursementRowComponent } from './ReimbursementDisplayRowComponent'

interface IReimbursementByStatusIdComponentProps {
    reimbursement: Reimbursement[]
    ersReimbursementByStatusId: (statusId: number) => void
}

export class ReimbursementByStatusIdComponent extends React.Component<IReimbursementByStatusIdComponentProps, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            statusId: undefined
        }
    }
    updateStatusId = (e: any) => {
        this.setState({
            ...this.state,
            statusId: e.target.value
        })
    }
    submitStatusId = async (e: SyntheticEvent) => {
        e.preventDefault()
        this.props.ersReimbursementByStatusId(this.state.statusId)
    }

    render() {
        let rows = this.props.reimbursement.map((e) => {
            return <ReimbursementRowComponent reimbursement={e} key={'reimbursements' + e.reimbursementId} />
        })
        return (
            <Container component="main" maxWidth="md" >
                <form onSubmit={this.submitStatusId} className='{classes.form}' noValidate>
                    <TextField
                        value={this.state.statusId}
                        onChange={this.updateStatusId}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="statusid"
                        label="Status ID"
                        name="statusid"
                        autoComplete="statusid"
                        autoFocus
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className='{classes.submit}'
                    >
                        Get Reimbursements
                </Button>
                </form>
                <Card>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Reimbursement ID</TableCell>
                                <TableCell>Author</TableCell>
                                <TableCell>Amount</TableCell>
                                <TableCell>Date Submitted</TableCell>
                                <TableCell>Date Resolved</TableCell>
                                <TableCell>Description</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell>Type</TableCell>
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
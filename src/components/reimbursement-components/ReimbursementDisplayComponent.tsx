
import React from 'react'
import { Table } from 'reactstrap'
import { RouteComponentProps } from 'react-router'
import { Reimbursement } from '../../models/reimbursement'

import NavBar from '../nav-bar/NavBar'
import { getAllReimbursements } from '../../remote/Project1Clients.ts/Project1Reimbursement'
import { ReimbursementsDisplayRowComponent } from './ReimbursementDisplayRowComponent'

interface IReimbursementsDisplayProps extends RouteComponentProps {
    reimbursement: Reimbursement
}

interface IReimbursementsDisplayState {
    allReimbursements: Reimbursement[]
}

export class ReimbursementsDisplayComponent extends React.Component<any, IReimbursementsDisplayState>{
    constructor(props: any) {
        super(props)
        this.state = {
            allReimbursements: []
        }
    }

    async componentDidMount() {
        try {
            let r = await getAllReimbursements()
            if (r.status === 200) {
                this.setState({
                    ...this.state,
                    allReimbursements: r.body
                })
            }
        } catch (e) {
            console.log(e);

        }
    }

    render() {
        let rows = this.state.allReimbursements.map((e) => {
            return <ReimbursementsDisplayRowComponent reimbursement={e} key={'reimbursement ' + e.reimbursementId} />
        })
        return (
            <div>
                <nav>
                    <NavBar />
                </nav>
                <Table bordered color='danger'>
                    <thead>
                        <tr>
                            <td>Author</td>
                            <td>Description</td>
                            <td>Amount</td>
                            <td>Date Submitted</td>
                            <td>Date Resolved</td>
                            <td>Resolver</td>
                            <td>Status</td>
                            <td>Type</td>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </Table>
            </div>
        )
    }
}
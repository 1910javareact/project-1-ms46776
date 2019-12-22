import React, { SyntheticEvent } from "react";
import { RouteComponentProps } from "react-router";
import { Reimbursement } from "../../models/reimbursement";

import { Table, Form, FormGroup, Label, Input, Button } from "reactstrap";

import { ReimbursementByStatusDisplayRowComponent } from "../../components/reimbursement-components/ReimbursementDisplayRowComponent";



interface IRembursementByStatusDisplayProps extends RouteComponentProps {
    Reimbursement: Reimbursement[]
    reimbursementID: (id: number) => void

}
// interface IRembursementByStatusDisplayState{
//     allReimburements:reimbursement[]
//     id:number
// }

export class RembursementByStatusDisplayComponent extends React.Component<IRembursementByStatusDisplayProps, any>{
    constructor(props: any) {
        super(props)
        this.state = {
            id: undefined
        }
    }
    
    updateId = (e: any) => {
        this.setState({
            ...this.state,
            id: e.target.value
        })
    }
    
    submitId = async (e: SyntheticEvent) => {
        e.preventDefault()
        this.props.reimbursementID(this.state.id)
    }
    // async componentDidMount(){
    //     try{
    //         let r = await getReimbursementByStatus(this.props.reimbursement.reimbursementId)
    //         if(r.status === 200){
    //             this.setState({
    //                 ...this.state,
    //                 allReimburements: r.body
    //             })
    //         }
    //     }
    //     catch (e){
    //         console.log(e);

    //     }
    // }
    render() {
        let rows = this.props.Reimbursement.map((e) => {
            return <ReimbursementByStatusDisplayRowComponent Reimbursement={e} key={'Reimbursement' + e.reimbursementId} />//mapping  through keys and value ,Reimbursement is the key and + e.reimbursementId is the value
        })
        return (

            <div>
                <Form onSubmit={this.submitId}>
                    <FormGroup>
                        <Label for="exampleID">ID</Label>
                        <Input value={this.state.id} onChange={this.updateId} type="number" name="ID" id="exampleID" placeholder="with a placeholder" />
                    </FormGroup>
                    <Button color='danger'>Submit</Button>
                </Form>
                <Table bordered color='danger'>
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Author</td>
                            <td>Amount</td>
                            <td>Date Submitted</td>
                            <td>Description</td>
                            <td>Status</td>
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
import React, { SyntheticEvent } from 'react'
import { RouteComponentProps } from 'react-router';
import { User } from '../../models/user';
import { UserByIdDisplayRowComponent } from '../UserById-Component/UserByIdDisplayRowComponent';
import { Form, FormGroup, Label, Input, Button, Table } from 'reactstrap';

interface IUserByIdDisplayProps extends RouteComponentProps{
    User:User[]
    userId:(id:number) => void
}

export class UserByIdDisplayComponent extends React.Component<IUserByIdDisplayProps,any>{
      constructor(props:any){
          super(props)
          this.state={
              id:undefined
          }
          
      }
      updateId = (e:any)=>{
          this.setState({
              ...this.state,
              id: e.target.value
          })
      }
      submitId = async (e:SyntheticEvent)=>{
          e.preventDefault()
          this.props.userId(this.state.id)
      }
      render() {
        let rows = this.props.User.map((e) => {
            return <UserByIdDisplayRowComponent User={e} key={'User' + e.userId} />
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
                            <td>Username</td>
                            <td>Firstname</td>
                            <td>Lastname</td>
                            <td>email</td>
                           
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
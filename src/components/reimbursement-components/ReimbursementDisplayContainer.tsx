import { connect } from "react-redux"



import {reimbursementID}from "../../action-mappers/reimbursement-action-mapper"

import { IState } from "../../reducers"
import { RembursementByStatusDisplayComponent } from "./ReimbursementDisplayComponent"

const mapStateToProps = (state:IState) => {
    return {
        Reimbursement:state.reimb.Reimbursement
    }
}
const mapDispatchToProps ={
    reimbursementID
}

export default connect(mapStateToProps,mapDispatchToProps)(RembursementByStatusDisplayComponent)
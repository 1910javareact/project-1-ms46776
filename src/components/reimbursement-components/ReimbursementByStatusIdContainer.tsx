import { IState } from "../../reducers";
import { ersReimbursementByStatusId } from "../../action-mappers/reimbursement-by-status-id"
import { connect } from "react-redux";
import { ReimbursementByStatusIdComponent } from "./ReimbursementByStatusIdComponent";

const mapStateToProps = (state: IState) => {
    return {
        reimbursement: state.reimbursementByStatusId.reimbursement
    }
}

const mapDispatchtoProps = {
    ersReimbursementByStatusId
}

export default connect(mapStateToProps, mapDispatchtoProps)(ReimbursementByStatusIdComponent)
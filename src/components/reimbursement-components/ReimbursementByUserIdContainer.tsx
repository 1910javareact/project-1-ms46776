import { IState } from "../../reducers";
import { ersReimbursementInfo } from "../../action-mappers/reimbursement-info-action-mapper"
import { connect } from "react-redux";
import { ReimbursementByUserIdComponent } from "./ReimbursementByUserIdComponent";

const mapStateToProps = (state: IState) => {
    return {
        reimbursement: state.reimbursementInfo.reimbursement
    }
}

const mapDispatchtoProps = {
    ersReimbursementInfo
}

export default connect(mapStateToProps, mapDispatchtoProps)(ReimbursementByUserIdComponent)
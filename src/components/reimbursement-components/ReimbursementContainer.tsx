import { IState } from "../../reducers";
import { ersReimbursementInfo } from "../../action-mappers/reimbursement-action-mapper"
import { connect } from "react-redux";
import { ReimbursementInfoComponent } from "./ReimbursementComponent";

const mapStateToProps = (state: IState) => {
    return {
        reimbursement: state.reimbursementInfo.reimbursement,
        user: state.login.user
    }
}

const mapDispatchtoProps = {
    ersReimbursementInfo
}

export default connect(mapStateToProps, mapDispatchtoProps)(ReimbursementInfoComponent)
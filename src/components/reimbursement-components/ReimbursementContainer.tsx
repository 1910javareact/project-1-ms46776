import { connect } from "react-redux";
import { IState } from "../../reducers";
import { ReimbursementsDisplayComponent } from "./ReimbursementDisplayComponent";

const mapStateToProps = (state:IState, ownProps:any) => {
    return {
        history:ownProps.history,
        match:ownProps.match,
        location:ownProps.location
    }
}

export default connect(mapStateToProps)(ReimbursementsDisplayComponent)

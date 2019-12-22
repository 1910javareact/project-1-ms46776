import { IState } from "../../reducers";
import { userAction } from "../../action-mappers/user-action-mapper"
import { connect } from "react-redux";
import { UserInfoComponent } from "./UserDisplayComponent";

const mapStateToProps = (state: IState) => {
    return {
        user: state.login.user
    }
}

const mapDispatchtoProps = {
    userAction
}

export default connect(mapStateToProps, mapDispatchtoProps)(UserInfoComponent)
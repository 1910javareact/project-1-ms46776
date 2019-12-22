import { IState } from "../../reducers";
import { ersUserById } from "../../action-mappers/user-by-id-action-mapper"
import { connect } from "react-redux";
import { UserByIdComponent } from "./UserByIdDisplayComponent";

const mapStateToProps = (state: IState) => {
    return {
        user: state.userById.user
    }
}

const mapDispatchtoProps = {
    ersUserById
}

export default connect(mapStateToProps, mapDispatchtoProps)(UserByIdComponent)

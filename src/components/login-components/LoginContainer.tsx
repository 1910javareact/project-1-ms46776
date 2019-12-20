import { IState } from "../../reducers";
import { connect } from "react-redux";
import { userLogin } from '../../action-mappers/login-action-mapper'
import { LoginComponent } from "./LoginComponent";


const mapStateToProps = (state: IState) => {
    return {
        user: state.login.user
    }
}

const mapDispatchToProps = {
    userLogin
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent)
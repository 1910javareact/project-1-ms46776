

import { UserByIdDisplayComponent } from "./UserByIdDisplayComponent"

import { connect } from "react-redux"
import { IState } from "../../reducers"
const mapStateToProps = (state:IState) => {
    return {
        User:state.user.User
    }
}
const mapDispatchtoProps ={

}

export default connect(mapStateToProps,mapDispatchtoProps)(UserByIdDisplayComponent)
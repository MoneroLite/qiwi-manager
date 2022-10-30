import { connect } from "react-redux";
import { RootState } from "../store/store";

const mapStateToProps = (state:RootState) => {
    return {
        typeForm: state.authorization.typeForm,
        login: state.authorization.login,
        password: state.authorization.password,
        role: state.authorization.role,
        error: state.authorization.error,
    }
}

const authContainer = connect(mapStateToProps)(/*компонент с авторизацией*/)
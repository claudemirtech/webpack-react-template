import {Navigate} from "react-router-dom";
import {LoginService} from "../service/LoginService";
export const Logout = () => {

    LoginService.destroy();

    return <Navigate to={"/"}/>;
}
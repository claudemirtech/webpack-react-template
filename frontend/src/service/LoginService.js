import axios from "axios";

axios.defaults.headers.common["Content-type"] = "application/json";
export class LoginService {

    static autenticar(usuario) {
        return axios.post("/login", usuario);
    }

    static build = (data) => {
        localStorage.setItem("userToken", data.token);
    }

    static destroy = () => {
        localStorage.removeItem("userToken");
    }

}
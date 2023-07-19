import {Alert, Button, Form, FormGroup, Input, Label} from "reactstrap";
import {LoginService} from "../service/LoginService";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import "../style/Login.css";

export const Login = () => {
    const navigate = useNavigate();
    const [usuario, setUsuario] = useState({
        email: "",
        senha: ""
    });
    const [textMessage, setTextMessage] = useState("");

    const fetchUser = async (usuario) => {
        const {data} = await LoginService.autenticar(usuario);
        LoginService.build(data.data);
    }

    const handleChange = event => {
        const {name, value} = event.target;
        setUsuario(prevState => ({...prevState, [name]: value}));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        fetchUser(usuario).then(() => {
            navigate("/");
        }).catch(() => {
            setTextMessage("Usuário ou senha incorretos");
        });
    }

    return (
        <div className={"login"}>
            {textMessage === "" ? "" : <Alert color="danger"> {textMessage} </Alert>}
            <main className={"form-signin"}>
                <h3 className={"h3 mb-3 fw-normal text-center"}>Área Restrita</h3>
                <Form onSubmit={handleSubmit}>
                    <FormGroup className={"form-floating"}>
                        <Input type="email" className={"form-control"} name="email" id="floatingInput" value={usuario.email || ""}
                               onChange={handleChange} autoComplete="email"/>
                        <Label htmlfor="floatingInput">Email</Label>
                    </FormGroup>
                    <FormGroup className={"form-floating"}>
                        <Input type="password" className={"form-control"} name="senha" id="floatingPassword" value={usuario.senha || ""}
                               onChange={handleChange} autoComplete="senha"/>
                        <Label htmlfor="floatingPassword">Senha</Label>
                    </FormGroup>
                    <FormGroup className={"mb-3 mt-3 fw-normal"}>
                        <Button className={"w-100 btn btn-lg"} color="primary" type="submit">Login</Button>
                    </FormGroup>
                    <p className="mt-5 mb-3 text-muted text-center">&copy; 2017–2023</p>
                </Form>
            </main>
        </div>
    )
}
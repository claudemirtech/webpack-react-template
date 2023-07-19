import {Button, Container, Table} from "reactstrap";
import {AppNavBar} from "../component/AppNavBar";
import {UsuarioList} from "../component/UsuarioList";
import {Link} from "react-router-dom";
import "../style/UsuarioList.css"

export const Usuario = () => (
    <div>
        <AppNavBar/>
        <Container className={"container"}>
            <div className={"text-center mt-3"}><h3>Usuários</h3></div>
            <div className="mt-3">
                <Button className={"w-100"} color="primary" tag={Link} to="/usuarios/new">Novo</Button>
            </div>
            <div className={"table-responsive"}>
                <Table className="mt-4">
                    <thead>
                    <tr>
                        <th width="30%">Name</th>
                        <th width="30%">Email</th>
                        <th width="40%">Ações</th>
                    </tr>
                    </thead>
                    <tbody>
                    <UsuarioList/>
                    </tbody>
                </Table>
            </div>
        </Container>
    </div>
);
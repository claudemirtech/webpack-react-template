import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UsuarioService } from "../service/UsuarioService";
import { Button, ButtonGroup } from "reactstrap";

export const UsuarioList = () => {
    const [usuarios, setUsuarios] = useState([]);

    const fetchUsuarios = async () => {
        const { data } = await UsuarioService.getUsuarios();
        setUsuarios(data);
    }

    useEffect(() => {
        fetchUsuarios();
    }, [])

    const remover = async (cdusuario) => {
        await UsuarioService.remover(cdusuario);
        setUsuarios(usuarios.filter(u => u.cdusuario !== cdusuario));
    }

    return (
        <>
            {usuarios.map(usuario => (
                <tr key={usuario.cdusuario}>
                    <td className={"cell-text"}>{usuario.nome}</td>
                    <td className={"cell-text"}>{usuario.email}</td>
                    <td>
                        <ButtonGroup>
                            <Button size="sm" color="primary" tag={Link} to={"/usuarios/" + usuario.cdusuario}>Editar</Button>
                            <Button size="sm" color="danger" onClick={() => remover(usuario.cdusuario)}>Excluir</Button>
                        </ButtonGroup>
                    </td>
                </tr>
            ))
            }
        </>
    )
}
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { AppNavBar } from '../component/AppNavBar';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import { UsuarioService } from '../service/UsuarioService';

export const UsuarioDetail = () => {
    const navigate = useNavigate();
    const { cdusuario } = useParams();
    const [usuario, setUsuario] = useState({
        nome: '',
        email: '',
        senha: '',
        ativo: true
    });

    const handleChange = event => {
        const { name, value } = event.target;
        setUsuario(prevState => ({ ...prevState, [name]: value }));
    };

    const handleCheck = event => {
        const { name, checked } = event.target;
        setUsuario(prevState => ({ ...prevState, [name]: checked }));
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (usuario.cdusuario) {
            await UsuarioService.editar(usuario.cdusuario, usuario);
        } else {
            await UsuarioService.salvar(usuario);
        }
        navigate('/usuarios');
    }

    const fetchUsuario = async (id) => {
        if (id !== 'new') {
            const { data } = await UsuarioService.getUsuario(id);
            data.senha = '';
            setUsuario(data);
        }
    }

    useEffect(() => {
        fetchUsuario(cdusuario);
    }, [])

    return (
        <div>
            <AppNavBar />
            <Container>
                <div className={"w-100 text-center mt-3"}>{usuario.cdusuario ? "Editar Usuário" : "Adicionar Usuário"}</div>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label for="name">Nome</Label>
                        <Input type="text" name="nome" id="nome" value={usuario.nome || ""}
                            onChange={handleChange} autoComplete="nome" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="text" name="email" id="email" value={usuario.email || ""}
                            onChange={handleChange} autoComplete="email" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="senha">Senha</Label>
                        <Input type="password" name="senha" id="senha" value={usuario.senha || ""}
                            onChange={handleChange} autoComplete="senha" />
                    </FormGroup>
                    <FormGroup>
                        <Input type="checkbox"
                            name="ativo"
                            id="ativo"
                            checked={usuario.ativo}
                            onChange={handleCheck} />
                        <Label for="Ativo">Ativo</Label>
                    </FormGroup>
                    <FormGroup className={"mt-3"}>
                        <Button className={"w-100 mt-2"} color="primary" type="submit">Salvar</Button>{" "}
                        <Button className={"w-100 mt-2"} color="secondary" tag={Link} to="/usuarios">Cancelar</Button>
                    </FormGroup>
                </Form>
            </Container>
        </div>
    )
}
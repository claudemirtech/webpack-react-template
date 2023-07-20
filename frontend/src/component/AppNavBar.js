import React, {useState} from 'react';
import {
    Collapse,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    NavLink,
    UncontrolledDropdown
} from 'reactstrap';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import '../style/AppNavBar.css';

export const AppNavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <Navbar dark color="dark" expand="md" sticky="top">
            <NavbarBrand tag={Link} to="/"><img src={logo} alt={"Logo"} width="25" height="25"/></NavbarBrand>
            <NavbarToggler onClick={toggle}/>
            <Collapse isOpen={isOpen} navbar>
                <Nav className="me-auto" navbar>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            Cadastro
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem tag={Link} to="/usuarios">Usuário</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <NavItem>
                        <NavLink tag={Link} to={"/logout"}>Sair</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )
}
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'
import useAuth from '../../../Hooks/useAuth';
import logo from '../../../Images/Logo/logo_300x300.png'

const Header = () => {
    const { user, logOut } = useAuth()
    return (
        <div>
            <Navbar fixed="top" collapseOnSelect expand="lg" variant="light" bg="light">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />Kitty Katty
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="nav">
                        <Nav className="m-2 nav-text">
                            <NavLink className="list" to="/home">Home</NavLink>
                            <NavLink className="list" to="/products">Exculsive Collection </NavLink>
                            {user?.email && <NavLink className="list" to="/review">Review </NavLink>}
                            {user?.email && <NavLink className="list" to="/myorder">My Order </NavLink>}
                            {user?.email && <NavLink className="list" to="/addProducts">Add Product </NavLink>}
                            {user?.email && <NavLink className="list" to="/manageproduct">Manage Products </NavLink>}

                            {
                                user.email ?
                                    <button className="list2" onClick={logOut}>log out</button>
                                    :
                                    <NavLink className="list" to="/login">LogIn</NavLink>}


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
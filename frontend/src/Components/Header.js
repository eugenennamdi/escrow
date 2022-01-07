import { Navbar,Nav,Container,NavDropdown} from "react-bootstrap";
import {LinkContainer,} from 'react-router-bootstrap'
import { FaUser} from 'react-icons/fa'
// @flow strict

import  React from 'react';
import {useSelector,useDispatch} from 'react-redux'
import { logout } from "../Actions/userActions";

function Header({history}) {

    const userLogin = useSelector(state=> state.userLogin)
    const {userInfo} = userLogin
    const dispatch = useDispatch()

    const Logout = ()=>{
        dispatch(logout())
        
       

    }
    return (
        <div>
            <header>
                <Navbar  bg="dark" variant="dark"expand="lg" collapseOnSelect>
                    <Container>
                    <LinkContainer to='/'>
                    <Navbar.Brand>PRIMODIAL ESCROW SERVICES</Navbar.Brand>
                    </LinkContainer>

                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                        {userInfo ? (
                                    <NavDropdown title={userInfo.name} id="username">
                                        <LinkContainer to='/profile'>
                                            <NavDropdown.Item >
                                            Profile
                                            </NavDropdown.Item>
                                        </LinkContainer>
                                        <NavDropdown.Item onClick={Logout}>Logout</NavDropdown.Item>

                                    </NavDropdown> 
                                ): <LinkContainer to='/login'>
                                <Nav.Link><i className="fas fa-user"></i></Nav.Link>
                            </LinkContainer>}
                            {!userInfo && (
                                <LinkContainer to='/login'>
                                <Nav.Link><FaUser style={{margin: "5"}}/>Login</Nav.Link>
                            </LinkContainer>
                            )}
                          

                          {!userInfo && (
                                <LinkContainer to='/register'>
                                <Nav.Link><FaUser style={{margin: "5"}}/>Sign up</Nav.Link>
                            </LinkContainer>
                            )}
                          
                        </Nav>

                    </Navbar.Collapse>

                    
                    </Container>


                </Navbar>
            </header>
            
        </div>
    );
};

export default Header;
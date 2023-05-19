import React from 'react';
import {Container, Navbar, Nav} from 'react-bootstrap'
import { NavLink, useNavigate } from 'react-router-dom';
import SNavLink from '../Navlink';


const SNavbar = () => {
    const navigate = useNavigate()
    return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="">Dashboard</Navbar.Brand>
          <Nav className="me-auto">
            <SNavLink action={() => navigate("/")}>Home</SNavLink>
            <SNavLink action={() => navigate("/categories")}>
              Categories
            </SNavLink>
            <SNavLink action={() => navigate("/talent")}>Talent</SNavLink>
            <SNavLink action={() => navigate("/event")}>Event</SNavLink>
            <SNavLink action={() => navigate("/participant")}>
              Participant
            </SNavLink>
            <SNavLink action={() => navigate("/transactions")}>
              Transactions
            </SNavLink>
          </Nav>
        </Container>
      </Navbar>
    );
}


export default SNavbar
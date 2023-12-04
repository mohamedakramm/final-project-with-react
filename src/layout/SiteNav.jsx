import {Container,Nav,Navbar} from 'react-bootstrap';
import {  NavLink } from 'react-router-dom';


export default function SiteNav() {
  return (
    <Navbar expand="md" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home">Final project </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <NavLink to="/" className="nav-link">Home</NavLink>
          <NavLink to="/about" className="nav-link">About</NavLink>
          <NavLink to="/redux_example" className="nav-link">ReduxExample</NavLink>
          
            
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
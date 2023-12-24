import { Link } from 'gatsby'
import * as React from 'react'
import {
  NavLink as BSNavLink,
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  // NavDropdown,
  NavItem,
} from 'react-bootstrap'

export function Navigation() {
  return (
    <Navbar expand="md" variant="dark" bg="dark" className="sticky-top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          M.A.N
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar" className="mt-2 mt-lg-0">
          <Nav as="ul" className="ms-auto">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about/">About</NavLink>
            <NavLink to="/blog/">Blog</NavLink>
            <NavLink to="/events/">Events</NavLink>
            {/* <NavLink to="/all-artists/">Artists</NavLink> */}
            <NavLink to="/open-decks/">Open Decks</NavLink>

            {/* <NavDropdown title="Other Stuff" id="navbar-integrations">
              <DropdownLink to="/things/">Things</DropdownLink>
              <DropdownLink to="/stuff/">Stuff</DropdownLink>
            </NavDropdown> */}
          </Nav>
          <Form className="d-flex gap-2 my-2 my-lg-0">
            <Button variant="outline-light" as={Link} to="/contact/">
              Contact
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

function NavLink({ children, ...props }) {
  return (
    <NavItem as="li">
      <BSNavLink as={Link} activeClassName="active" partiallyActive {...props}>
        {children}
      </BSNavLink>
    </NavItem>
  )
}

// function DropdownLink({ children, ...props }) {
//   return (
//     <NavDropdown.Item as={Link} activeClassName="active" partiallyActive {...props}>
//       {children}
//     </NavDropdown.Item>
//   )
// }

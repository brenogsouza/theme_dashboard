import React, { Component } from "react";
import {
  Badge,
  Button,
  Collapse,
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink
} from "reactstrap";

const links = [
  { href: "#home", text: "Home" },
  { href: "#card", text: "Product" },
  { href: "#about", text: "About" },
  { href: "#cata", text: "Categories" },
  { href: "#test", text: "Blogs" },
  { href: "#test2", text: "News" },
  { href: "#busns", text: "Adds", className: "btnadd" },
  { href: "/login", text: "LOGIN" }
];

const createNavItem = ({ href, text, className }) => (
  <NavItem>
    <NavLink href={href} className={className}>
      {text}
    </NavLink>
  </NavItem>
);

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Container>
          <Navbar light expand="md" className="navbar-style">
            <NavbarToggler onClick={this.toggle} />
            {/* <NavbarBrand href="/">
              <img src="https://res.cloudinary.com/candidbusiness/image/upload/v1455406304/dispute-bills-chicago.png" />
            </NavbarBrand> */}
            <NavbarBrand href="/">
              The Big brand title will be displayed here !
            </NavbarBrand>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                {links.map(createNavItem)}
              </Nav>
            </Collapse>
            <Nav className="ml-auto" navbar>
              <NavItem className="cart-wrapper">
                <Button className="cart-style" color="primary" size="sm">
                  Cart
                </Button>
                <Badge className="badge-style"> 10 </Badge>
              </NavItem>
            </Nav>
          </Navbar>
        </Container>
      </div>
    );
  }
}

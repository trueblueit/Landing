import React, { Component } from "react";
import {
  Nav,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  Collapse,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import { Container, Row } from "react-bootstrap";
import { navItems } from "../../data";

class Navbar_Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navItems: navItems,
      isNavSticky: false,
      isOpenMenu: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const { isNavSticky } = this.state;
    const scrollY = window.scrollY;

    if (scrollY >= 50 && !isNavSticky) {
      this.setState({ isNavSticky: true });
    } else if (scrollY < 50 && isNavSticky) {
      this.setState({ isNavSticky: false });
    }
  };

  toggle = () => {
    this.setState((prevState) => ({ isOpenMenu: !prevState.isOpenMenu }));
  };
  toggleDropdown = (dropdownId, isOpen) => {
    this.setState((prevState) => ({
      navItems: prevState.navItems.map((item) => {
        if (item.id === dropdownId) {
          return { ...item, isOpen: isOpen };
        }
        return item;
      }),
      contactUsOpen:
        dropdownId === "contactUs" ? isOpen : prevState.contactUsOpen,
    }));
  };

  render() {
    const { isNavSticky, isOpenMenu, navItems } = this.state;

    return (
      <React.Fragment>
        <Container>
          <div
            style={{
              position: "fixed",
              width: "100%",
              zIndex: "100",
              top: "0px",
              left: "0px",
              backgroundColor: "#f2f2f2",
            }}
            className={`navbar-custom navbar-expand-lg ${
              isNavSticky ? "nav-sticky  sticky-dark " : ""
            }`}
          >
            <div
              className="subnav"
              style={{
                margin: "0px",
                height: "10vh",
                backgroundColor: "#b4432b",
              }}
            >
              <form
                style={{
                  marginLeft: "50%",
                  width: "45%",
                }}
                className="form-inline justify-content-end "
              >
                <div className="input-group" style={{ padding: "10px" }}>
                  <input
                    type="search"
                    className="form-control"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="button-addon2"
                  />
                  <div className="input-group-append">
                    <button
                      className="btn mybtn ms-2"
                      type="button"
                      id="button-addon2"
                    >
                      Search
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <NavbarToggler onClick={this.toggle}>
              <i className="fa fa-bars"></i>
            </NavbarToggler>

            <Collapse
              id="navbarCollapse"
              isOpen={isOpenMenu}
              navbar
              className={`me-5 mt-4 mt-lg-0 ${isOpenMenu ? "" : "text-center"}`}
            >
              <NavbarBrand
                className="logo order-1 order-lg-0 me-lg-0 me-2"
                href="/"
              >
                <img
                  src="assets/lifeisok/logo2.png"
                  style={{ height: "10vh" }}
                  className="d-inline-block align-text-top img-fluid ms-4"
                  alt="Life is ok Logo"
                />
              </NavbarBrand>
              <Nav className="navbar-nav  " id="mySidenav">
                {navItems.map((item, key) => (
                  <NavItem
                    key={key}
                    className={item.idnm === "Home" ? "active " : ""}
                  >
                    {item.submenu ? (
                      <Dropdown
                        nav
                        isOpen={item.isOpen}
                        toggle={() =>
                          this.toggleDropdown(item.id, !item.isOpen)
                        }
                        onMouseOver={() => this.toggleDropdown(item.id, true)}
                        onMouseLeave={() => this.toggleDropdown(item.id, false)}
                      >
                        <DropdownToggle nav caret>
                          {item.navheading}
                        </DropdownToggle>
                        <DropdownMenu
                          style={{
                            backgroundColor: "ivory",
                            color: "black",
                          }}
                        >
                          {item.submenu.map((subItem, subKey) => (
                            <DropdownItem key={subKey} href={subItem.link}>
                              {subItem.navheading}
                            </DropdownItem>
                          ))}
                        </DropdownMenu>
                      </Dropdown>
                    ) : (
                      <NavLink href={item.link}>{item.navheading}</NavLink>
                    )}
                  </NavItem>
                ))}
              </Nav>
            </Collapse>
          </div>
        </Container>
      </React.Fragment>
    );
  }
}

export default Navbar_Page;

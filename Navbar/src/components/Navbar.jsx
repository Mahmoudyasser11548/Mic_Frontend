// ** React Imports
import { Fragment } from "react";

// ** Custom Components
import NavbarUser from "./NavbarUser";

// ** Third Party Components
import { Sun, Menu } from "react-feather";

// ** Reactstrap Imports
import { NavItem, NavLink, Navbar } from "reactstrap";

const ThemeNavbar = () => {
    
  const ThemeToggler = () => {
      return <Sun className="ficon" />;
  };

  return (
    <Navbar
        expand="lg"
        container={false}
        className={
          "header-navbar navbar-fixed align-items-center navbar-shadow navbar-brand-center"
        }
      >
        <div className="navbar-container d-flex content">
          <Fragment>
            <div className="bookmark-wrapper d-flex align-items-center">
              <ul className="navbar-nav d-xl-none">
                <NavItem className="mobile-menu me-auto">
                  <NavLink
                    className="nav-menu-main menu-toggle hidden-xs is-active"
                  >
                    <Menu className="ficon" />
                  </NavLink>
                </NavItem>
              </ul>
              <NavItem className="d-none d-lg-block">
                <NavLink className="nav-link-style">
                  <ThemeToggler />
                </NavLink>
              </NavItem>
            </div>
            <NavbarUser />
          </Fragment>
        </div>
      </Navbar>
  )
};

export default ThemeNavbar;
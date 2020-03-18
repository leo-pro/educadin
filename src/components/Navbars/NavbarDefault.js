/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, {useEffect} from "react";
import { Link } from "react-router-dom";
// nodejs library that concatenates strings
import classnames from "classnames";

// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Button
} from "reactstrap";


import logoBranco from '../../assets/img/logo-branco.png';
import logo from '../../assets/img/logo.png';

function NavbarDefault() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);
  const [navbarLogo, setNavbarLogo] = React.useState(logoBranco);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  const handleScroll = (target) => {
    document.getElementById(target).scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
        setNavbarLogo(logo);
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
        setNavbarLogo(logoBranco);
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <Navbar
      className={classnames("fixed-top", navbarColor)}
      color-on-scroll="300"
      expand="lg"
    >
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            to="/"
            target="_blank"
            title="Educadin - Educação financeira para jovens e crianças"
            tag={Link}
          >
            <img src={navbarLogo} alt="" style={{ width: '180px'}}/>
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            <NavItem>
              <NavLink to="" onClick={() => handleScroll('oquee')} tag={Link}>
                O que é?
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="" onClick={() => handleScroll('oquee')} tag={Link}>
                Módulos
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="" onClick={() => handleScroll('planos')} tag={Link}>
                Planos
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="" onClick={() => handleScroll('parceiros')} tag={Link}>
                Parceiros
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/login" tag={Link} className="btn-navbar">
                Entrar
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/cadastrar" tag={Link} className="btn-navbar">
                Cadastrar
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarDefault;

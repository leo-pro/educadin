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
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Row, Container } from "reactstrap";

function FooterDefault() {
  return (
    <footer className="footer footer-black footer-white">
      <Container>
        <Row>
          <nav className="footer-nav">
            <ul>
              <li>
                <a
                  href="#oquee"
                  target="_blank"
                >
                  O que é?
                </a>
              </li>
              <li>
                <a
                  href="#modulos"
                  target="_blank"
                >
                  Módulos
                </a>
              </li>
              <li>
                <a
                  href="#planos"
                  target="_blank"
                >
                  Planos
                </a>
              </li>
              <li>
                <a
                  href="#parceiros"
                  target="_blank"
                >
                  Parceiros
                </a>
              </li>
              <li>
                <a
                  href="/login"
                  target="_blank"
                >
                  Entrar
                </a>
              </li>
              <li>
                <a
                  href="/cadastrar"
                  target="_blank"
                >
                  Cadastrar
                </a>
              </li>
            </ul>
          </nav>
          <div className="credits ml-auto">
            <span className="copyright">
              © {new Date().getFullYear()} by <a href="https://buildlab.com.br">BUILDLAB</a>
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default FooterDefault;

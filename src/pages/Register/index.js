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
import React from "react";

// reactstrap components
import { Button, Card, Form, Input, Container, Row, Col } from "reactstrap";

import './styles.css';

import logo from '../../assets/img/logo.png';

function Register() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("register-page");
    return function cleanup() {
      document.body.classList.remove("register-page");
    };
  });
  return (
    <>
      <div
        className="page-header"
        style={{
          backgroundImage: "url(" + require("assets/img/background-login.jpg") + ")"
        }}
      >
        <div className="filter" />
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" lg="8">
              <Card className="card-register ml-auto mr-auto">
                <img src={logo} alt="Educadin - educação financeira para jovens e crianças"/>
                <Form className="register-form">
                  <label>Nome</label>  
                  <Input placeholder="Nome" type="text" />
                  <label>Email</label>
                  <Input placeholder="Email" type="text" />
                  <label>Senha</label>
                  <Input placeholder="Senha" type="password" />
                  <label>Confirmar Senha</label>
                  <Input placeholder="Confirmar Senha" type="password" />
                  <Button block className="btn btn-light-green">
                    Cadastrar
                  </Button>
                </Form>
                <div className="forgot">
                  <Button
                    className="btn-link"
                    color="#f8ae45"
                    href="/login"
                  >
                    Já tem uma conta? Entre aqui!
                  </Button>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
        <div className="footer register-footer text-center">
          <h6>
            © {new Date().getFullYear()} by <a href="https://buildlab.com.br" target="_blank" rel="noopener noreferrer">BuildLab</a>
          </h6>
        </div>
      </div>
    </>
  );
}

export default Register;

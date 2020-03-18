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
import React, {useEffect, useState} from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

import { useScrollToTop } from '../../utils';

// core components
import NavbarDefault from "components/Navbars/NavbarDefault.js";
import HomeHeader from "components/Headers/HomeHeader.js";
import FooterDefault from "components/Footers/FooterDefault.js";


import '../../assets/css/styles.css';

function Home() {
  const setScrollToTop = useScrollToTop(true);

  document.documentElement.classList.remove("nav-open");
  
  useEffect(() => {
    document.body.classList.add("profile-page");
  }, [setScrollToTop]);

  function handleScroll(target){
    document.getElementById(target).scrollIntoView({ behavior: "smooth" });
  }
  return (
    <>
      <NavbarDefault />
      <Button 
        title="Voltar ao topo" 
        size="sm" 
        className="btn-orange" 
        id="btn-top" 
        style={{ position: 'fixed', left: '93%', top: '90%', zIndex: 1000, display: 'none'}}
        onClick={() => setScrollToTop(true)}>
        <i className="fa fa-angle-up" style={{ fontSize: '32px'}}></i>
      </Button>
      <HomeHeader />
      <div className="main" id="oquee">
        <div className="section text-center">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">O que é?</h2>
                <h5 className="description">
                  Existe uma idade certa para se aprender a cuidar do dinheiro? Nós acreditamos que sim! Por isso
                  nossa plataforma oferece cursos online sobre demanda para crianças a partir de 7 anos de idade. Apoiamos
                  o ensino da educação desde a infância e pra isso contamos com parcerias com pais, professores e escolas.
                  Veja os módulos disponíveis:
                </h5>
                <br />
                <Button
                  className="btn-orange"
                  onClick={() => handleScroll('planos')}
                >
                  Veja os Planos
                </Button>
              </Col>
            </Row>
            <br />
            <br />
            <Row>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-light-green">
                    <i className="nc-icon nc-album-2" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Kids</h4>
                    <p className="description">
                      Spend your time generating new ideas. You don't have to
                      think of implementing.
                    </p>
                    <Button className="btn-link" href="#pablo">
                      Veja Mais
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-light-green">
                    <i className="nc-icon nc-bulb-63" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Teens</h4>
                    <p>
                      Larger, yet dramatically thinner. More powerful, but
                      remarkably power efficient.
                    </p>
                    <Button className="btn-link" href="#pablo">
                      Veja Mais
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-light-green">
                    <i className="nc-icon nc-chart-bar-32" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Youngs</h4>
                    <p>
                      Choose from a veriety of many colors resembling sugar
                      paper pastels.
                    </p>
                    <Button className="btn-link" href="#pablo">
                      Veja Mais
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-light-green">
                    <i className="nc-icon nc-sun-fog-29" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Investidor</h4>
                    <p>
                      Find unique and handmade delightful designs related items
                      directly from our sellers.
                    </p>
                    <Button className="btn-link" href="#pablo">
                      Veja Mais
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section text-center" id="planos">
          <Container>
            <h1 className="title">Planos</h1>
            <Row>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h2">R$ 49.90</CardTitle>
                        <h4 className="card-category">Mensal</h4>
                      </div>
                    </a>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn btn-orange"
                      color="link"
                      href="/cadastrar"
                    >
                      Assinar
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h2">R$ 399.90</CardTitle>
                        <h4 className="card-category">Anual</h4>
                      </div>
                    </a>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn btn-orange"
                      color="link"
                      href="/cadastrar"
                    >
                      Assinar
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h2">Outros Valores</CardTitle>
                        <h4 className="card-category">Personalizado</h4>
                      </div>
                    </a>
                  </CardBody>
                  <CardFooter className="text-center">
                  <Button
                      className="btn-orange"
                      color="link"
                      href="/cadastrar"
                    >
                      Assinar
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section landing-section" id="parceiros">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="text-center">Você é professor, tem escola ou uma empresa? Tem interesse em ser parceiro e apoiador do projeto? Entre em contato</h2>
                <Form className="contact-form">
                  <Row>
                    <Col md="6">
                      <label>Nome</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-single-02" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Nome" type="text" />
                      </InputGroup>
                    </Col>
                    <Col md="6">
                      <label>Email</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-email-85" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Email" type="text" />
                      </InputGroup>
                    </Col>
                  </Row>
                  <label>Mensagem</label>
                  <Input
                    placeholder="Escreva sua mensagem aqui..."
                    type="textarea"
                    rows="4"
                  />
                  <Row>
                    <Col className="ml-auto mr-auto" md="4">
                      <Button className="btn btn-orange" color="danger" size="lg">
                        Enviar Mensagem
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <FooterDefault />
    </>
  );
}

export default Home;

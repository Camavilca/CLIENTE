import React from "react";
import {
  FreeBird,
  Col,
  Row,
  CardBody,
  Fa
} from "mdbreact";

class Baner extends React.Component {
  render() {
    return (
      <div>
        <img src="http://hbanoticias.com/wp-content/uploads/2018/03/TECSUP.jpg" width="100%" className="mx-auto" alt="Responsive" />
        <FreeBird>
          <Row>
            <Col
              md="10"
              className="mx-auto float-none white z-depth-1 py-2 px-2"
            >
              <CardBody>
                <h2 className="h2-responsive mb-4 text-center text-uppercase indigo-text">
                  <strong>Gestor de contenidos</strong>
                </h2>
                <p className="text-center">Bienvenidos a nueva experiencia</p>
                <Row className="d-flex flex-row justify-content-center row">
                  <a
                    className="border nav-link border-light rounded mr-1"
                    href="/login"
                    rel="noopener noreferrer"
                  >
                    <Fa 
                      icon="graduation-cap"
                      className="mr-2"
                      size="2x"
                      />
                   <span
                    className="text-uppercase
                       text-secondary
                       "
                    > Inicia Sesion</span>
                  </a>
                </Row>
              </CardBody>
            </Col>
          </Row>
        </FreeBird>
      </div>
    );
  }
}

export default Baner;

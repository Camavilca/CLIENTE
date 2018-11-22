import React, { Component } from "react";
import {
  Button,
  Container,
  Card,
  CardBody,
  CardGroup,
  CardImage,
  CardTitle,
  CardText
} from "mdbreact";

class CardsPage extends Component {
  render() {
    return (
      <Container>

          <CardGroup deck className="mt-3">
            <Card>
              <CardImage
                src="https://mundocontact.com/wp-content/uploads/internet_de_todo1.jpg"
                alt="Card image cap"
                top
                hover
                overlay="white-slight"
              />
              <CardBody>
                <CardTitle tag="h5">Innovación</CardTitle>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
                <Button color="light-blue" size="md">
                  read more
                </Button>
              </CardBody>
            </Card>

            <Card>
              <CardImage
                src="https://blog.cambridge.es/wp-content/uploads/2017/06/inteligencias-multiples-2.jpg"
                alt="Card image cap"
                top
                hover
                overlay="white-slight"
              />
              <CardBody>
                <CardTitle tag="h5">Cultura</CardTitle>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
                <Button color="light-blue" size="md">
                  read more
                </Button>
              </CardBody>
            </Card>

            <Card>
              <CardImage
                src="https://mundocontact.com/wp-content/uploads/2015/11/inteligencia-artificial-mente-cerebro-chip-futuro.jpg"
                alt="Card image cap"
                top
                hover
                overlay="white-slight"
              />
              <CardBody>
                <CardTitle tag="h5">Pasion</CardTitle>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
                <Button color="light-blue" size="md">
                  read more
                </Button>
              </CardBody>
            </Card>
          </CardGroup>
        </Container>
    );
  }
}

export default CardsPage;

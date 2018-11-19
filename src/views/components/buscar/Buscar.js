import React, { Component } from 'react'
import {
    Container,
    Col,
    FormInline,
    Button,
    Fa
} from "mdbreact";


class Buscar extends Component {
    render() {
        return (
            <Container>
                <Col >
                    <FormInline className="md-form mr-auto mb-4">
                        <input
                            className="form-control mr-sm-2"
                            type="text"
                            placeholder="Buscar Archivo"
                            aria-label="Search"
                        />
                        <Button
                            outline
                            color="warning"
                            rounded
                            size="sm"
                            type="submit"
                            className="mr-auto"
                        >
                        <Fa
                            icon="search"
                            size="2x"
                        >
                        </Fa>
                     </Button>
                    </FormInline>
                </Col>
            </Container>
        );
    }
}


export default Buscar;
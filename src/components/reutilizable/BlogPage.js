import React  from 'react';
import { Container, Row, Col, Mask, Fa, View, Button } from 'mdbreact';

const BlogPage = () => {
    return (
        <Container>
            <h2 className="h1-responsive font-weight-bold text-center my-5">Gestor de contenido</h2>
            <p className="text-center w-responsive mx-auto mb-5">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <Row>
                <Col lg="4" md="12" className="mb-lg-0 mb-4">
                    <View hover className="rounded z-depth-2 mb-4">
                        <img className="img-fluid" src="https://www.tecsup.edu.pe/sites/default/files/page/image/historia-tecsup.png" />
                        <Mask overlay="white-slight" />
                    </View>
                    <a className="pink-text"><h6 className="font-weight-bold mb-3">
                        <Fa icon="map" className="pr-2"></Fa>Aventura</h6></a>
                    <h4 className="font-weight-bold mb-3"><strong> Tecsup creado</strong></h4>
                    <p className="dark-grey-text"> Luis Hochschild Plaut como una asociación privada sin fines de lucro con el apoyo de un grupo de empresarios peruanos</p>
                    <Button  type="button" color="pink" rounded size="md">Tecsup</Button>
                </Col>
                <Col lg="4" md="12" className="mb-lg-0 mb-4">
                    <View hover className="rounded z-depth-2 mb-4">
                        <img className="img-fluid" src="https://www.tecsup.edu.pe/sites/default/files/page/image/acerca-de-tecsup.png" />
                        <Mask overlay="white-slight" />
                    </View>
                    <a className="deep-orange-text"><h6 className="font-weight-bold mb-3">
                        <Fa icon="graduation-cap" className="pr-2"></Fa>Educacion</h6></a>
                    <h4 className="font-weight-bold mb-3"><strong>Mejores de Perú</strong></h4>
                    <p className="dark-grey-text">Luis Hochschild Plaut como una asociación privada sin fines de lucro con el apoyo de un grupo de empresarios peruanos</p>
                    <Button color="deep-orange" rounded size="md">Read more</Button>
                </Col>
                <Col lg="4" md="12" className="mb-lg-0 mb-4">
                    <View hover className="rounded z-depth-2 mb-4">
                        <img className="img-fluid" src="https://www.isotools.org/wp-content/uploads/2014/09/BSC-15-sep.jpg" />
                        <Mask overlay="white-slight" />
                    </View>
                    <a className="blue-text"><h6 className="font-weight-bold mb-3">
                        <Fa icon="fire" className="pr-2"></Fa>Cultura</h6></a>
                    <h4 className="font-weight-bold mb-3"><strong>Title of the news</strong></h4>
                    <p className="dark-grey-text">Luis Hochschild Plaut como una asociación privada sin fines de lucro con el apoyo de un grupo de empresarios peruanos</p>
                    <Button color="info" rounded size="md">Read more</Button>
                </Col>
            </Row>
        </Container>
    );
}
export default BlogPage;
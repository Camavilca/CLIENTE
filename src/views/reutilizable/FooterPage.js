import React from "react";
import { Container, Footer } from "mdbreact";

class FooterPage extends React.Component {
  render() {
    return (
      <Footer color="blue" className="font-small">
        <div className="footer-copyright text-center py-3">
          <Container fluid>
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <a href="#"> INTEGRADOR CMS</a>
          </Container>
        </div>
      </Footer>
    );
  }
}

export default FooterPage;
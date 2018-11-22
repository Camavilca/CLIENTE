import React from "react";
import HomeBaner from '../reutilizable/Baner';
import FooterPage from '../reutilizable/FooterPage';
import CardsPage from '../reutilizable/CardsPage';
import BlogPage from '../reutilizable/BlogPage';

import {
  
} from "mdbreact";

class Inicio extends React.Component {
  render() {
    return (
      <div>
        <HomeBaner />
        <hr className="my-5 mx-5 bg-info" />
        <CardsPage/>
        <hr className="my-5 mx-5 bg-info" />
        <BlogPage />
        <FooterPage/>
      </div>
    );
  }
}

export default Inicio;
 
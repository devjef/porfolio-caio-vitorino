import React from "react";
import { Row, Col } from "react-flexbox-grid";
// SCSS
import "./hero.scss";
//Assets
import HeroImage from '../../assets/hero/perfil.jpg';
//Components
import Button from '../ui-components/button/button';

const hero = () => (
  <div className="hero" id="hero">
    <div className="wrapper">
      <Row>
        <Col md={12} lg={6}>
          <div className="hero-info">
            <h1 className="weight800 font60">Hello!!!</h1>
            <h1 className="weight800 font60">
              My Name is Caio!
            </h1>
            <p className="font16">
            Videomaker e fotógrafo. Conte-me sua ideia e eu contarei sua história.
            </p>
            <Button label="ENTRAR EM CONTATO" target={"contact"} />
            <p className="font12">
            Vamos juntos, tornar seu projeto realidade.

            </p>
          </div>
        </Col>
        <Col md={12} lg={6}>
          <div className="hero-image">
            <img src={HeroImage} alt="hero" />
          </div>
        </Col>
      </Row>
    </div>
  </div>
);

export default hero;

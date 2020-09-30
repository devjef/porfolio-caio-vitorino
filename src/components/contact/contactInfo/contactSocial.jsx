import React from "react";
import { Row, Col } from "react-flexbox-grid";
import "./contactSocial.scss";
import { Link } from "react-scroll";

import FacebookIcon from "../../../assets/contact/facebook.svg";
import InstagramIcons from "../../../assets/contact/instagram.svg";
import YoutubeIcon from "../../../assets/contact/youtube.svg";


const contactSocial = () => (
  <Row>
    <Col xs={12}>
      <Row center="xs">
        <Col xs={12} lg={1} className="contact__social">
          <a href="https://www.facebook.com/caio.vdc/" target="_blank">
            <img src={FacebookIcon} alt="facebook" />
          </a>
        </Col>
        <Col xs={12} lg={1} className="contact__social">
          <a href="https://www.youtube.com/c/ckvproduções" target="_blank">
            <img src={YoutubeIcon} alt="Youtube" />
          </a>
        </Col>
        <Col xs={12} lg={1} className="contact__social">
          <a href="https://www.instagram.com/caio.vdc/" target="_blank">
            <img src={InstagramIcons} alt="Instagram" />
          </a>
        </Col>
        
      </Row>
    </Col>
  </Row>
);

export default contactSocial;

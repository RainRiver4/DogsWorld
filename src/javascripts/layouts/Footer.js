import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const socialsMediaList = [
    {
        name: "facebook",
        fontClass: "fab fa-facebook",
        address: "https://www.facebook.com",
    },
    {
        name: "instagram",
        fontClass: "fab fa-instagram",
        address: "https://www.instagram.com",
    },
    {
        name: "twitter",
        fontClass: "fab fa-twitter",
        address: "https://twitter.com",
    },
    {
        name: "pinterest",
        fontClass: "fab fa-pinterest",
        address: "https://pl.pinterest.com",
    },
];

const Footer = () => {
    const socialMediaItem = socialsMediaList.map(social => (
        <button
            type="button"
            className="btn btn-link footer-link"
            key={social.name}>
            <a href={social.address} target="_blank">
                <i className={social.fontClass}></i>
            </a>
        </button>
    ));
    return (
        <footer className="bg-secondary text-white pt-4 mt-4">
            <Container>
                <Row>
                    <Col md={8}>
                        <h5>DogsWorld</h5>
                        <p className="info">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Pariatur odio vitae corporis, saepe alias
                            autem laudantium eos cum iure illo minima aperiam
                            sed labore fugiat sunt, incidunt maxime hic
                            doloribus?
                        </p>
                    </Col>
                    <Col md={4}>
                        <h5>Social media</h5>
                        {socialMediaItem}
                    </Col>
                </Row>
            </Container>
            <div className="second-footer py-3 d-flex justify-content-center align-items-center mt-4">
                <p className="m-0">Copyright &copy; DogsWorld</p>
            </div>
        </footer>
    );
};

export default Footer;

import React from "react";
import { Image, Col } from "react-bootstrap";
import img1 from "images/clouds.jpg";

const About = () => {
    return (
        <>
            <Col xs={6} md={5}>
                <Image src={img1} thumbnail fluid />
            </Col>
            <Col md={7}>
                <p className="text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                    ad accusamus, minus a animi vitae ducimus nisi obcaecati?
                    Nostrum doloremque quia soluta fugit tempore nemo aspernatur
                    ea consequuntur voluptatum inventore! Lorem ipsum dolor sit
                    amet, consectetur adipisicing elit. Debitis odio, aspernatur
                    sed molestias magnam voluptates blanditiis, sunt sit
                    recusandae officiis dolor! Doloribus repellat impedit qui
                    officiis velit, illo ipsum esse?
                </p>
            </Col>
        </>
    );
};

export default About;

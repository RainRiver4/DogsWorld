import React from "react";
import { Col } from "react-bootstrap";
import Paginations from "components/Pagination";
import Breeds from "./Breeds";
import Dogs from "components/Dogs";

const Home = ({ breedsList, breed }) => {
    return (
        <>
            <Breeds breedsList={breedsList} />
            <Col md={9}>
                <h2 className="mb-4">Doggos</h2>
                <Paginations />
                <Dogs breed={breed} />
            </Col>
        </>
    );
};

export default Home;

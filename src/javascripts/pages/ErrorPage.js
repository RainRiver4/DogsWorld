import React from "react";
import { Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

const ErrorPage = ({ location }) => {
    return (
        <React.Fragment>
            <Alert show={true} variant="danger" className="w-100 text-center">
                <Alert.Heading>Error 404</Alert.Heading>
                <p className="font-size-subTitle text-muted">
                    Page <span>'{location.pathname}'</span> Not Found
                </p>
                <hr />
                <div className="d-flex justify-content-center">
                    <Link to="/">
                        <Button variant="primary">Come Back Home</Button>
                    </Link>
                </div>
            </Alert>
        </React.Fragment>
    );
};

export default ErrorPage;

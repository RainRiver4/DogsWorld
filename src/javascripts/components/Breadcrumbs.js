import React from "react";
import { Route, Link } from "react-router-dom";

const Breadcrumbs = () => {
    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <Route
                    path="/"
                    exact
                    render={props => {
                        return (
                            <>
                                <li className="breadcrumb-item text-capitalize">
                                    <Link to="/">Home Page</Link>
                                </li>
                            </>
                        );
                    }}
                />
                <Route
                    path="/:page"
                    exact
                    render={props => {
                        return (
                            <>
                                <li className="breadcrumb-item text-capitalize">
                                    <Link to="/">Home Page</Link>
                                </li>
                                <li className="breadcrumb-item text-capitalize">
                                    <Link to={props.match.url}>
                                        {props.match.params.page}
                                    </Link>
                                </li>
                            </>
                        );
                    }}
                />

                <Route
                    path="/dogs/:breed"
                    render={props => {
                        return (
                            <>
                                <li className="breadcrumb-item text-capitalize">
                                    <Link to="/">Home Page</Link>
                                </li>
                                <li className="breadcrumb-item text-capitalize">
                                    <Link to={props.match.url}>
                                        {props.match.params.breed}
                                    </Link>
                                </li>
                            </>
                        );
                    }}
                />

                <Route
                    path="/dogs/:breed/:subbreed"
                    render={props => {
                        return (
                            <>
                                <li className="breadcrumb-item text-capitalize">
                                    <Link to={props.match.url}>
                                        {props.match.params.subbreed}
                                    </Link>
                                </li>
                            </>
                        );
                    }}
                />
            </ol>
        </nav>
    );
};

export default Breadcrumbs;

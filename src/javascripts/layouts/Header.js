import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <div className="jumbotron-bg"></div>
                <h1 className="display-4">Welcome to dogs world</h1>
                <p className="lead">You can see there a lot of doggos.</p>
                <Link to="/">
                    <button className="btn btn-lg btn-primary">
                        Click to see
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Header;

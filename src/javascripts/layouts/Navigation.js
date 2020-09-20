import React from "react";
import { NavLink } from "react-router-dom";

const navList = [
    {
        path: "/",
        name: "Home",
        className: "nav-link",
        exact: true,
    },
    {
        path: "/about",
        name: "About",
        className: "nav-link",
    },
    {
        path: "/contact",
        name: "Contact",
        className: "nav-link",
    },
];

const Navigation = () => {
    const menuItem = navList.map(item => (
        <li key={item.name} className="nav-item">
            <NavLink
                to={item.path}
                className={item.className}
                exact={item.exact ? true : false}>
                {item.name}
            </NavLink>
        </li>
    ));

    return (
        <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light">
            <div className="container">
                <NavLink to="/" exact={true} className="navbar-brand">
                    DogsWorld
                </NavLink>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarMenu"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse justify-content-end"
                    id="navbarMenu">
                    {/* Navigation map method */}
                    <ul className="navbar-nav navbar-right">{menuItem}</ul>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;

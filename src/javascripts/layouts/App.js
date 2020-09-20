import React from "react";
import "font-awesome";
import "scss/style.scss";
import Header from "layouts/Header";
import Page from "layouts/Page";
import Footer from "layouts/Footer";
import Navigation from "layouts/Navigation";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
    return (
        <Router>
            <header>
                <Navigation />
                <Header />
            </header>
            <Page />
            <Footer />
        </Router>
    );
};

export default App;

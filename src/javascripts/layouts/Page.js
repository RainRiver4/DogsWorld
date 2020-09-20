import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import Contact from "pages/Contact";
import ErrorPage from "pages/ErrorPage";
import Breadcrumbs from "components/Breadcrumbs";
import Dogs from "components/Dogs";
import About from "pages/About";
import Breeds from "pages/Breeds";
import Paginations from "components/Pagination";

class Page extends Component {
    constructor(props) {
        super(props);
        this.baseEndPoint = "https://dog.ceo";
    }

    state = {
        breedsList: "",
        breedName: "" || "affenpinscher",
        breedImg: null,
        loading: false,
    };

    componentDidMount() {
        const urlBreed = `${this.baseEndPoint}/api/breeds/list/all`;
        const urlSubbreed = `${this.baseEndPoint}/api/breed/${this.state.breedName}/images/random/6`;
        fetch(urlBreed, { cookie: "samesite=strict" })
            .then(res => {
                if (res.ok) return res.json();
                return Promise.reject({
                    status: res.status,
                });
            })
            .then(data =>
                this.setState({
                    breedsList: data.message,
                    breedName: Object.keys(data.message)[0],
                })
            )
            .catch(err => {
                return console.error(`Ooops error: ${err.status}`);
            });

        fetch(urlSubbreed, { cookie: "samesite=strict" })
            .then(res => {
                if (res.ok) return res.json();
                return Promise.reject({
                    status: res.status,
                });
            })
            .then(data => this.setState({ breedImg: data.message }))
            .catch(err => console.error(`Ooops error: ${err.status}`));
    }

    // Route /
    Home = () => (
        <>
            <Breeds
                breedsList={this.state.breedsList}
                getImagesFromBreeds={this.getImagesFromBreeds.bind(this)}
            />
            <Col md={9}>
                <h2 className="mb-4">Doggos</h2>
                <Paginations
                    breedName={this.state.breedName}
                    getImagesFromBreeds={this.getImagesFromBreeds.bind(this)}
                />
                {!this.state.breedImg ? null : (
                    <Dogs
                        setImgBreeds={this.state.breedImg}
                        breedName={this.state.breedName}
                        loading={this.state.loading}
                    />
                )}
            </Col>
        </>
    );

    // Route /dogs/:page
    DogsPage = () => (
        <>
            <Breeds
                breedsList={this.state.breedsList}
                getImagesFromBreeds={this.getImagesFromBreeds.bind(this)}
            />
            <Col md={9}>
                <h2 className="mb-4">Doggos</h2>
                <Paginations
                    breedName={this.state.breedName}
                    getImagesFromBreeds={this.getImagesFromBreeds.bind(this)}
                />

                {!this.state.breedImg ? null : (
                    <Dogs
                        setImgBreeds={this.state.breedImg}
                        breedName={this.state.breedName}
                        loading={this.state.loading}
                    />
                )}
            </Col>
        </>
    );

    // Call dogsPage function and home function
    async getImagesFromBreeds(breed = null) {
        if (breed === null) return;
        const url = `${this.baseEndPoint}/api/breed/${breed}/images/random/6`;
        this.setState({ loading: !this.state.loading });

        const breedImg = await fetch(url, { cookie: "samesite=strict" })
            .then(res => {
                if (res.ok) return res.json();
                return Promise.reject({
                    status: res.status,
                });
            })
            .then(data => {
                return data.message;
            })
            .catch(err => console.error(`Ooops error: ${err.status}`));

        this.setState({
            breedImg: breedImg,
            breedName: breed,
            loading: !this.state.loading,
        });

        return breedImg;
    }

    render() {
        return (
            <Container>
                <Breadcrumbs />
                <Row>
                    <Switch>
                        <Route path="/" exact component={this.Home} />
                        <Route path="/about" component={About} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/dogs/:breed" component={this.DogsPage} />
                        <Route
                            path="dogs/:breed/:subbreed"
                            component={this.DogsPage}
                        />
                        <Route component={ErrorPage} />
                    </Switch>
                </Row>
            </Container>
        );
    }
}

export default Page;

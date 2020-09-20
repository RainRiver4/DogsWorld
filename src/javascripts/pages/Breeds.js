import React from "react";
import { Col, Accordion, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

let prevElement = null;

const handleAddActiveClass = e => {
    if (prevElement) prevElement.classList.remove("active-breed");
    prevElement = e.target;
    e.target.classList.add("active-breed");
};

const accordionCardToggle = (
    indexOut,
    indexIn,
    flag = false,
    breed = null,
    getImagesFromBreeds = null
) => (
    <Card key={`${indexOut}${indexIn}`}>
        <Accordion.Toggle
            as={Card.Header}
            eventKey={indexOut}
            className="accordion-toggle-header-card"
        >
            <Link
                to={`/dogs/${breed}`}
                className="nav-link link-breed text-capitalize"
                onClick={e => {
                    handleAddActiveClass(e);
                    {
                        flag && getImagesFromBreeds(breed);
                    }
                }}
            >
                {breed}
            </Link>
        </Accordion.Toggle>
    </Card>
);

const getBreedsListToArray = breedsList => {
    const breedsInArray = [];
    let index = 0;
    for (const breed in breedsList) {
        index++;
        if (breedsList[breed].length === 0) {
            breedsInArray.push(breed);
        } else {
            breedsInArray[index] = [];
            breedsInArray[index].push(breed);
            for (const subbreed of breedsList[breed]) {
                breedsInArray[index].push(subbreed);
            }
        }
    }
    // console.log(breedsInArray);
    return breedsInArray;
};

const collapse = (
    index,
    indexIn,
    subbreed = null,
    firstPartBreeds = null,
    getImagesFromBreeds
) => (
    <Card key={`${index}${indexIn}`}>
        <Accordion.Collapse eventKey={index}>
            <Card.Body className="accordion-toggle-header-card text-capitalize">
                <Link
                    to={`/dogs/${firstPartBreeds}/${subbreed}`}
                    className="nav-link link-breed"
                    onClick={e => {
                        handleAddActiveClass(e);
                        getImagesFromBreeds(`${firstPartBreeds}/${subbreed}`);
                    }}
                >
                    {firstPartBreeds} {subbreed}
                </Link>
            </Card.Body>
        </Accordion.Collapse>
    </Card>
);

const addBreedsFromAside = (breedsArray, getImagesFromBreeds) => {
    return breedsArray.map((breed, indexOut) => {
        let firstPartBreeds = null;
        if (breed instanceof Array)
            return breed.map((subbreed, indexIn) => {
                if (indexIn === 0) {
                    firstPartBreeds = subbreed;
                    return accordionCardToggle(
                        indexOut,
                        indexIn,
                        false,
                        subbreed,
                        getImagesFromBreeds
                    );
                } else
                    return collapse(
                        indexOut,
                        indexIn,
                        subbreed,
                        firstPartBreeds,
                        getImagesFromBreeds
                    );
            });
        else
            return accordionCardToggle(
                indexOut,
                indexOut,
                true,
                breed,
                getImagesFromBreeds
            );
    });
};

const Breeds = ({ breedsList, getImagesFromBreeds }) => {
    // console.log(getImagesFromBreeds);
    return (
        <Col md={3}>
            <h2 className="mb-4">Breeds</h2>
            <div className="breedListScrollbar scrollbar-warning">
                <Accordion>
                    {addBreedsFromAside(
                        getBreedsListToArray(breedsList),
                        getImagesFromBreeds
                    )}
                </Accordion>
            </div>
        </Col>
    );
};

export default Breeds;

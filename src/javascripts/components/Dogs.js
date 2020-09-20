import React from "react";
import { Spinner } from "react-bootstrap";

const setImgSrc = (images, breedName) => {
    const breedNameTxt = [...breedName];
    const indexBackSlash = breedNameTxt.findIndex(letter => letter === "/");
    let firstPartBreedName = breedName;
    let secondPartBreedName = null;
    if (indexBackSlash !== -1) {
        firstPartBreedName = breedNameTxt.splice(0, indexBackSlash);
        secondPartBreedName = breedNameTxt.splice(1, indexBackSlash);
    }

    return images.map((src, index) => {
        return (
            <div className="col-md-6" key={index}>
                <div className="card mb-4">
                    <div className="embed-responsive embed-responsive-16by9">
                        <img
                            src={src}
                            alt=""
                            className="card-img-top embed-responsive-item"
                        />
                    </div>
                    <div className="card-body">
                        <h4 className="card-title mb-0 text-capitalize">
                            {firstPartBreedName} {secondPartBreedName}
                        </h4>
                        <p className="mt-0">Beautiful doggo</p>
                    </div>
                    <div className="card-footer text-center">About Me</div>
                </div>
            </div>
        );
    });
};

const Dogs = ({ setImgBreeds, breedName, loading }) => {
    return (
        <div className="row">
            {loading ? (
                <div className="d-flex justify-content-center w-100">
                    <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                </div>
            ) : (
                setImgSrc(setImgBreeds, breedName)
            )}
        </div>
    );
};

export default Dogs;

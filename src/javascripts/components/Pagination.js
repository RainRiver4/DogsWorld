import React, { useState, useEffect } from "react";
import { Pagination } from "react-bootstrap";

let prevActive = null;

const activehandleClick = e => {
    if (prevActive) prevActive.classList.remove("activePage");
    prevActive = e.currentTarget;
    e.currentTarget.classList.add("activePage");
};

const Paginations = ({ breedName, getImagesFromBreeds }) => {
    let items = [];

    for (let number = 1; number < 4; number++) {
        items.push(
            <Pagination.Item
                key={number}
                className="activePagination"
                onClick={e => {
                    activehandleClick(e);
                    getImagesFromBreeds(breedName);
                }}
            >
                {number}
            </Pagination.Item>
        );
    }
    return (
        <Pagination>
            <Pagination.Prev>Previous</Pagination.Prev>
            {items}
            <Pagination.Next>Next</Pagination.Next>
        </Pagination>
    );
};

export default Paginations;

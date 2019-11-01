'use strict';

const wump = require("wumpfetch");
const Err = require("./EclyssiaError.js/index.js");

const baseURL = "https://eclyssia-api.tk/api/v1/";

const get = async (endpoint = "", url = "") => {
    const data = await wump(`${baseURL}${endpoint}?url=${url}`).send();

    if (data.statusCode !== 200) {
        throw new Err(data);
    }

    return data.buffer();
};


module.exports = get;

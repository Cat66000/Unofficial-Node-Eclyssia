'use strict';

const wump = require("wumpfetch");
const Err = require("./EclyssiaError.js");

const baseURL = "https://eclyssia-api.tk/api/v1/";

// username is only required by phvideo & captcha endpoints
const get = async (endpoint = "", url = "", username = "") => {
    const data = await wump(`${baseURL}${endpoint}?url=${url}?username=${username}`).send();

    if (data.statusCode !== 200) {
        throw new Err(data);
    }

    return data.buffer();
};


module.exports = get;

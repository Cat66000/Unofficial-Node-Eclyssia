// @ts-nocheck
'use strict';

const wump = require("wumpfetch");
const Err = require("./EclyssiaError.js");


const endpoints = {
    filters: [
        "blur",
        "greyscale",
        "invert",
        "pixelate",
        "posterize",
        "sepia"
    ],
    image: [
        "beautiful",
        "blood",
        "bobross",
        "brazzers",
        "captcha",
        "gay",
        "jackolantern",
        "phvideo",
        "prison",
        "treasure",
        "triggered",
        "whatspokemon"
    ]
};

const baseURL = "https://eclyssia-api.tk/api/v1/";

// username is only required by phvideo & captcha endpoints
const get = async (endpoint = "", url = "", username = "") => {
    username = encodeURIComponent(username);

    const data = await wump(`${baseURL}${endpoint}?url=${url}&username=${username}`).send();

    if (data.statusCode !== 200) {
        throw new Err(data);
    }

    return data.buffer();
};


module.exports = {
    get, endpoints
};

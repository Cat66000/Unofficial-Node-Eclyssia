// @ts-nocheck
'use strict';

const wump = require("wumpfetch");
const Err = require("./EclyssiaError.js");

const baseURL = "https://eclyssia.xyz/api/v1/";

// username is required by captcha & phvideo endpoints
// top and bottom are required by meme endpoint, width and height are optional
const get = async (endpoint = "", params) => {
    // eslint-disable-next-line prefer-const
    let { url, username, height, width, bottom, top } = params;

    // if (url) url = encodeURIComponent(url);
    if (username) username = encodeURIComponent(username);

    let data;
    if (endpoint === "meme") {
        data = await wump(`${baseURL}meme?url=${url}?top=${top}?bottom=${bottom}${width ? `?width=${width}` : ""}${height ? `?height=${height}` : ""}`).send();
    } else if (["captcha", "phvideo"].includes(endpoint)) {
        data = await wump(`${baseURL}${endpoint}?url=${url}&username=${username}`).send();
    } else {
        data = await wump(`${baseURL}${endpoint}?url=${url}`).send();
    }

    if (data.statusCode !== 200) {
        throw new Err(data);
    }

    return data.buffer();
};

const endpoints = async () => {
    const data = await wump(baseURL).send();

    if (data.statusCode !== 200) {
        throw new Err(data);
    }

    return data.json().data.endpoints;
};

module.exports = {
    get, endpoints
};

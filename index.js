const Err = require("./EclyssiaError.js"),
    { deprecate } = require("util");

const errorText = "The Eclyssia API is gone, the reason is unknown";

const get = () => {
    throw new Err(errorText);
};

const endpoints = async () => {
    throw new Err(errorText);
};

module.exports = {
    get: deprecate(get, errorText), endpoints: deprecate(endpoints, errorText), version: require("./package.json").version
};

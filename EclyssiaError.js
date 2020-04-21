class EclyssiaError extends Error {

    constructor(message) {
        super(message);

        Error.captureStackTrace(this, this.constructor);

        this.name = "EclyssiaIsGoneError";
    }

}

module.exports = EclyssiaError;

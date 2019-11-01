class EclyssiaError extends Error {

    constructor(data) {
        const { status, response } = data.parse();
        super();

        Error.captureStackTrace(this, this.constructor);

        this.name = 'EclyssiaError';
        this.message = `${status} - ${response}`;
    }

}

module.exports = EclyssiaError;

module.exports = class CustomException extends Error {
    constructor(payload) {
        super(payload.error);
        this.payload = payload;
    }
}
module.exports = class CustomException extends Error {
    status;
    description;

    /**
     * 
     * @param {number} status 
     * @param {string} description 
     */
    constructor(status, description) {
        super()
        this.status = status;
        this.description = description;
    }
}
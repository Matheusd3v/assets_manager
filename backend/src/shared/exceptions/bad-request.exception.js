const { HttpStatus } = require('../enum.shared')
const CustomException = require('./custom.exception')

module.exports = class BadRequestException extends CustomException {
    /**
     * 
     * @param {string} description - Error description
     */
    constructor(description) {
        super(HttpStatus.BAD_REQUEST, description);
    }
}
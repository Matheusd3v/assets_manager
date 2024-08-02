const { HttpStatus } = require('../enum.shared')
const CustomException = require('./custom.exception')

module.exports = class NotFoundException extends CustomException {
    /**
     * 
     * @param {string} description - Error description
     */    
    constructor(description) {
        super(HttpStatus.NOT_FOUND, description);
    }
}
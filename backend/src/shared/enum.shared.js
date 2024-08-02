const HttpMethod = {
    GET: 'GET',
    POST: 'POST',
    DELETE: 'DELETE'
}

const HttpStatus = {
    OK: 200,
    CREATED: 201,
    NO_CONTENT: 204,
    BAD_REQUEST: 401,
    NOT_FOUND: 404,
    INTERNAL_ERROR: 505,
}

module.exports = { HttpMethod, HttpStatus }
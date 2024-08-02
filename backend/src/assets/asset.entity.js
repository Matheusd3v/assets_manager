
class Asset {
    _name
    _id

    /**
     * 
     * @param {string} name 
     * @param {number} id 
     */
    constructor(name, id) {
        this._name = name
        this._id = id
    }
}

module.exports = { Asset }

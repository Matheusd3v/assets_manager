
class Sensor {
    _name
    _id
    _assetId

    /**
     * 
     * @param {string} name 
     * @param {number} assetId 
     * @param {number} id 
     */
    constructor(name, assetId, id) {
        this._name = name
        this._assetId = assetId
        this._id = id
    }
}

module.exports = { Sensor }

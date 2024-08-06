
class Sensor {
    _name
    _id
    _assetId
    _totalCollections

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

    /**
     * @returns {number}
     */
    getTotalCollections() {
        return this._totalCollections 
    }

    /**
     * 
     * @param {number} total 
     * @returns {void}
     */
    setTotalCollections(total) {
        this._totalCollections = total
    }
}

module.exports = { Sensor }


class Asset {
    _name
    _id
    _totalSensors

    /**
     * 
     * @param {string} name 
     * @param {number} id 
     * @param { number | undefined } totalSensors
     */
    constructor(name, id, totalSensors) {
        this._name = name
        this._id = id
        this._totalSensors = totalSensors
    }

    getTotalSensors() {
        return this?._totalSensors ?? 0
    }

    setTotalSensors(total) {
        this._totalSensors = total
    }
}

module.exports = { Asset }

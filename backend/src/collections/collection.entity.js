class Collection {
    _id;
    _value;
    _date;
    _sensorId;

    /**
     *
     * @param {{
     * value: number;
     * date: Date;
     * sensorId: number;
     * id: number | null
     * }} param0
     */
    constructor({ value, date, sensorId, id }) {
        this._value = value;
        this._date = date;
        this._sensorId = sensorId;
        this._id = id;
    }
}

module.exports = { Collection };

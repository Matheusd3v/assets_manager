const { ISensorRepository } = require("./sensor-interface.repository");
const { Sensor } = require("../sensor.entity");

class SensorInMemoryRepository extends ISensorRepository {
    constructor() {
        super();
        this.database = [];
        this.lastId = 0;
    }

    /**
     *
     * @param {Sensor} sensor
     */
    async create(sensor) {
        this.lastId += 1;
        sensor._id = this.lastId;
        this.database.push(sensor);
    }

    /**
     *
     * @param {number} assetId
     * @param {number} id
     */
    async delete(assetId, id) {
        const index = this.database.findIndex(
            (sensor) => sensor._id === id && sensor._assetId === assetId
        );
        if (index < 0) return;
        this.database.splice(index, 1);
    }

    /**
     * @param {number} assetId
     * @returns {Sensor[]}
     */
    async getAll(assetId) {
        return this.database.filter((sensor) => sensor._assetId === assetId);
    }

    /**
     *
     * @param {string} id
     */
    async getById(id) {
        const index = this.database.findIndex((sensor) => sensor._id === id);
        if (index < 0) return null;
        return this.database[index];
    }
}

const sensorInMemoryRepository = new SensorInMemoryRepository();

module.exports = { sensorInMemoryRepository };

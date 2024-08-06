const { ISensorRepository } = require("./sensor-interface.repository");
const { Sensor } = require("../sensor.entity");
const {
    collectionInMemoryRepository,
} = require("../../collections/repository/collection-in-memory.repository");
const {
    ICollectionRepository,
} = require("../../collections/repository/collection-interface.repository");
class SensorInMemoryRepository extends ISensorRepository {
    /**
     *
     * @param {ICollectionRepository} collectionInMemoryRepository
     */
    constructor(collectionInMemoryRepository) {
        super();
        this.database = [];
        this.lastId = 0;
        this._collectionInMemoryRepository = collectionInMemoryRepository;
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
        await this._collectionInMemoryRepository.delete(id);
    }

    /**
     * @param {number} assetId
     * @param {Object} param1
     * @param {boolean | undefined} param1.countCollections
     * @returns {Sensor[]}
     */
    async getAll(assetId, { countCollections }) {
        const filtered = this.database.filter(
            (sensor) => sensor._assetId === assetId
        );
        if (!countCollections) return filtered;
        return Promise.all(
            filtered.map(async (sensor) => {
                const total = await this._collectionInMemoryRepository.count({
                    sensorId: sensor._id,
                });
                sensor.setTotalCollections(total)
                return sensor
            })
        );
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

    async deleteByAssetId(assetId) {
        const index = this.database.findIndex(
            (sensor) => sensor._assetId === assetId
        );
        if (index < 0) return;
        this.database.splice(index, 1);
    }

    /**
     *
     * @param {{ assetId: number | undefined }} param0
     * @returns {Promise<number>}
     */
    async count({ assetId }) {
        return this.database.reduce((accumulator, sensor) => {
            if (!assetId) {
                return accumulator + 1;
            }

            if (sensor._assetId === assetId) {
                return accumulator + 1;
            }

            return accumulator;
        }, 0);
    }
}

const sensorInMemoryRepository = new SensorInMemoryRepository(
    collectionInMemoryRepository
);

module.exports = { sensorInMemoryRepository };

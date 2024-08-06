const { IAssetRepository } = require("./asset-interface.repository");
const { Asset } = require("../asset.entity");
const {
    ISensorRepository,
} = require("../../sensors/repository/sensor-interface.repository");
const {
    sensorInMemoryRepository,
} = require("../../sensors/repository/sensor-in-memory.repository");

class AssetInMemoryRepository extends IAssetRepository {
    /**
     *
     * @param {ISensorRepository} sensorInMemoryRepository
     */
    constructor(sensorInMemoryRepository) {
        super();
        this.database = [];
        this.lastId = 0;
        this._sensorInMemoryRepository = sensorInMemoryRepository;
    }

    /**
     *
     * @param {Asset} asset
     */
    async create(asset) {
        this.lastId += 1;
        asset._id = this.lastId;
        this.database.push(asset);
    }

    /**
     *
     * @param {number} id
     */
    async delete(id) {
        const index = this.database.findIndex((asset) => asset._id === id);
        if (index < 0) return;
        this.database.splice(index, 1);
        await this._sensorInMemoryRepository.deleteByAssetId(id);
    }

    /**
     * @param { {countSensor: boolean} } param0
     * @returns {Promise<Asset[]>}
     */
    async getAll({ countSensor }) {
        if (countSensor) {
            return Promise.all(
                this.database.map(async (asset) => {
                    const totalSensors =
                        await this._sensorInMemoryRepository.count({
                            assetId: asset._id,
                        });
                    asset.setTotalSensors(totalSensors);
                    return asset;
                })
            );
        }
        return this.database;
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

const assetInMemoryRepository = new AssetInMemoryRepository(
    sensorInMemoryRepository
);

module.exports = { assetInMemoryRepository };

const { IAssetRepository } = require("./asset-interface.repository");
const { Asset } = require("../asset.entity");

class AssetInMemoryRepository extends IAssetRepository {
    constructor() {
        super();
        this.database = [];
        this.lastId = 0;
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
        const index = this.database.findIndex(asset => asset._id === id)
        if (index < 0) return;
        this.database.splice(index, 1);
    }

    /**
     * 
     * @returns {Promise<Asset[]>}
     */
    async getAll() {
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

const assetInMemoryRepository = new AssetInMemoryRepository()


module.exports = { assetInMemoryRepository }
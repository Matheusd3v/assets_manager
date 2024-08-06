const { IRepository } = require("../../shared/repository.shared");
const { Asset } = require("../asset.entity");

class IAssetRepository extends IRepository {
    /**
     *
     * @param {Asset} asset
     * @returns {Promise<void>}
     */
    async create(asset) {
        throw new Error("Method not implemented");        
    }

    /**
     *
     * @param {number} id
     * @returns {Promise<void>}
     */
    async delete(id) {
        throw new Error("Method not implemented");
    }

    /**
     *  @param {{ countSensor:boolean }} params 
     * @returns {Promise<Asset[]>}
     */
    async getAll(params) {
        throw new Error("Method not implemented");
    }

    /**
     *
     * @param {number} id
     * @returns {Promise<Asset | null>}
     */
    async getById(id) {
        throw new Error("Method not implemented");
    }
}

module.exports = { IAssetRepository };

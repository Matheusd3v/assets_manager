const { IRepository } = require("../../shared/repository.shared");

class ISensorRepository extends IRepository {
    /**
     *
     * @param {Sensor} sensor
     */
    async create(sensor) {
        throw new Error("Method not implemented");
    }

    /**
     * @param {number} assetId 
     * @param {number} id
     */
    async delete(assetId, id) {
        throw new Error("Method not implemented");
    }

    /**
     * @param {number} assetId 
     * @returns {Promise<Sensor[]>}
     */
    async getAll(assetId) {
        throw new Error("Method not implemented");
    }

    /**
     *
     * @param {number} id
     */
    async getById(id) {
        throw new Error("Method not implemented");
    }
}

module.exports = { ISensorRepository };

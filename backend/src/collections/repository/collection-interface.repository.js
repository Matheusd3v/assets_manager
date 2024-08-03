const { Collection } = require("../collection.entity");

class ICollectionRepository {
    /**
     *
     * @param {Collection} colletion
     * @returns {Promise<void>}
     */
    create(colletion) {
        throw new Error("Method not implemented");
    }

    /**
     *
     * @param {number} sensorId
     * @param {Date} date
     * @returns {Promise<void>}
     */
    delete(sensorId, date) {
        throw new Error("Method not implemented");
    }

    /**
     *
     * @param {number} sensorId
     * @return {Promise<Collection[]>}
     */
    getAll(sensorId) {
        throw new Error("Method not implemented");
    }
}

module.exports = { ICollectionRepository };

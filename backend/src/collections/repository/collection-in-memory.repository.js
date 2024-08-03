const { Collection } = require("../collection.entity");
const { ICollectionRepository } = require("./collection-interface.repository");

class CollectionInMemoryRepository extends ICollectionRepository {
    constructor() {
        super();
        this.database = [];
        this.lastId = 0;
    }

    /**
     *
     * @param {Collection} colletion
     */
    async create(colletion) {
        this.lastId += 1;
        colletion._id = this.lastId;
        this.database.push(colletion);
    }

    /**
     *
     * @param {number} sensorId
     * @param {Date} date
     */
    async delete(sensorId, date) {
        const index = this.database.findIndex((collection) => {
            return (
                collection._sensorId === sensorId &&
                collection._date.getTime() === date.getTime()
            );
        });
        if (index < 0) return;
        this.database.splice(index, 1);
    }

    /**
     *
     * @param {number} sensorId
     */
    getAll(sensorId) {
        return this.database.filter(
            (collection) => collection._sensorId === sensorId
        );
    }
}

const collectionInMemoryRepository = new CollectionInMemoryRepository();

module.exports = { collectionInMemoryRepository };
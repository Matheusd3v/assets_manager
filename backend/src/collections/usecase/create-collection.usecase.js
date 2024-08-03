const { CollectionMapper } = require("../mapper/collection.mapper");
const {
    ICollectionRepository,
} = require("../repository/collection-interface.repository");

module.exports = class CreateCollectionUseCase {
    /**
     *
     * @param {ICollectionRepository} collectionRepository
     */
    constructor(collectionRepository) {
        this._collectionRepository = collectionRepository;
    }

    /**
     *
     * @param {{
     *  date: Date;
     *  value: number;
     *  sensorId: number;
     * }} param0
     */
    async execute({ date, value, sensorId }) {
        const collection = CollectionMapper.toEntity({
            sensorId,
            value,
            date,
        });
        await this._collectionRepository.create(collection);
    }
};

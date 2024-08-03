const {
    CollectionMapper,
    CollectionPresentation,
} = require("../mapper/collection.mapper");
const {
    ICollectionRepository,
} = require("../repository/collection-interface.repository");

module.exports = class GetCollectionsUseCase {
    /**
     *
     * @param {ICollectionRepository} collectionRepository
     */
    constructor(collectionRepository) {
        this._collectionRepository = collectionRepository;
    }

    /**
     *
     * @param {sensorId: number} param0
     * @returns { Promise<CollectionPresentation[]> }
     */
    async execute({ sensorId }) {
        const collections = await this._collectionRepository.getAll(sensorId);
        return collections.map(CollectionMapper.toClient);
    }
};

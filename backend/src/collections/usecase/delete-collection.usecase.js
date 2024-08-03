const {
    ICollectionRepository,
} = require("../repository/collection-interface.repository");

module.exports = class DeleteCollectionUseCase {
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
     *  sensorId: number;
     *  date: Date;
     * }} param0
     */
    async execute({ sensorId, date }) {
        await this._collectionRepository.delete(sensorId, date);
    }
};

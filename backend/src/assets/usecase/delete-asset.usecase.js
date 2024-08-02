const {
    IAssetRepository,
} = require("../repository/asset-interface.repository");

module.exports = class DeleteAssetUseCase {
    /**
     *
     * @param {IAssetRepository} assetRepository
     */
    constructor(assetRepository) {
        this._assetRepository = assetRepository;
    }

    /**
     *
     * @param {number} id
     * @returns {Promise<void>}
     */
    async execute(id) {
        await this._assetRepository.delete(id);
    }
};

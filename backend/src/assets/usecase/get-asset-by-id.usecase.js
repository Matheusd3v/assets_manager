const {
    IAssetRepository,
} = require("../repository/asset-interface.repository");
const { Asset } = require('../asset.entity')
const NotFoundException = require('../../shared/exceptions/not-found.exception')

module.exports = class GetAssetByIdUseCase {
    /**
     *
     * @param {IAssetRepository} assetRepository
     */
    constructor(assetRepository) {
        this._assetRepository = assetRepository;
    }

    /**
     * @param {number} assetId 
     * @returns {Promise<Asset>}
     */
    async execute(assetId) {
        const asset = await this._assetRepository.getById(assetId);
        if (!asset) throw new NotFoundException("Ativo não encontrado!");
        return asset
    }
};

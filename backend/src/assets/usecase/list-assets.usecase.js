const {
    IAssetRepository,
} = require("../repository/asset-interface.repository");
const { AssetMapper, AssetPresentation } = require("../mapper/asset.mapper");

module.exports = class ListAssetsUseCase {
    /**
     *
     * @param {IAssetRepository} assetRepository
     */
    constructor(assetRepository) {
        this._assetRepository = assetRepository;
    }

    /**
     * @returns {Promise<AssetPresentation[]>}
     */
    async execute() {
        const assetEntities = await this._assetRepository.getAll();
        return assetEntities.map(AssetMapper.toClient);
    }
};

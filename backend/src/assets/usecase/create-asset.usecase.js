const {
    IAssetRepository,
} = require("../repository/asset-interface.repository");
const { AssetMapper } = require("../mapper/asset.mapper");

module.exports = class CreateAssetUseCase {
    /**
     *
     * @param {IAssetRepository} assetRepository
     */
    constructor(assetRepository) {
        this._assetRepository = assetRepository;
    }

    /**
     *
     * @param {{ name: string }} body
     */
    async execute(body) {
        const asset = AssetMapper.toEntity(body);
        await this._assetRepository.create(asset);
    }
};

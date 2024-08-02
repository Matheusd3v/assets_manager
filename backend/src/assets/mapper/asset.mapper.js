const { Asset } = require('../asset.entity')

class AssetPresentation {
    id
    name
}

class AssetBodyCreate {
    name
}

class AssetMapper {
    /**
     * 
     * @param {AssetBodyCreate} createBody 
     * @returns {Asset}
     */
    static toEntity(createBody) {
        const asset = new Asset(createBody.name)
        return asset
    }

    /**
     * 
     * @param {Asset} asset 
     * @returns {AssetPresentation}
     */
    static toClient(asset) {
        return {
            id: asset._id,
            name: asset._name
        }
    }
}

module.exports = {
    AssetMapper,
    AssetPresentation
}
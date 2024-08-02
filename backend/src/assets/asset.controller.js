const { HttpMethod, HttpStatus } = require('../shared/enum.shared')
const { assetInMemoryRepository } = require('./repository/asset-in-memory.repository')
const CreateAssetUseCase = require('./usecase/create-asset.usecase')
const ListAssetsUseCase = require('./usecase/list-assets.usecase')
const DeleteAssetUseCase = require('./usecase/delete-asset.usecase')

const AssetRoute = {
    CREATE: '/assets',
    LIST: '/assets',
    DELETE: '/assets/{assetId}'
}

class AssetController {
    static routes = [
        {
            method: HttpMethod.POST,
            route: AssetRoute.CREATE,
            func: AssetController.create,
        }, 
        {
            method: HttpMethod.GET,
            route: AssetRoute.LIST,
            func: AssetController.list,
        },
        {
            method: HttpMethod.DELETE,
            route: AssetRoute.DELETE,
            func: AssetController.delete,
        }
    ]

    static async create(request) {
        const { body } = request
        const createAssetUseCase = new CreateAssetUseCase(assetInMemoryRepository)
        await createAssetUseCase.execute(body)

        return { 
            statusCode: HttpStatus.CREATED,
            body: {
                message: "Ativo criado com sucesso!"
            }
        }
    }

    static async list() {
        const listAssetsUseCase = new ListAssetsUseCase(assetInMemoryRepository)
        const assets = await listAssetsUseCase.execute()

        return {
            statusCode: HttpStatus.OK,
            body: {
                data: assets
            }
        }
    }

    static async delete(request) {
        const { assetId } = request.params
        const deleteAssetUseCase = new DeleteAssetUseCase(assetInMemoryRepository)
        await deleteAssetUseCase.execute(+assetId)

        return {
            statusCode: HttpStatus.NO_CONTENT
        }
    }
}

module.exports = { AssetController }
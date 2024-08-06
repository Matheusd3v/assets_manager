const {
    assetInMemoryRepository,
} = require("../assets/repository/asset-in-memory.repository");
const GetAssetByIdUseCase = require("../assets/usecase/get-asset-by-id.usecase");
const {
    sensorInMemoryRepository,
} = require("../sensors/repository/sensor-in-memory.repository");
const GetSensorByIdUseCase = require("../sensors/usecase/get-sensor-by-id.usecase");
const GetSensorUseCase = require("../sensors/usecase/get-sensor.usecase");
const { HttpStatus, HttpMethod } = require("../shared/enum.shared");
const {
    collectionInMemoryRepository,
} = require("./repository/collection-in-memory.repository");
const CreateCollectionUseCase = require("./usecase/create-collection.usecase");
const DeleteCollectionUseCase = require("./usecase/delete-collection.usecase");
const GetCollectionsUseCase = require("./usecase/get-collections.usecase");

const CollectionRoute = {
    CREATE: "/assets/{assetId}/sensors/{sensorId}",
    LIST: "/assets/{assetId}/sensors/{sensorId}",
};

class CollectionController {
    static routes = [
        {
            method: HttpMethod.GET,
            route: CollectionRoute.LIST,
            func: CollectionController.list,
        },
        {
            method: HttpMethod.POST,
            route: CollectionRoute.CREATE,
            func: CollectionController.create,
        },
    ];

    static async list({ params }) {
        const sensorId = +params.sensorId;
        const assetId = +params.assetId;
        const getAssetByIdUseCase = new GetAssetByIdUseCase(
            assetInMemoryRepository
        );
        const getSensorByIdUseCase = new GetSensorByIdUseCase(
            sensorInMemoryRepository
        );
        const getCollectionsUseCase = new GetCollectionsUseCase(
            collectionInMemoryRepository
        );

        await Promise.all([
            getAssetByIdUseCase.execute(assetId),
            getSensorByIdUseCase.execute(sensorId),
        ]);
        const collections = await getCollectionsUseCase.execute({
            sensorId,
        });

        return {
            statusCode: HttpStatus.OK,
            body: {
                collections,
            },
        };
    }

    static async create({ params, body }) {
        const sensorId = +params.sensorId;
        const assetId = +params.assetId;
        const getAssetByIdUseCase = new GetAssetByIdUseCase(
            assetInMemoryRepository
        );
        const getSensorByIdUseCase = new GetSensorByIdUseCase(
            sensorInMemoryRepository
        );
        const createCollectionUseCase = new CreateCollectionUseCase(
            collectionInMemoryRepository
        );

        await Promise.all([
            getAssetByIdUseCase.execute(assetId),
            getSensorByIdUseCase.execute(sensorId),
        ]);
        await createCollectionUseCase.execute({
            value: body.value,
            date: new Date(body.date),
            sensorId,
        });

        return {
            statusCode: HttpStatus.CREATED,
            body: {
                message: "Coleta criada com sucesso!",
            },
        };
    }
}

module.exports = { CollectionController };

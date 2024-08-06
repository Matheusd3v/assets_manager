const { HttpMethod, HttpStatus } = require("../shared/enum.shared");
const {
    assetInMemoryRepository,
} = require("../assets/repository/asset-in-memory.repository");
const {
    sensorInMemoryRepository,
} = require("./repository/sensor-in-memory.repository");
const CreateSensorUseCase = require("./usecase/create-sensor.usecase");
const GetSensorUseCase = require("./usecase/get-sensor.usecase");
const GetAssetByIdUseCase = require("../assets/usecase/get-asset-by-id.usecase");
const DeleteSensorUseCase = require("./usecase/delete-sensor.usecase");
const DeleteCollectionUseCase = require("../collections/usecase/delete-collection.usecase");
const {
    collectionInMemoryRepository,
} = require("../collections/repository/collection-in-memory.repository");

const SensorRoute = {
    LIST: "/assets/{assetId}/sensors",
    CREATE: "/assets/{assetId}/sensors",
    DELETE: "/assets/{assetId}/sensors/{sensorId}",
};

class SensorController {
    static routes = [
        {
            method: HttpMethod.GET,
            route: SensorRoute.LIST,
            func: SensorController.listByAssetId,
        },
        {
            method: HttpMethod.POST,
            route: SensorRoute.CREATE,
            func: SensorController.create,
        },
        {
            method: HttpMethod.DELETE,
            route: SensorRoute.DELETE,
            func: SensorController.delete,
        },
    ];

    static async listByAssetId({ params }) {
        const assetId = +params.assetId;
        const getAssetByIdUseCase = new GetAssetByIdUseCase(
            assetInMemoryRepository
        );
        const getSensorUseCase = new GetSensorUseCase(sensorInMemoryRepository);
        await getAssetByIdUseCase.execute(assetId);
        const sensors = await getSensorUseCase.execute(assetId);
        return {
            statusCode: HttpStatus.OK,
            body: { sensors },
        };
    }

    static async create({ params, body }) {
        const assetId = +params.assetId;
        const getAssetByIdUseCase = new GetAssetByIdUseCase(
            assetInMemoryRepository
        );
        const createSensorUseCase = new CreateSensorUseCase(
            sensorInMemoryRepository
        );
        await getAssetByIdUseCase.execute(assetId);
        await createSensorUseCase.execute({
            name: body.name,
            assetId,
        });

        return {
            statusCode: HttpStatus.CREATED,
            body: {
                message: "Sensor criado com sucesso!",
            },
        };
    }

    static async delete({ params, queryString }) {
        const assetId = +params.assetId;
        const sensorId = +params.sensorId;
        const date = queryString?.date;
        const deleteSensorUseCase = new DeleteSensorUseCase(
            sensorInMemoryRepository
        );
        if (sensorId && date) {
            const deleteCollectionUseCase = new DeleteCollectionUseCase(
                collectionInMemoryRepository
            );
            await deleteCollectionUseCase.execute({
                date: new Date(date),
                sensorId,
            });

            return {
                statusCode: HttpStatus.NO_CONTENT,
            };
        }

        await deleteSensorUseCase.execute({
            id: sensorId,
            assetId,
        });

        return {
            statusCode: HttpStatus.NO_CONTENT,
        };
    }
}

module.exports = { SensorController };

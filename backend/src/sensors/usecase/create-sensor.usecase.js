const {
    ISensorRepository,
} = require("../repository/sensor-interface.repository");
const { SensorMapper } = require("../mapper/sensor.mapper");

module.exports = class CreateSensorUseCase {
    /**
     *
     * @param {ISensorRepository} sensorRepository
     */
    constructor(sensorRepository) {
        this._sensorRepository = sensorRepository;
    }

    /**
     *
     * @param {{ name: string,  assetId: number}} body - Body to create new sensor
     */
    async execute(body) {
        const sensor = SensorMapper.toEntity({
            name: body.name,
            assetId: body.assetId,
        });
        await this._sensorRepository.create(sensor);
    }
};

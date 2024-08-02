const {
    ISensorRepository,
} = require("../repository/sensor-interface.repository");
const { SensorMapper, SensorPresentation } = require("../mapper/sensor.mapper");

module.exports = class GetSensorUseCase {
    /**
     *
     * @param {ISensorRepository} sensorRepository
     */
    constructor(sensorRepository) {
        this._sensorRepository = sensorRepository;
    }

    /**
     *
     * @param {number} assetId
     * @returns {Promise<SensorPresentation[]>}
     */
    async execute(assetId) {
        const sensors = await this._sensorRepository.getAll(assetId);
        return sensors.map(SensorMapper.toClient);
    }
};

const NotFoundException = require("../../shared/exceptions/not-found.exception");
const {
    ISensorRepository,
} = require("../repository/sensor-interface.repository");
const { Sensor } = require("../sensor.entity");

module.exports = class GetSensorByIdUseCase {
    /**
     *
     * @param {ISensorRepository} sensorRepository
     */
    constructor(sensorRepository) {
        this._sensorRepository = sensorRepository;
    }

    /**
     *
     * @param {number} sensorId
     * @returns {Promise<Sensor>}
     */
    async execute(sensorId) {
        const sensor = await this._sensorRepository.getById(sensorId);
        if (!sensor) throw new NotFoundException("Sensor não encontrado!");
        return sensor;
    }
};

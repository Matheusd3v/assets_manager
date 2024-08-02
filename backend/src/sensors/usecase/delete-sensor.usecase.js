const { ISensorRepository } = require("../repository/sensor-interface.repository");

module.exports = class DeleteSensorUseCase {
    /**
     * 
     * @param {ISensorRepository} sensorRepository 
     */
    constructor(sensorRepository) {
        this._sensorRepository = sensorRepository
    }

    async execute({ assetId, id }) {
        await this._sensorRepository.delete(assetId, id)        
    }
}
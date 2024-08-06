const { Sensor } = require('../sensor.entity')

class SensorPresentation {
    id
    name
    assetId
}

class SensorBodyCreate {
    name
    assetId
}

class SensorMapper {
    /**
     * 
     * @param {SensorBodyCreate} createBody 
     * @returns {Sensor}
     */
    static toEntity(createBody) {
        const sensor = new Sensor(
            createBody.name,
            createBody.assetId
        )
        return sensor
    }

    /**
     * 
     * @param {Sensor} sensor 
     * @returns {SensorPresentation}
     */
    static toClient(sensor) {
        return {
            id: sensor._id,
            name: sensor._name,
            assetId: sensor._assetId,
            totalCollections: sensor.getTotalCollections()
        }
    }
}

module.exports = {
    SensorMapper,
    SensorPresentation
}
const { Collection } = require("../collection.entity");

class CreateCollection {
    value;
    date;
    sensorId;
}

class CollectionPresentation {
    id;
    value;
    date;
    sensorId;
}

class CollectionMapper {
    /**
     *
     * @param {CreateCollection} dto
     * @returns {Collection}
     */
    static toEntity(dto) {
        return new Collection(dto);
    }

    /**
     *
     * @param {Collection} collection
     * @returns {CollectionPresentation}
     */
    static toClient(collection) {
        return {
            id: collection._id,
            date: collection._date,
            value: collection._value,
            sensorId: collection._sensorId,
        };
    }
}

module.exports = { CollectionMapper, CollectionPresentation };

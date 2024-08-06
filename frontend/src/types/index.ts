export interface  IEntity {
    id: number;
    name: string;
    totalRelation: number;
}

export interface IAsset extends IEntity {
    totalSensors: number
}

export interface ISensor extends IEntity {
    assetId: string;
    totalCollections: number;
}

export interface ICollection {
    id: number;
    date: string;
    value: number;
    sensorId: number;
}
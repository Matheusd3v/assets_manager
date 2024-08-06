
const PATHNAMES = {
    home: "/",
    asset: "/ativo/:id",
    sensor: "/ativo/:id/sensor/:sensorId"
}

export const ROUTES = {
    home: {
        list: {
            path: PATHNAMES.home
        }
    },
    asset: {
        list: {
            path: PATHNAMES.asset
        }
    },
    sensor: {
        list: {
            path: PATHNAMES.sensor
        }
    }
}
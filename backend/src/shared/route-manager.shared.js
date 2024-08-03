const { SensorController } = require("../sensors/sensor.controller");
const { AssetController } = require("../assets/asset.controller");
const NotFoundException = require("./exceptions/not-found.exception");
const { CollectionController } = require("../collections/colletion.controller");

class RouterManager {
    constructor(routes) {
        this.routes = routes;
        this.routeMap = this.createRouteMap();
    }

    createRouteMap() {
        const map = new Map();
        this.routes.forEach((route) => {
            const key = `${route.method} ${route.route}`;
            map.set(key, route.func);
        });
        return map;
    }

    getHandler(routeKey) {
        return this.routeMap.get(routeKey);
    }

    async handleRequest(event) {
        const handler = this.getHandler(event.routeKey);
        if (!handler) {
            throw new NotFoundException(
                "No handler found for this route and method."
            );
        }
        const response = await handler({
            queryString: event.queryStringParameters,
            params: event.pathParameters,
            body: JSON.parse(event.body),
        });
        response.body = JSON.stringify(response.body);
        return response;
    }
}

const routes = [
    ...AssetController.routes,
    ...SensorController.routes,
    ...CollectionController.routes,
];

const routeManager = new RouterManager(routes);

module.exports = { routeManager };

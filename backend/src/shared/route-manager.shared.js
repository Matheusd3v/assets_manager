const { AssetController } = require("../assets/asset.controller");

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
        if (handler) {
            const response = await handler({
                queryString: event.queryStringParameters,
                params: event.pathParameters,
                body: JSON.parse(event.body),
            });
            response.body = JSON.stringify(response.body)
            return response
        }
        throw new Error("No handler found for this route and method.");
    }
}

const routes = [...AssetController.routes];

const routeManager = new RouterManager(routes);

module.exports = { routeManager };

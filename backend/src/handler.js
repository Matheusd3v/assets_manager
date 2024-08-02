const { routeManager } = require("./shared/route-manager.shared");
const ExceptionHanlder = require("./shared/exceptions/handler.exception")

module.exports.main = async (event) => {
    try {
        const response = await routeManager.handleRequest(event);
        return response
    } catch (error) {
        return ExceptionHanlder.catch(error)
    }
};

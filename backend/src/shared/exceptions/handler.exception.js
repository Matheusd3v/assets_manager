const CustomException = require("./custom.exception");
const { HttpStatus } = require("../enum.shared");

module.exports = class ExceptionHanlder {
    static catch(error) {
        if (error instanceof CustomException) {
            const { status, description } = error;

            return {
                statusCode: status,
                body: JSON.stringify({
                    message: description,
                }),
            };
        }

        console.error(error);

        return {
            statusCode: HttpStatus.INTERNAL_ERROR,
            body: JSON.stringify({
                message: "Erro inesperado!",
            }),
        };
    }
};

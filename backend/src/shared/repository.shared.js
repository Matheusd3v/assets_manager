class IRepository {
    async getAll() {
        throw new Error("Method not implemented");
    }

    async getById(id) {
        throw new Error("Method not implemented");
    }

    async create(entity) {
        throw new Error("Method not implemented");
    }

    async delete(id) {
        throw new Error("Method not implemented");
    }
}

module.exports = { IRepository };

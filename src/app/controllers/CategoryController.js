const CategoriesRepository = require("../repositories/CategoriesRepository");
const { validate: isUuid } = require("uuid");

class CategoryController {
  async index(request, response) {
    const { orderBy } = request.query;

    const categories = await CategoriesRepository.findAll(orderBy);

    response.json(categories);
  }

  async show(request, response) {}

  async store(request, response) {
    const { name } = request.body;

    if (!name) {
      return response.status(400).json({ error: "Name is required" });
    }

    const category = await CategoriesRepository.create(name);

    response.send(category);
  }

  async update(request, response) {}

  async delete(request, response) {
    const { id } = request.params;

    if (!isUuid(id)) return response.status(400).json({ error: "Invalid ID" });

    await CategoriesRepository.delete(id);

    response.send(204);
  }
}

module.exports = new CategoryController();

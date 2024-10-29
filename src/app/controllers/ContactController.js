const ContactsRepository = require("../repositories/ContactsRepository");

class ContactController {
  async index(request, response) {
    const contacts = await ContactsRepository.findAll();

    response.json(contacts);
  }

  async show(request, response) {
    const { id } = request.params;

    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      return response.status(404).json({ error: "User not found" });
    }

    return response.json(contact);
  }

  store() {}

  update() {}

  async delete(request, response) {
    const { id } = request.params;

    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      return response.status(404).json({ error: "User not found" });
    }

    await ContactsRepository.delete(id);
    response.sendStatus(204); // 204: No Content
  }
}

// Singleton (Design Pattern) -> Só podemos ter uma instância por Classe
module.exports = new ContactController();

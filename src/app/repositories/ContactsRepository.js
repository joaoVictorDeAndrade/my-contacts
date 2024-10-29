const { randomUUID } = require("crypto");

let contacts = [
  {
    id: randomUUID(),
    name: "João",
    email: "joao@email.com",
    phone: "16999323232",
    category_id: randomUUID(),
  },
  {
    id: randomUUID(),
    name: "Jose",
    email: "jose@email.com",
    phone: "169995454332",
    category_id: randomUUID(),
  },
];

// O Repository NUNCA deve lidar com regras de negócio. Ele só serve para
// conectar o app com a base de dados.
// Logo, nunca teremos um if ou reject da Promise nele, quem cuida disso é o Controller
class ContactsRepository {
  findAll() {
    return new Promise((resolve) => resolve(contacts));
  }

  findById(id) {
    return new Promise((resolve) => resolve(contacts.find((contact) => contact.id === id)));
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }
}

module.exports = new ContactsRepository();

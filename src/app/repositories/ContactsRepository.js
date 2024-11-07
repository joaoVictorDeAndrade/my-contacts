const db = require("../../database");

// O Repository NUNCA deve lidar com regras de negócio. Ele só serve para
// conectar o app com a base de dados.
// Logo, nunca teremos um if ou reject da Promise nele, quem cuida disso é o Controller
class ContactsRepository {
  async findAll(orderBy = "ASC") {
    const direction = orderBy.toUpperCase() === "DESC" ? "DESC" : "ASC";

    const rows = await db.query(`SELECT * FROM contacts ORDER BY name ${direction}`);
    return rows;
  }

  async findById(id) {
    // Problema: Se tentar buscar por um id nao no formato uuid o app quebra
    const [row] = await db.query("SELECT * FROM contacts WHERE id = $1", [id]);
    return row;
  }

  async findByEmail(email) {
    const [row] = await db.query("SELECT * FROM contacts WHERE email = $1", [email]);
    return row;
  }

  async create({ name, email, phone, category_id }) {
    // Ao passar INSERT INTO .... VALUES(${name}, ${email}, ${phone}, ${category_id})
    // estamos sujeitos a SQL Injection.
    // Passando os valores como segundo parametro a lib pg nos protege!
    const [row] = await db.query(
      `
      INSERT INTO contacts(name, email, phone, category_id)
      VALUES($1, $2, $3, $4)
      RETURNING *
      `,
      [name, email, phone, category_id]
    );

    return row;
  }

  async update(id, { name, email, phone, category_id }) {
    const [row] = await db.query(
      `
        UPDATE contacts
        SET name = $1, email = $2, phone = $3, category_id = $4
        WHERE id = $5
        RETURNING *
      `,
      [name, email, phone, category_id, id]
    );

    return row;
  }

  async delete(id) {
    const deleteOp = await db.query("DELETE FROM contacts WHERE id = $1", [id]);

    return deleteOp;
  }
}

module.exports = new ContactsRepository();

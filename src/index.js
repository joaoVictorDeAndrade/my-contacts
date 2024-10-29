const express = require("express");

const routes = require("./routes");

const app = express();

app.use(express.json()); // Faz o bodyParser
app.use(routes);

app.listen(3000, () => console.log("🔥 Server running at http://localhost:3000"));

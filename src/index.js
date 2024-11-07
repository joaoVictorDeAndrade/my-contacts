const express = require("express");
require("express-async-errors");

const routes = require("./routes");

const app = express();

app.use(express.json()); // Faz o bodyParser
app.use(routes);

// Error Handler:
// - Captura qualquer erro da aplicação
// - Precisa vir depois da definição das rotas
// - Não sabe lidar com funções async então precisa da lib express-async-errors
app.use((error, request, response, next) => {
  console.log(error);
  response.sendStatus(500);
});

app.listen(3000, () => console.log("🔥 Server running at http://localhost:3000"));

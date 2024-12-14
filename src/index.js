const express = require("express");
require("express-async-errors");

const routes = require("./routes");
const cors = require("./app/middlewares/cors");
const errorHandler = require("./app/middlewares/errorHandler");

const app = express();

app.use(express.json()); // Faz o bodyParser
app.use(cors);
app.use(routes);

// Error Handler:
// - Captura qualquer erro da aplicação
// - Precisa vir depois da definição das rotas
// - Não sabe lidar com funções async então precisa da lib express-async-errors
app.use(errorHandler);

app.listen(3001, () => console.log("🔥 Server running at http://localhost:3001"));

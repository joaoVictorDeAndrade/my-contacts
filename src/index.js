const express = require("express");
require("express-async-errors");

const routes = require("./routes");
const cors = require("./app/middlewares/cors");
const errorHandler = require("./app/middlewares/errorHandler");
const config = require("./config");

const app = express();

app.use(express.json()); // Faz o bodyParser
app.use(cors);
app.use(routes);
app.use(errorHandler);

app.listen(config.port, () =>
  console.log(`🔥 Server running at http://localhost:${config.port}`)
);

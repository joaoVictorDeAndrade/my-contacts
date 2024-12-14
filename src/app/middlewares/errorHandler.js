// Error Handler:
// - Captura qualquer erro da aplicação
// - Precisa vir depois da definição das rotas
// - Não sabe lidar com funções async então precisa da lib express-async-errors
module.exports = (error, request, response, next) => {
  console.log(error);
  response.sendStatus(500);
};

// Error Handler:
// - Captura qualquer erro da aplicação
// - Precisa vir depois da definição das rotas
// - O Express 5 encaminha erros de funções async para este middleware
module.exports = (error, request, response, next) => {
  console.log(error);
  response.sendStatus(500);
};

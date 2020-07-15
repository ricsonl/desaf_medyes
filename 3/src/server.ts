import express from 'express';
import routes from './routes'// define as rotas

const app = express();

app.use(express.json());// para poder enviar o corpo da requisicao em formato json

app.use(routes);

app.listen(3333);// sera utilizada a porta 3333 (localhost:3333)
import express from 'express';
import knex from './database/connection';

const routes = express.Router();

routes.post('/users', async (req, res) => { // CADASTRO DE USUARIO

    const _user = req.body;
    
    const inserted = await knex('user').insert({ // insere os usuario no banco e retorna uma lista com os id's cadastrados
        nome: _user.nome,
        sobrenome: _user.sobrenome,
    });

    if(inserted.length == 0){ // caso o usuario nao tenha sido inserido
        res.status(500).json({ message: 'Erro: falha no cadastro do usuario' });
    }

    res.json({ // retorna o id do usuario inserido
        id: inserted[0]
    });
});

routes.get('/users', async (req, res) => { // LISTAGEM DE USUARIOS

    const _users = await knex('user').select('*');

    res.json(_users);

});

routes.get('/users/:id', async (req, res) => { // BUSCA DE USUARIO POR ID

    const _id = Number(req.params.id); // pega o id solicitado pela rota (por exemplo, localhost:3333/users/2 para buscar id "2")

    const _user = await knex('user').where('id', _id).first(); // busca no banco de dados por um usuario com id igual ao solicitado

    if (!_user){ // caso a busca retorne nulo
        res.status(404).json({ message: 'Usuario nao encontrado'});
    }
    
    res.json({ // retorna nome e sobrenome do usuario
        nome: _user.nome,
        sobrenome: _user.sobrenome,
    });

});

export default routes;
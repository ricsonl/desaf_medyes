import express from 'express';
import knex from './database/connection';

const routes = express.Router();

routes.post('/users', async (req, res) => {
    const _user = req.body;
    
    const inserted = await knex('user').insert({
        nome: _user.nome,
        sobrenome: _user.sobrenome,
    });

    res.json({
        id: inserted[0]
    });
});

routes.get('/users', async (req, res) => {
    const _users = await knex('user').select('*');
    res.json(_users);
});

routes.get('/users/:id', async (req, res) => {
    const _id = Number(req.params.id);

    const _user = await knex('user').where('id', _id).first();

    if (!_user){
        res.status(404).json({ message: 'Usuario nao encontrado'});
    }
    
    res.json({
        nome: _user.nome,
        sobrenome: _user.sobrenome,
    });

});

export default routes;
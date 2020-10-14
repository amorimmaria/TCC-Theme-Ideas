import express from 'express';
import db from './database/connection';

const routes = express.Router();


routes.post('/themes', async (request, response) => {
  const {
    nome,
    sobrenome,
    email,
    curso,
    sugestaoDeTema,
    descricao,
    area,
    linksDeArtigos,
    tipoDeUsuario

  } = request.body;

  const insertedUsersIds = await db('users').insert({
    nome,
    sobrenome,
    email,
    
  });

  const user_id = insertedUsersIds[0];


  await db('themes').insert({
    nome,
    curso,
    sugestaoDeTema,
    descricao,
    area,
    linksDeArtigos,
    tipoDeUsuario,
    user_id,
  });


  return response.send();
  
});

export default routes;
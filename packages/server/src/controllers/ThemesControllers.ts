import { Request, Response} from 'express'
import db from '../database/connection';


export default class ThemesControllers {
  async index(request: Request, response: Response) {
    const filters = request.query;

    const curso = filters.curso as string;
    const area = filters.area as string;



    if (!filters.curso || !filters.area) {
      return response.status(400).json({
        error: 'Missing filters to search themes'
      })
    }

    const themes = await db('themes') 
      .where('themes.curso', '=', curso)
      .join('users', 'themes.user_id', '=', 'users.id')
      .select(['themes.*', 'users.*']);
     
    return response.json(themes);
  }
  async create(request: Request, response: Response) {
    const {
      name,
      avatar,
      tipoDeUsuario,
      curso,
      sugestaoDeTema,
      descricao,
      area,
      linksArtigos,  
    } = request.body;
  
    const trx = await db.transaction();
  
    try {
      const insertedUsersIds = await trx('users').insert({
        name,
      });
    
      const user_id = insertedUsersIds[0];
    
    
      await trx('themes').insert({
        name,
        avatar,
        tipoDeUsuario,
        curso,
        sugestaoDeTema,
        descricao,
        area,
        linksArtigos,
        user_id,
      });
  
      await trx.commit();
  
      return response.status(201).send();
    
    } catch(err) {
      await trx.rollback();
  
  
      return response.status(400).json({
        error: 'Unexpected error while creating new theme'
      })
    }
  }
}
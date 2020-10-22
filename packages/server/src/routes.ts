import express, { response } from 'express';
import ThemesControllers from './controllers/ThemesControllers';

const routes = express.Router();
const themesControllers = new ThemesControllers();

routes.post('/themes', themesControllers.create);
routes.get('/themes', themesControllers.index);

export default routes;
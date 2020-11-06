import express, { response } from 'express';
import ThemesControllers from './controllers/ThemesController';

const routes = express.Router();
const themesController = new ThemesControllers();

routes.post('/themes', themesController.create);
routes.get('/themes', themesController.index);

export default routes;
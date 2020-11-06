import express, { response } from 'express';
import ThemesControllers from './controllers/ThemesController';

const routes = express.Router();
const themesController = new ThemesControllers();

// Usuários
routes.post("/auth/signup", AuthenticationController.signup)
routes.post("/auth/signin", AuthenticationController.signin)
routes.post('/themes', themesController.create);
routes.get('/themes', themesController.index);

// Conexões
routes.get("/connections", AuthMiddleware, ConnectionsController.index)
routes.post("/connections", AuthMiddleware, ConnectionsController.create)
export default routes;
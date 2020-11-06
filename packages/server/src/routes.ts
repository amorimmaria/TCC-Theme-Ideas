import express from "express"
import cors from "cors"

// Controles
import ThemesController from "./controllers/ThemesController"
import ConnectionsController from "./controllers/ConnectionsController"
import AuthenticationController from "./controllers/AuthenticationController"
import ProfileController from "./controllers/ProfileController"

// Middlewares
import AuthMiddleware from "./middlewares/auth"

const routes = express.Router()

routes.use(express.json())
routes.use(cors())

// Usuários
routes.post("/auth/signup", AuthenticationController.signup)
routes.post("/auth/signin", AuthenticationController.signin)
routes.post("/auth/password/reset", AuthenticationController.resetPassword)
routes.put("/auth/password/reset/update", AuthenticationController.updatePassword)

// Perfil
routes.get("/get-profile", AuthMiddleware, ProfileController.index)
routes.put("/update-profile", AuthMiddleware, ProfileController.update)
routes.delete("/remove-theme", AuthMiddleware, ProfileController.delete)

// Temas
routes.get("/themes", AuthMiddleware, ThemesController.index)
routes.post("/themes", AuthMiddleware, ThemesController.create)
routes.get("/themes/favourites", AuthMiddleware, ThemesController.indexFavourites)
routes.post("/themes/favourites", AuthMiddleware, ThemesController.createFavourite)
routes.delete("/themes/favourites", AuthMiddleware, ThemesController.deleteFavourite)

// Conexões
routes.get("/connections", AuthMiddleware, ConnectionsController.index)
routes.post("/connections", AuthMiddleware, ConnectionsController.create)

export default routes
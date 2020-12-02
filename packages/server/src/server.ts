import path from "path"
import dotenv from "dotenv"
dotenv.config({path: path.resolve(__dirname, ".env")})
import express from "express"
import bodyParser from 'body-parser'
import routes from "./routes"
import cors from "cors"

const app = express()
app.use(cors());
const PORT = 3333

app.use(bodyParser.json({limit: '1000kb'}))
app.use(routes)

app.listen(PORT, () => console.log("Server started @PORT=" + PORT))

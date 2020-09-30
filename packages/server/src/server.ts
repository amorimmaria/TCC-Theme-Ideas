import express from 'express'
import cors from 'cors'

const app = express();

app.use(cors())

app.get("/", (request, response) => {
  return response.json({ message: "TCC Theme Ideas" });
});

app.listen(3333, () => {
  console.log("Server stated on port 3333");
});
import { Response } from 'express'

export default {
  mustBeAuthenticated: (res: Response) => res.status(401).json({ error: "Você precisa estar autenticado para fazer isso." }),
  tokenNotGiven: (res: Response) => res.status(400).json({ error: "Token de autenticação não enviado." }),
  tokenBadFormatted: (res: Response) => res.status(400).json({ error: "Token mal-formatado." }),
  internalServerError: (res: Response) => res.status(500).json({ error: "Ocorreu um erro interno do servidor. Por favor tente novamente mais tarde." })
}

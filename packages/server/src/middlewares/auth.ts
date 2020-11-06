import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"
import { secret } from "../config/auth"

export = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization

    // Verificando se o cabeçalho de autorização não existe
    if (!authHeader)
        return res.status(401).json({ error: "Nenhum token informado." })

    const splittedHeader = authHeader.split(" ")

    // Verificar se o cabeçalho não possui duas partes
    if (splittedHeader.length !== 2)
        return res.status(401).json({ error: "Token mal formatado." })

    const [scheme, token] = splittedHeader

    // Verificar se o esquema não existe ou é diferente do "Portador"
    if (!/^Bearer$/i.test(scheme))
        return res.status(401).json({ error: "Token mal formatado." })

    // Verificando se o token não foi fornecido
    if (!token)
        return res.status(401).json({ error: "Nenhum token informado." })

    // Verificar se o token fornecido é válido
    jwt.verify(token, secret, err => {
        if(err) return res.status(401).json({ error: "Token inválido: " + err })
        
        return next()
    })
}   
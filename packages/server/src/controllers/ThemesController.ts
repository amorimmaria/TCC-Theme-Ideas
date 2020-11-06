import { Request, Response } from "express"
import db from "../database/connection"

import commonErrors from "../utils/commonErrorResponses"


const MAX_RESULTS_PER_PAGE = 10

export default class ThemesController {
    static async index(req: Request, res: Response) {
        const { curso, area, tipoDeUsuario, page = "1" } = req.query
       

        try {
            const sql = `select 
            users.__id AS id,
            users.name,
            users.avatar,
            themes.curso,
            themes.tipoDeUsuario,
            themes.area,
            themes.sugestaoDeTema,
            themes.descricao,
            themes.linksArtigos
            
            from users
            join themes
            on themes.__user_id = users.__id
            group by users.name`

            const search = await db.raw(sql)

            // Analisando a atring em uma matriz de  sequência
            const parsedSearch = search.map((s: any) => ({
                ...s,
            }))

            // Analisa a string em dois objetos separados
            const secondParsedSearch = parsedSearch.map((s: any) => ({
                ...s,
               
            }))
          
            // Aplica filtros de usuário
            const finalParsedSearch = secondParsedSearch.filter((s: any) => {
                let returnSearchItem = true

                if (curso) returnSearchItem = s.curso === curso
                if (tipoDeUsuario) returnSearchItem = s.tipoDeUsuario === tipoDeUsuario
                if (area) returnSearchItem = s.area === area

                if (returnSearchItem) return s
            })

            const startIndex = (parseInt(String(page)) - 1) * MAX_RESULTS_PER_PAGE
            const endIndex = parseInt(String(page)) * MAX_RESULTS_PER_PAGE

            // Aplica fatia de paginação
            const results = finalParsedSearch.slice(startIndex, endIndex)

            const resultsInfo: { results: any[], next?: number, prev?: number, total: number } = {
                results,
                total: search.length
            }

            // Verifica se há uma página seguinte / anterior
            if (endIndex < finalParsedSearch.length)
                resultsInfo.next = parseInt(String(page)) + 1

            if (startIndex > 0)
                resultsInfo.prev = parseInt(String(page)) - 1

            return res.status(200).json({ resultsInfo })
        } catch (err) {
            return commonErrors.internalServerError(res)
        }
    }

    static async create(req: Request, res: Response) {

        const userID = req.headers.userid as string

        if (!userID) return res.status(400).json({ error: "ID do usuário não recebido." })

        const {
            whatsapp,
            tipoDeUsuario,
            curso,
            sugestaoDeTema,
            descricao,
            area,
            linksArtigos
        } = req.body

        const trx = await db.transaction()

        try {
            await trx("users")
                .where("__id", "=", userID)
                .update({ whatsapp })

            const insertedUsersIds = await trx("themes").insert({
                tipoDeUsuario,
                curso,
                sugestaoDeTema,
                descricao,
                area,
                linksArtigos,
                __user_id: userID
            })

            const __user_id = insertedUsersIds[0]

            await trx.commit()
            return res.status(201).json({ message: "Tema criado com sucesso." })

        } catch (err) {
            await trx.rollback()
            return commonErrors.internalServerError(res)
        }
    }

    static async indexFavourites(req: Request, res: Response) {
        const { page = "1", getAll = false } = req.query
        const userid = req.headers.userid

        const sql = `select 
        users.__id AS id,
        users.name,
        users.avatar,
        themes.curso,
        themes.area,
        themes.tipoDeUsuario,
        themes.sugestaoDeTema,
        themes.descricao,
        themes.linksArtigos
        
        from users
        join themes
        on themes.__user_id = users.__id
        group by users.name`

        try {
            const search = await db.raw(sql)

            // Analisando a atring em uma matriz de sequência
            const parsedSearch = search.map((s: any) => ({
                ...s,
            }))

            // Analisa a string em dois objetos separados
            const finalParsedSearch = parsedSearch.map((s: any) => ({
                ...s,
            }))

            const startIndex = !getAll 
                ? (parseInt(String(page)) - 1) * MAX_RESULTS_PER_PAGE
                : 0
            const endIndex = !getAll 
                ? parseInt(String(page)) * MAX_RESULTS_PER_PAGE
                : finalParsedSearch.length

            // Aplica fatia de paginação
            const results = finalParsedSearch.slice(startIndex, endIndex)

            const resultsInfo: { results: any[], next?: number, prev?: number, total: number } = {
                results,
                total: search.length
            }

            // Verifica se há uma página seguinte / anterior
            if (endIndex < finalParsedSearch.length)
                resultsInfo.next = parseInt(String(page)) + 1

            if (startIndex > 0)
                resultsInfo.prev = parseInt(String(page)) - 1

            return res.status(200).json({ resultsInfo })
        } catch (err) {
            return commonErrors.internalServerError(res)
        }
    }

    static async createFavourite(req: Request, res: Response) {
        const userid = req.headers.userid
        const themeid = req.headers.themeid

        try {
            await db("favourites").insert({
                user_id: userid,
                favourite_id: themeid
            })

            return res.status(201).json({ message: "Favorito adicionado com sucesso." })
        } catch (err) {
            return commonErrors.internalServerError(res)
        }
    }

    static async deleteFavourite(req: Request, res: Response) {
        const { themeid, userid } = req.headers

        try {
            await db("favourites")
                .where("favourite_id", "=", themeid as any)
                .andWhere("user_id", "=", userid as any)
                .del()

            return res.status(200).json({ message: "Favorito deletado com sucesso." })
        } catch (error) {
            return res.status(500).json({ error })
        }
    }
}


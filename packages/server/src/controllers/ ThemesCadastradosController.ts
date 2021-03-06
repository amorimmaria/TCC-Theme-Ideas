import { Request, Response } from "express"
import db from "../database/connection"

import commonErrors from "../utils/commonErrorResponses"


const MAX_RESULTS_PER_PAGE = 10

export default class ThemesCadastradosController {

  static async index(req: Request, res: Response) {
    const { page = "1", getAll = false } = req.query
    const userid = req.headers.userid as string

    try {
      const sql = `select
      users.__id AS id,
      users.name,
      users.avatar,
      themes.id AS themeId,
      themes.curso,
      themes.tipoDeUsuario,
      themes.area,
      themes.sugestaoDeTema,
      themes.descricao,
      themes.linksArtigos,
      users.emailContato

      from users
      join themes
      on themes.__user_id = "${userid}"
      where themes.__user_id = users.__id
      `
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

  static async update(req: Request, res: Response) {
    const {
      curso,
      sugestaoDeTema,
      tipoDeUsuario,
      descricao,
      area,
      linksArtigos

    } = req.body
    const idTheme = req.headers.idtheme as string
    const trx = await db.transaction()

    try {

      await trx("themes")
        .where("id", idTheme)
        .update({
          curso,
          sugestaoDeTema,
          tipoDeUsuario,
          descricao,
          area,
          linksArtigos
        })

      await trx.commit()
      return res.status(200).json({ status: "Tema atualizado com sucesso." })
    } catch (err) {
        await trx.rollback()
        return commonErrors.internalServerError(res)
    }
  }
  static async delete(req: Request, res: Response) {
    const idTheme = req.headers.themeid

    try {
      await db.table("themes")
        .where("id", idTheme)
        .del()

      return res.status(200).json({ message: "Tema deletado com sucesso." })
      } catch (error) {
        return res.status(500).json({ error })
      }
  }

  static async indexTheme (req: Request, res: Response) {
    const idTheme = req.headers.idtheme as string

    try {
      const trx = await db.transaction()

    const theme = await trx("themes")
      .select("id", "curso", "sugestaoDeTema","descricao", "area", "linksArtigos" )
      .where("id", "=", idTheme)

      await trx.commit();
      return res.status(200).json(theme)
  } catch (error) {
    return res.status(500).json({ error })
  }
}

}


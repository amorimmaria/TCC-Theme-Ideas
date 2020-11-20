import { Request, Response } from "express"
import db from "../database/connection"
import commonErrors from "../utils/commonErrorResponses"


export default class ProfileController {
  static async index(req: Request, res: Response) {
    const userID = req.headers.userid as string

    if (!userID)
      return res.status(400).json({ error: "ID do usuário não foi recebido." })

    const trx = await db.transaction()

    try {
      const userData = await trx("users")
        .select("name", "email", "avatar", "emailContato")
        .where("__id", "=", userID)
        .first()

      const classData = await trx("themes")
        .select("curso", "sugestaoDeTema", "tipoDeUsuario", "descricao", "area", "linksArtigos" )
        .where("__user_id", "=", userID)

      let themeData: any[] = []

      if (classData.length !== 0) {
        //const { id } = await trx("themes")
        await trx("themes")
          .select("id")
          .where("__user_id", "=", userID)
          .first()
      }

      const profileData = {
        ...userData,
        ...classData[0],
        themes: [...themeData] // Acho que ñ precisa
      }

      await trx.commit()
      return res.status(200).json(profileData)
  } catch (err) {
    await trx.rollback()
    return commonErrors.internalServerError(res)
  }
}

static async update(req: Request, res: Response) {
  const {
    avatar,
    emailContato,
    curso,
    sugestaoDeTema,
    descricao,
    area,
    linksArtigos

  } = req.body

  const userID = req.headers.userid as string

  if (!userID) return res.status(400).json({ error: "ID do usuário não recebido." })

  const trx = await db.transaction()

  try {
      // Atualizando dados do usuário
    await trx("users")
      .where("__id", "=", userID)
      .update({
        avatar,
        emailContato
      })

    if (curso) {
      const fetchedClassIds = await trx("themes")
        .select("id")
        .where("__user_id", "=", userID)
        .distinct()

      if (fetchedClassIds.length !== 0 && fetchedClassIds.length === 1) {
          // Atualizando dados do tema
        await trx("themes")
          .where("__user_id", "=", userID)
          .update({
            curso,
            sugestaoDeTema,
            descricao,
            area,
            linksArtigos
          })
      }
    }

    await trx.commit()
    return res.status(200).json({ status: "Perfil atualizado com sucesso." })
  } catch (err) {
      await trx.rollback()
      return commonErrors.internalServerError(res)
  }
}

static async delete(req: Request, res: Response) {
  const { userid }  = req.headers

  try {
    await db("themes")
      .where("__user_id", "=", userid as string)
      .del()

      return res.status(200).json({ message: "Tema deletado com sucesso." })
    }
    catch(error) {
      return res.status(500).json({ error })
    }
  }
}

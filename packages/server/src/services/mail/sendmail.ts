import nodemailer from "nodemailer"

declare const process: {
    env: {
        MAIL_USER: string,
        MAIL_PASS: string
    }
}

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "cf1dce7a6ea053",
      pass: "f58b32f36fb2e2"
    }
})

export default async function sendMail(receiverMail: string, token: string) {
    const message = {
        from: process.env.MAIL_USER,
        to: receiverMail,
        subject: "TCC Theme Ideas - Recuperação de senha",
        text: `Você recebeu este email para acessar o link de recuperação de sua senha no 
        TCC Theme Ideas. Para recuperar sua senha, acesse o link a seguir: 
        http://localhost:3000/auth/recuperar-senha/usuario/${token}
        Não foi você? Apenas ignore este email.
        `,
        html: `
            <h2>Recuperação de senha TCC Theme Ideas</h2>
            <p>Você recebeu este email para acessar o link de recuperação de sua senha no 
            TCC Theme Ideas.</p>

            <p>Para recuperar sua senha, acesse o link abaixo:</p>
            <a 
                target="_blank"  
                href="http://localhost:3000/auth/recuperar-senha/usuario/${token}"
            >Link para recuperação de senha</a> 
            
            <p>Não foi você? Apenas ignore este email.</p>
        `
    }

    return transport.sendMail(message)
}
function formatFetchedPhone(phone: string) {
  // Divide a string de telefone na matriz de caractere
  let formattedPhone = String(phone).split('')

  // Adiciona um colchete de abertura ao início
  formattedPhone.unshift("(")

  // Desloca valores (do índice 5 para o final) para a direita
  // E adiciona um colchete de fechamento seguido de um espaço
  formattedPhone.push('')
  formattedPhone.push('')
  for (let i = formattedPhone.length - 1; i >= 5; i--)
    formattedPhone[i] = formattedPhone[i - 2]

  formattedPhone[3] = ")"
  formattedPhone[4] = " "

  // Desloca valores (do índice 9 ou 10, dependendo do comprimento) para a direita
  // E adiciona um line-through
  formattedPhone.push('')
  if (formattedPhone.length === 14) {
    for (let i = formattedPhone.length - 1; i >= 9; i--)
      formattedPhone[i] = formattedPhone[i - 1]
    formattedPhone[9] = "-"
  } else if (formattedPhone.length === 15) {
      for (let i = formattedPhone.length - 1; i >= 10; i--)
        formattedPhone[i] = formattedPhone[i - 1]
      formattedPhone[10] = "-"
  }

  // Une a matriz char em uma única string e a retorna
  return formattedPhone.join('')
}

function formatCurrentPhone(phone: string) {
  // Divide a string do número de telefone na matriz de caracteres
  let formattedPhone = phone.split('')

  // Acrescenta um colchete de abertura se não existir no início
  if (formattedPhone.length > 0 && !formattedPhone[0].match(/^\($/))
      formattedPhone.unshift("(")

  // Verificando valores pelo menos como: (xxx ... -> x é um número
  if (formattedPhone.length >= 4) {
    // Verifica se os 2 valores iniciais são numéricos e se não, remove-os
    if (!formattedPhone[1].match(/^[0-9]$/))
      formattedPhone = formattedPhone.filter((_, i) => i !== 1)
    if (!formattedPhone[2].match(/^[0-9]$/))
      formattedPhone = formattedPhone.filter((_, i) => i !== 2)

    // Verifica se char no índice 3 é um colchete de fechamento, se não for,
    // move-o para a próxima posição e altera sua posição anterior. valor para
    // a ')'
    if (!formattedPhone[3].match(/^\)$/)) {
      formattedPhone.push(' ')
      formattedPhone.push('')
      formattedPhone[5] = formattedPhone[3]
      formattedPhone[3] = ")"
    }

    // Verificações para telefones com 8 dígitos (xxxx-xxxx)
    if (formattedPhone.length === 10) {
      // Adiciona um '-' no meio (relativo aos números de telefone)
      if (formattedPhone[9] !== "-") {
        formattedPhone.push('')
        formattedPhone[10] = formattedPhone[9]
        formattedPhone[9] = "-"
      }
    } // Verificações para telefones com 9 dígitos (9xxxx-xxxx)
    else if (formattedPhone.length === 15) {
      // Adiciona um '-' na sexta posição (em relação aos números de telefone)
      if (formattedPhone[10] !== "-") {
        formattedPhone[9] = formattedPhone[10]
        formattedPhone[10] = "-"
      }
    }
  }

    // Une valores de matriz em uma única string ((xx) xxxxx-xxxx)
  return formattedPhone.join('')
}

export {
  formatFetchedPhone,
  formatCurrentPhone,
}

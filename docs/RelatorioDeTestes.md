## Relatório de Testes de Módulo/Sistema

| Legenda           |                                                                 |
|---|---|
| **Teste** | Código ou identificação do Teste.|
| **Descrição** | Descrição dos passos e detalhes do teste a ser executado. |
| **Especificação** | Informações sobre a função testada e se ela de acordo com a especificação do caso de uso. |
| **Resultado**     | Resultado do teste, modificações sugeridas ou resultados do teste. No caso de erro ou problema na execução do teste descrever o erro em detalhes e adicionar print's das telas. |

### US00 - Home


| Teste |Descrição | Especificação | Resultado |
|---|---|---|---|
|**Teste 01: Acessar a página Buscar tema**| O usuário clica na opção 'Buscar tema' onde será redirecionado para a tela de buscar tema que mostra os temas cadastrados e tem a opção de filtrar a busca. | A implementação está de acordo com o especificado.| Ok |
|**Teste 02: Acessar a página Sugerir tema**| O usuário clica na opção 'Sugerir tema' onde será redirecionado para a tela de sugerir tema que terá um formulário para preencher. | A implementação está de acordo com o especificado.| Ok |

### US01 - Cadastrar tema
| Teste |Descrição | Especificação | Resultado |
|---|---|---|---|
| **Teste 01: Incluir tema**| O usuário informa na tela sugerir tema todos os dados para cadastrar corretamente uma sugestão de tema, ao clicar em salvar sugestão ele é notificado com uma mensagem de sucesso. Mensagem: Tema cadastrado com sucesso! Você pode editar informações sobre o tema no seu perfil. |  A implementação está de acordo com o especificado.| Ok|

### US02 - Buscar tema
| Teste |Descrição | Especificação | Resultado |
|---|---|---|---|
| **Teste 01: Buscar tema**| O usuário busca um tema na tela de buscar tema e de acordo com os filtros as sugestões vão aparecer. | A implementação está de acordo com o especificado.| Ok|

### US06 - Perfil de Usuário
| Teste |Descrição | Especificação | Resultado |
|---|---|---|---|
| **Teste 01: Remove tema**| O usuário acessa a página de perfil do usuário e clica no botão remover tema ele é notificado com uma mensagem de sucesso. Mensagem: Tema removido com sucesso! | A implementação está de acordo com o especificado.| Ok|
| **Teste 02: Alterar tema**| O usuário acessa a página de perfil do usuário onde ele poderá editar os dados que foram cadastrados ele é notificado com uma mensagem de sucesso. Mensagem: TO perfil foi atualizado com sucesso! | A implementação está de acordo com o especificado.| Ok|


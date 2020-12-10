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
| **Teste 01: Buscar tema**| O usuário busca um tema na tela de buscar tema e de acordo com os filtros as sugestões vão aparecer, podendo ter várias combinações de filtros. | A implementação está de acordo com o especificado.| Ok|

### US03 - Manter Usuário
| Teste |Descrição | Especificação | Resultado |
|---|---|---|---|
| **Teste 01: Manter Usuário**| O usuário informa na tela de cadastro  todos os dados como nome, sobrenome, e-mail e senha, para registrar-se corretamente, ao clicar em concluir ele é notificado com uma mensagem de sucesso. Mensagem: Cadastro concluído. Agora você faz parte da plataforma da TCC Theme Ideas. Tenha uma ótima experiência.| A implementação está de acordo com o especificado.| Ok|

### US04 - Recuperar Senha
| Teste |Descrição | Especificação | Resultado |
|---|---|---|---|
| **Teste 01: Recuperar Senha**| O usuário informa na tela de que esqueceu a senha, e informará o e-mail de cadastrado, ao informar exibirá na tela a mensagem: Redefinição enviada! Boa, agora é só checar o e-mail que foi enviado para você redefinir sua senha e aproveitar. o link de redefinição da senha chegará no e-mail | A implementação está de acordo com o especificado.| Ok|
| **Teste 02: Link para recuperar a senha**| O usuário ao clicar no link de redefinir senha, preenche o formulário com a nova senha e repete a nova senha e em seguida clica em redefinir senha, após clicar em redefinir senha será exibida a mensagem: Senha redefinida com sucesso! Agora você já pode logar no TCC Theme Ideas e aproveitar. Em seguida ao redefinir a senha o usuário poderá clicar em voltar para a tela de login. | A implementação está de acordo com o especificado.| Ok|

### US05 - Favoritar tema
| Teste |Descrição | Especificação | Resultado |
|---|---|---|---|
| **Teste 01: Favoritar tema**| O usuário acessa a página de buscar tema  e clica no botão do coração, que favorita o tema, ele é notificado com uma mensagem de sucesso. Mensagem: Tema favoritado com sucesso! Você pode ver seus temas favoritados no seu perfil. | A implementação está de acordo com o especificado.| Ok|
| **Teste 02: Mostrar temas favoritos**| O usuário acessa a página do perfil e clica na opção 'Meus favoritos' onde será redirecionado para a página dos temas favoritados, onde mostrará todos os temas que ele favoritou. | A implementação está de acordo com o especificado.| Ok |
| **Teste 02: Remover tema dos favoritos**| O usuário acessa a página do perfil e clica na opção 'Meus favoritos' onde será redirecionado para a página dos temas favoritados, onde ele poderá remover um tema dos favoritos, ele será notificado com uma mensagem de sucesso. Mensagem: Favorito deletado com sucesso!| A implementação está de acordo com o especificado.| Ok |




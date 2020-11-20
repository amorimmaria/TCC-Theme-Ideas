# Plano de Iteração

Este plano de iteração será usando como exemplo da disciplina Engenharia de Software II.

## Calendário da Iterações

Iteração | Data início | Data Final | Apresentação | Gerente   | Detalhes
-------- | ----------- | ---------- | ------------ | -------   | -------
It1      | 17/09/2020  | 30/09/2020 | 01/10/2020   | Maria | Criar Documento de Visão, Modelos e Plano de Iteração e Release, Detalhar US00 - Home Page
It2      | 27/09/2020  | 10/10/2020 | 09/10/2020   | Jaine | Implementar US00 - Home Page, Detalhar US01 - Cadastro de Tema, US02 - Buscar Tema
It3      | 11/10/2020  | 24/10/2020 | 23/10/2020   | Maria | Implementar US01 - Cadastro de Tema, US02 - Buscar Tema e detalhar US03 - Manter Usuário, Testar  US00 - Home Page
It4      | 25/10/2020  | 07/11/2020 | 06/11/2020   | Jaine | Implementar US03 - Manter Usuário, US04 - Recuperar Senha, US06 - Perfil do Usuário e atualizar US00 - Home page, US01 - Cadastro de Tema e US02 - Buscar Tema
It5      | 08/11/2020  | 21/11/2020 | 20/11/2020   | Maria | Adicionar funcionalidade para cadastrar mais de um tema, Adicionar quantidade de temas cadastrados, Adicionar quantidade de conexões, Adicionar funcionalidade para entrar em contato com o e-mail.
It6      | 22/11/2020  | 05/12/2020 | 04/12/2020   | Jaine |

* Observação 1: Cada Iteração de ser cadastrada como Milestones no GitHub.
* Observação 2: Use este repositório como Modelo.

## Descrição das Tarefas em cada Iteração

### T01 - Iteração 1 - Planejamento

A Iteração 1 começou dia 17/09/2020 e vai até 26/09/2020. As atividades dessa tarefa são:

* Criar repositório do projeto no GitHub com .gitignore para a linguagem do projeto;
* Definir tecnologia do projeto e colocar no README.md do repositório;
* Postar o link de tutoriais com a tecnologia do seu projeto no fórum do sigaa e colocar no README.md;
* Criação do **Documento de Visão** no formato Markdown, crie um diretório "docs no repositório;
  * Deve conter *lista de requisitos funcionais*, *requisitos não funcionais*, *perfil de usuários* e *tabela de riscos*;
* Criação do **Documento de Modelos** com o Modelo Conceitual, Modelo de Dados e o Dicionário de Dados, no formato Markdown, coloque no diretório "docs" do repositório;
* Coloque links para a documentação no README.md do repositório;
* Colocar Estrutura inicial do Projeto no repositório;

Nesta iteração temos atividades diferentes para dois perfis **Gerentes** e **Analistas**:

#### Gerentes

* Criar Milestones para a Iteração 1;
* Definir e descrever as tarefas (issues) da Iteração 1 (milestone) e alocar as issues para cada membro da equipe;
* Definir que parte do *Documento de Visão* cada membro da equipe vai preparar;
* Definir que parte do *Documento de Modelos* cada membro da equipe vai preparar;
* Definir os **User Stories** do *Documento Lista de User Stories* cada membro da equipe vai detalhar, pelo menos um detalhamento por membro (incluindo o gerente);
  * Um User Store pode ser formado de um ou mais requisitos funcionais;
  * Definir qual será o User Story (Caso de Uso) *base* para implementação, chame de US01;
  * [Modelo de Lista de User Stories!](https://docs.google.com/document/d/1Ns2J9KTpLgNOpCZjXJXw_RSCSijTJhUx4zgFhYecEJg/edit#);
* Criar o repositório de software no GitHub;
* Fechar tarefas quando elas forem concluída;

#### Analistas

* Trabalhar nas tarefas e realizar pequenos commits marcando com a hashtag da issue;
* Enviar commits da parte do Documento de Visão que preparou;
* Enviar commits da parte do Documento de Modelos que preparou;
* Enviar commits do User Story que detalhou;
  * Deve detalhar pelo menos um;
  * Detalhar ou Especificar um US é criar a descrição (estória do usuário) e os testes de aceitação);
* Avisar ao gerente quando concluir uma tarefa;

O gerente deve enviar nesta tarefa o link do repositório e o link dos dois documentos no SIGAA.

### T02 - Iteração 2 - Inicialização

A Iteração 2 começou dia 24/06/2020 e vai até 02/07/2020. As atividades dessa tarefa são:

* Atualização do **Documento de Visão**, pode adicionar requisitos funcionais, se necessário;
* Atualização do **Documento Lista de User Stories** com a lista de User Stories, pode adicionar *User Stories* se necessário. coloque no diretório "docs" do repositório;
  * Deve ser detalhado pelo menos **mais dois User Stories**;
  * Um User Store pode ser formado de um ou mais requisitos funcionais;
  * Implementar o User Story *base*;
* Criar modelo (imagem) da Arquitetura Geral do Sistema e descreva cada parte da arquitetura
 (não é o documento Arquitetural completo);
  * [Modelo aqui!](https://docs.google.com/document/d/1i80vPaInPi5lSpI7rk4QExnO86iEmrsHBfmYRy6RDSM/edit?usp=sharing);
* Criar documento com a Contagem de Ponto de Função, coloque no diretório "docs" do repositório
  * [Modelo aqui!](https://docs.google.com/document/d/1s4bMbrpQt9RF6tymXvI0HHfQO14hMyL08UxmX1eH82s/edit?usp=sharing);
  * Faça a contagem indicativa do tamanho funcional do software;
  * Faça a contagem detalhada do tamanho funcional dos User Stories (um User Story por membro da equipe);
* Criar documento com o Termo de Abertura do Projeto, no google docs
  * [Modelo Aqui!](https://docs.google.com/document/d/1xGwEppR2qmQ7H3EdevWBCWferzY3RuoZim_GEz6LZ90/edit?usp=sharing);

#### Gerentes It02

* Criar Milestones da Iteração 2;
* Definir e descrever as tarefas (issues) da Iteração 2 (milestones) e
alocar as issues para cada membro da equipe;
* Definir qual User Story cada membro da equipe vai especificar/detalhar;
  * Detalhar ou Especificar um US é criar a descrição (estória do usuário) e os testes de aceitação);
* Definir quem vai construir a Arquitetura Geral do Sistema que faz parte do **Documento Projeto Arquitetural** e o que cada membro da equipe vai preparar;
* O gerente deve fazer a contagem indicativa do tamanho funcional de Projeto;
* Definir quem vai fazer a contagem detalhada do tamanho funcional de cada User Story;
* Fechar tarefas se concluída;

#### Analistas It02

* Trabalhar nas tarefas e realizar pequenos commits marcando com a hashtag da issue;
* Enviar commits do User Story que detalhou;
* Enviar commits da contagem do User Story que detalhou;
* Enviar commits das outras tarefas;
* Avisar ao gerente quando concluir uma tarefa;

#### Desenvolvedor It02

* Trabalhar nas tarefas e realizar pequenos commits marcando com a hashtag da issue;
* Enviar commits da implementação do User Story;
* Enviar commits da implementação de **Testes de Unidade** do User Story que implementou;
* Avisar ao gerente quando concluir uma tarefa;

#### Testador It02

* Trabalhar nas tarefas e realizar pequenos commits marcando com a hashtag da issue;
* Executar cada teste de aceitação do User Story, anotando o resultado em um Markdown dos Resultados dos Testes de Aceitação;
* Cadastrar issues de bugs caso os Testes de Aceitação não passem;
* Avisar ao gerente quando concluir uma tarefa;

### T03 - Iteração 3 - Desenvolvimento

A Iteração 3 começou dia 03/07/2020 e vai até 12/07/2020. As atividades dessa tarefa são:

* Atualização do **Documento de Visão**, pode adicionar requisitos funcionais, se necessário;
* Atualização do **Documento Lista de User Stories** com a lista de User Stories, pode adicionar *User Stories* se necessário. coloque no diretório "docs" do repositório;
  * Deve ser detalhado pelo menos **mais dois User Stories**;
  * Um User Store pode ser formado de um ou mais requisitos funcionais;
  * Implementar os dois User Stories descritos/detalhados na Iteração 02;
* Completar Documento do Projeto Arquitetural do Sistema e descreva cada parte da arquitetura;
  * [Modelo aqui!](https://docs.google.com/document/d/1i80vPaInPi5lSpI7rk4QExnO86iEmrsHBfmYRy6RDSM/edit?usp=sharing);
* Atualizar o Documento com a Contagem de Ponto de Função, coloque no diretório "docs" do repositório
  * [Modelo aqui!](https://docs.google.com/document/d/1s4bMbrpQt9RF6tymXvI0HHfQO14hMyL08UxmX1eH82s/edit?usp=sharing);
  * Faça a contagem detalhada do tamanho funcional do Projeto;
* Criar documento com o Resultados dos Testes de Sistema para o caso de uso **base**.
  * O relatório de Testes deve serguir esse [Modelo aqui!](https://docs.google.com/document/d/11hLKf0FcspQrDRfo3gRMXzuY1028cUeniv_Aob8DX_0/edit?usp=sharing)
* Cadastrar issues de bugs caso os Testes de Aceitação não passem;

#### Gerentes It03

* Criar Milestones da Iteração 3;
* Definir e descrever as tarefas (issues) da Iteração 3 (milestones) e
alocar as issues para cada membro da equipe;
* Atualizar Plano de Release e Plano de Iteração;
* Definir qual User Story cada membro da equipe vai descrever/detalhar;
  * Detalhar ou Descrever um US é criar a descrição (estória do usuário) e os testes de aceitação);
* Definir quem vai detalhar a Arquitetura do Sistema que faz parte do **Documento Projeto Arquitetural** e o que cada membro da equipe vai preparar;
* O gerente deve fazer a contagem indicativa do tamanho funcional de Projeto;
* Verificar a Contagem Detalhada do tamanho funcional do Sistema;
* Executar análise do SonarCloud.io;
* Verificar os problemas detectados pelo SonarCloud e criar tarefas no github;
* Verificar Cobertura dos Testes de Unidade para pelo menos 30%;
* Cadastrar issues de bugs caso detectados pelo Testador no relatório de testes;
* Cadastrar issues de correção de implementação caso detectados pelo Testador no relatório de testes;
* Fechar tarefas se concluída;

#### Analistas It03

* Trabalhar nas tarefas e realizar pequenos commits marcando com a hashtag da issue;
* Enviar commits do User Story que detalhou;
* Enviar commits da contagem do User Story que detalhou;
  * Checar a contagem detalhada do Sistema para contemplar esse User Story;
* Enviar commits das outras tarefas;
* Avisar ao gerente quando concluir uma tarefa;

#### Desenvolvedor It03

* Trabalhar nas tarefas e realizar pequenos commits marcando com a hashtag da issue;
* Enviar commits da implementação do User Story da Iteração;
* Enviar commits da implementação de **Testes de Unidade** do User Story que implementou;
* Verificar se o SonarCloud.io detectou problemas no seu código;
* Resolver os problemas detectados pelo SonarCloud que o gerente alocou para você;
* Deixar a Cobertura dos Testes de Unidade para pelo menos 30%;
* Avisar ao gerente quando concluir uma tarefa;

#### Testador It03

* Trabalhar nas tarefas e realizar pequenos commits marcando com a hashtag da issue;
* Executar cada teste de aceitação do User Story, anotando o resultado em um Markdown dos Resultados dos Testes de Aceitação;
  * O relatório de Testes deve serguir esse [Modelo](https://docs.google.com/document/d/11hLKf0FcspQrDRfo3gRMXzuY1028cUeniv_Aob8DX_0/edit?usp=sharing)
* Cadastrar issues de bugs caso os Testes de Aceitação não passem;
* Avisar ao getente os bugs e correções necessárias descritas relatório de testes;
* Avisar ao gerente quando concluir uma tarefa;
© 2020 GitHub, Inc.
Terms
Privacy
Security

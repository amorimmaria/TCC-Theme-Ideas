### **UNIVERSIDADE FEDERAL DO RIO GRANDE DO NORTE**

### **CENTRO DE ENSINO SUPERIOR DO SERIDÓ**

### **DEPARTAMENTO DE COMPUTAÇÃO E TECNOLOGIA**

### **CURSO DE BACHARELADO EM SISTEMAS DE INFORMAÇÃO**

**Jaine de Senna Santos**  
**Maria das Graças Dias Amorim** 


## **TCC Theme Ideas**


**Caicó – RN**  
**2020**


# Documento de Visão
Documento construído a partido do Modelo BSI - Doc 001 - Documento de Visão que pode ser encontrado no link: https://docs.google.com/document/d/1DPBcyGHgflmz5RDsZQ2X8KVBPoEF5PdAz9BBNFyLa6A/edit?usp=sharing

## Introducão

Este documento possui como objetivo definir e elencar as necessidades e características (requisitos) do sistema TCC Theme Ideas, assim como todos os elementos envolvidos em seu desenvolvimento e utilização, como perfis de usuários, riscos.

O TCC Theme Ideas é uma plataforma web que tem como objetivo ajudar alunos de graduação ou de cursos em que precise desenvolver Trabalho de Conclusão de Curso(TCC) e que tenham dificuldades em encontrar um tema.

## Histório de Revisões
Data     |     Versão  |   Descrição  | Autor |
---------| ----------- | ---------- | ------|
28/09/2020 | 1.0 | Documento Inicial | Jaine e Maria |

## Equipe e Definição de Papéis

Membro     |     Papel   |   E-mail   |
---------  | ----------- | ---------- |
Jaine Senna         | Analista, Gerente, Desenvolvedora, Testadora | jainesantossenna191@gmail.com
Maria das Graças    | Gerente, Analista, Desenvolvedora, Testadora  | mariadasgracasdiasamorim@gmail.com
Taciano             | Cliente                  | tacianosilva@gmail.com

## Matriz de Competências

Membro     |     Competências   |
---------  | ----------- |
Jaine Senna | Desenvolvedora JavaScript, React, Typescript |
Maria       | Desenvolvedora JavaScript, React, Typescript.|

## Perfis dos Usuários

O sistema poderá ser utilizado por diversos usuários. Temos os seguintes perfis/atores:

Perfil     | Descrição   |
---------  | ----------- |
Administrador | Este usuário realiza os cadastros base e pode realizar qualquer função.
Docentes | Este usuário pode sugerir um tema para TCC, como também disponibilizar links de artigos.
Discente | Este usuário pode realizar seu cadastro na plataforma, assim como buscar por temas, pesquisando pelo curso e a área ou pode sugerir um tema também para outros alunos.

## Lista de Requisitos Funcionais

Requisito  | Descrição   | Ator |
---------  | ----------- | ---------- |
RF01 - Cadastro de Usuário   | O usuário poderá fazer seu cadastro com seus dados | Usuário |
RF02 - Alterar Cadastro de usuário  | O usuário poderá fazer seu cadastro com seus dados | Docente e Discente |
RF03 - Excluir Cadastro de usuário   | O usuário poderá fazer seu cadastro com seus dados | Docente e Discente |
RF04 - Login de Usuário| O  usuário após o seu cadastro, poderá acessar a plataforma com seu login | Docente e Discente |
RF05 - Usuário pode redefinir senha| O  usuário após o seu cadastro, poderá acessar a plataforma com seu login | Docente e Discente |
RF06 - Cadastrar tema de TCC | O usuário poderá cadastrar um tema  | Discente e Docente |
RF07 - Alterar tema de TCC |O usuário poderá alterar um tema ao qual ele cadastrou  | Docente e Discente |
RF08 - Excluir tema de TCC | O usuário poderá excluir um tema da qual cadastrou | Discente e Docente |
RF09 - Buscar tema de TCC |O usuário poderá buscar por um tema de acordo com área  | Docente e Discente |
RF010 - Listar tema de TCC | O usuário poderá listar um tema |Discente e Docente |
RF011 - Listar todos os temas de TCC | O usuário poderá listar todos os temas cadastrados | Discente e Docente  |
RF012 - Sugerir tema de TCC |O usuário poderá sugerir temas de TCC  | Docente e Discente |
RF013 Detalhar informações cadastradas do tema de TCC -| O usuário poderá visualizar informações mais detalhadas sobre o tema | Discente | 
RF014 - Favoritar tema de TCC | O usuário pode favoritar um tema da qual ele tenha gostado | Discente|



## Lista de Requisitos Não-Funcionais

Requisito                                 | Descrição   |
---------                                 | ----------- |
RNF001 - Deve ser acessível via navegador | Deve abrir perfeitamente no Firefox e no Chrome. |
RNF002 - Consultas deve ser eficiente | O sistema deve executar as consultas em milissegundos |
RNF003 - Log e histórico de acesso e funções | Deve manter um log de todos os acessos e das funções executadas pelo usuário |
RNF004 - Interface de fácil navegação | O software terá uma interface de fácil navegação, onde os usuários poderão utilizá-lo sem muitas dificuldades;

## Riscos

Tabela com o mapeamento dos riscos do projeto, as possíveis soluções e os responsáveis.

Data | Risco | Prioridade | Responsável | Status | Providência/Solução |
------ | ------ | ------ | ------ | ------ | ------ |
19/09/2020 | Não entregar o sistema completo | Alta | Todos | Vigente | Fazer esforço pra tentar entregar as funcionalidades no prazo definido. |
19/09/2020 | Ausência por qualquer motivo do cliente | Média | Gerente | Vigente | Planejar o cronograma tendo em base a agenda do cliente |
28/09/2020 | Divisão de tarefas mal sucedida | Baixa | Gerente | Vigente | Acompanhar de perto o desenvolvimento de cada membro da equipe |
28/09/2020 | Implementação de protótipo com as tecnologias | Alto | Todos | Resolvido | Encontrar tutorial com a maioria da tecnologia e implementar um caso base do sistema |



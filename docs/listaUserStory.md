
### **UNIVERSIDADE FEDERAL DO RIO GRANDE DO NORTE**

### **CENTRO DE ENSINO SUPERIOR DO SERIDÓ**

### **DEPARTAMENTO DE COMPUTAÇÃO E TECNOLOGIA**

### **CURSO DE BACHARELADO EM SISTEMAS DE INFORMAÇÃO**

**Jaine de Senna Santos** 
**Maria das Graças Dias Amorim**  

## **TCC Theme Ideas: Lista de User Stories**

**Caicó – RN**  
**2020**

<div id='sumario'/>
## Sumário

1. [Descrição](#descricao)
2. [Lista de User Stories](#us)
   1. [User Story US00](#us00)
   2. [User Story US01](#us01)
   3. [User Story US02](#us02)
   4. [User Story US03](#us03)
   5. [User Story US04](#us04)
   6. [User Story US05](#us05)
   7. [User Story US06](#us06)

3. [Referências](#referencias)


<div id='descricao'/>

## Descrição

O presente documento mostra uma breve descrição dos passos seguidos por um usuário do sistema ***TCC Theme Ideas*** ao acessar alguma das funcionalidades que estarão disponíveis.


### Histórico de revisões

| Data | Versão | Descrição | Autor |
| :--- | :----: | :---------| :---- |
| 30/09/2020 | 1.0 | Descrição do documento; detalhamento do User Story US01 | Jaine e Maria |
| 06/11/2020 | 1.1 | Corrigindo alguns erros ortográficos e detalhando melhor os testes de aceitação | Jaine e Maria |


<div id='us'/>

### Lista de User Stories


<div id='us00'/>

### **User Story US00 - Home Page**

|                    |      |
| ------------------ | ---- |
|**Descrição**| O sistema deve mostrar duas opções para o usuário, buscar tema ou sugerir tema e dependendo da escolha do usuário ambas as opções levará para opções para preenchimento de outras informações relacionadas a opção escolhida.|
|**Requisitos envolvidos**| RF010, RF013 |
|**Prioridade**| Essencial |
|**Estimativa**| 14h |
|**Tamanho Funcional**|7 PF|

### **Testes de Aceitação (TA)**

| Código | Descrição |
| ------ | --------- |
|**TA01.01**| O usuário ao clicar na opção buscar tema, ele deve ser redirecionado para a tela de busca, e poderá informar o curso tipo de usuário e a área e assim encontrar um tema de acordo com as informações que ele digitou. |
|**TA02.02**| O usuário ao clicar na opção sugerir tema, ele deve ser redirecionado para a tela de sugerir tema, onde o usuário informará o tema do TCC, sugerir links de artigos com relação aquele tema, além de outras informações. |


<div id='us01'/>

### **User Story US01 - Cadastro de Tema**

|                    |      |
| ------------------ | ---- |
|**Descrição**| O sistema deve manter um cadastro de temas que cada usuário sugeriu, podendo ser criado pelo discente ou docente, onde outros discentes poderão ter acesso. |
|**Requisitos envolvidos**|RF07 |
|**Prioridade**| Essencial |
|**Estimativa**| 8 h  |
|**Tamanho Funcional**|7 PF|

### **Testes de Aceitação (TA)**

| Código | Descrição |
| ------ | --------- |
|**TA01.01**| O usuário preenche as informações para sugestão de tema e clica em concluir sugestão e em seguida aparecerá uma mensagem de sugestão de tema cadastrado com sucesso |
|**TA01.02**| O usuário informa, na tela de alterar sugestão de tema, os dados validos que deseja alterar. Em seguida, receberá uma notificação de: Alterado com sucesso|
|**TA01.03**| O usuário informa, na tela excluir sugestão de tema, ao clicar em deletar ele será notificado com uma mensagem de: Tema excluído com sucesso|



<div id='us02'/>

### **User Story US02 - Buscar Tema**

|                    |      |
| ------------------ | ---- |
|**Descrição**| O sistema deve mostrar os temas cadastrados quando o usuário buscar informando o curso, tipo de usuário ou por área|
|**Requisitos envolvidos**| RF010 |
|**Prioridade**| Essencial |
|**Estimativa**| 14h |
|**Tamanho Funcional**|7 PF|


### **Testes de Aceitação (TA)**

| Código | Descrição |
| ------ | --------- |
|**TA01.01**| O usuário ao informar o curso no filtro de busca,mostra os temas cadastrados de acordo com a opção que o usuário informou|
|**TA01.02**| O usuário ao informar o tipo de usuário, se é discente ou docente no filtro de busca, mostra os temas cadastrados de acordo com a opção que o usuário informou|
|**TA01.03**| O usuário ao informar a área no filtro de busca, mostra os temas cadastrados de acordo com a opção que o usuário informou|
|**TA01.04**| O usuário não colocando nenhuma opção de filtro como, curso, tipo de usuário e área, o sistema deverá mostrar todos os temas cadastrados||


<div id='us03'/>

### **User Story US03 - Manter Usuário**

|                    |      |
| ------------------ | ---- |
|**Descrição**| O sistema deve manter um cadastro de usuário que tem acesso ao sistema via login e senha. Um usuário tem os atributos: nome, sobrenome, avatar, e-mail e senha. O e-mail será o login e ele pode registrar-se diretamente no sistema, o avatar é onde o usuário poderá adicionar uma foto em seu perfil.|
|**Requisitos envolvidos**| RF01, RF02, RF03 |
|**Prioridade**| Essencial |
|**Estimativa**| 14h |
|**Tamanho Funcional**|8 PF|



### **Testes de Aceitação (TA)**

| Código | Descrição |
| ------ | --------- |
|**TA01.01**|O usuário informa, na tela de cadastro, todos os dados como nome, sobrenome, avatar, e-mail e senha, para registrar-se corretamente, ao clicar em concluir ele é notificado com uma mensagem de sucesso. Mensagem: Cadastro realizado com sucesso! |


<div id='us04'/>

### **User Story US04 - Recuperar Senha**

|                    |      |
| ------------------ | ---- |
|**Descrição**| O sistema deve conter a funcionalidade de recuperação de senha do usuário, onde na tela de login inicial, o sistema deve ter uma opção de recuperação de senha, na qual o usuário vai informar o e-mail de cadastro, e a partir disso vai receber um e-mail com um link para redefinir a senha, depois de redefinir o usuário pode voltar a tela de login e logar novamente ao sistema com sua senha já redefinida|
|**Requisitos envolvidos**|RF06|
|**Prioridade**| Essencial |
|**Estimativa**| 8 h  |
|**Tamanho Funcional**|7 PF|

### **Testes de Aceitação (TA)**

| Código | Descrição |
| ------ | --------- |
|**TA01.01**| O usuário ao informar o e-mail para recuperação da senha, deve receber  um link de recuperação no e-mail |
|**TA01.02**| Ao clicar no link de recuperação o usuário deve ser redirecionado para uma tela de redefinir a senha e ao informar o e-mail de cadastro, deverá informar a nova senha e repetir a nova senha e a partir disso, poder fazer login no sistema com a senha ja redefinida.


<div id='us05'/>

### **User Story US05 - Favoritar Tema**

|                    |      |
| ------------------ | ---- |
|**Descrição**| O sistema deve manter a favoritação de um tema, quando o usuário clicar em favoritar |
|**Requisitos envolvidos**|RF14 |
|**Prioridade**| Desejável |
|**Estimativa**| 6 h  |
|**Tamanho Funcional**|6 PF|

### Testes de Aceitação (TA)

| Código | Descrição |
| ------ | --------- |
|**TA01.01**| O usuário clica em favoritar um tema e permanece favoritado |

<div id='us06' />

### **User Story US06 - Perfil de Usuário**
|                    |      |
| ------------------ | ---- |
|**Descrição**| O sistema deve conter a funcionalidade de exibir as informações do perfil do usuário com as informações que ele cadastrou como: nome, e-mail, curso, área, sugestão de tema, descrição do tema e links de artigos relacionado ao tema que o usuário cadastrou. Além disso, é possível o usuário atualizar informações no seu perfil, como a foto do perfil e as informações relacionadas ao tema que ele sugeriu como: sugestão do tema, curso, área, descrição do tema e os links de artigos. Além do mais o usuário poderá remover a sugestão de tema que ele cadastrou. |
|**Requisitos envolvidos**|RF02, RF03, RF08 e RF09 |
|**Prioridade**| Essencial |
|**Estimativa**| 8 h  |
|**Tamanho Funcional**|7 PF|

### Testes de Aceitação (TA)

| Código | Descrição |
| ------ | --------- |
|**TA01.01**| O usuário clica em seu avatar, ou seja, na foto do seu perfil e suas informações como nome, tipo de usuário, e-mail, curso, sugestão de tema, área do tema, descrição do tema são exibidas na tela|
|**TA01.02**| O usuário poderá alterar os dados como: sugestão do tema, curso, área, descrição do tema e os links de artigos|
|**TA01.03**| O usuário poderá remover um tema da qual ele cadastrou, ao remover o tema aparece uma mensagem: Tema removido com sucesso!|


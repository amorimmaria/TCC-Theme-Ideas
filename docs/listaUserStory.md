
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
3. [Referências](#referencias)


<div id='descricao'/>

## Descrição

O presente documento mostra uma breve descrição dos passos seguidos por um usuário do sistema ***TCC Theme Ideas*** ao acessar alguma das funcionalidades que estarão disponíveis.


### Histórico de revisões

| Data | Versão | Descrição | Autor |
| :--- | :----: | :---------| :---- |
| 30/09/2020 | 1.0 | Descrição do documento; detalhamento do User Story US01 | Jaine e Maria |

<div id='us'/>

### Lista de User Stories


<div id='us00'/>

### **User Story US00 - Home Page**

|                    |      |
| ------------------ | ---- |
|**Descrição**| O sistema deve mostrar duas opções para o usuário, buscar tema ou sugerir tema e dependendo da escolha do usuário ambas as opções levará para opções para preenchimento de outras informações relacionadas a opção escolhida.|
|**Requisitos envolvidos**| RF009, RF012 |
|**Prioridade**| Essencial |
|**Estimativa**| 14h |
|**Tamanho Funcional**|7 PF|

### **Testes de Aceitação (TA)**

| Código | Descrição |
| ------ | --------- |
|**TA01.01**| O usuário ao clicar na opção buscar tema, ele deve ser redirecionado para a tela de busca, e poderá informar o curso e a área e assim encontrar um tema de acordo com as informações que ele digitou. |
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
|**TA01.01**| O usuário preenche as informações para sugestão de tema e clica em cconcluir sugestão e em seguida aparecerá uma mensagem de sugestão de tema cadastrado com sucesso |
|**TA01.02**| O usuário informa, na tela de alterar sugestão de tema, os dados validos que deseja alterar. Em seguida, receberá uma notificação de: Alterado com sucesso|
|**TA01.03**| O usuário informa, na tela excluir sugestão de tema, ao clicar em deletar ele será notificado com uma mensagemde: Excluído com sucesso|



<div id='us02'/>

### **User Story US02 - Buscar Tema**

|                    |      |
| ------------------ | ---- |
|**Descrição**| O sistema deve mostrar os temas cadastrados quando o usuário buscar informando o curso |
|**Requisitos envolvidos**| RF010 |
|**Prioridade**| Essencial |
|**Estimativa**| 14h |
|**Tamanho Funcional**|7 PF|


### **Testes de Aceitação (TA)**

| Código | Descrição |
| ------ | --------- |
|**TA01.01**| O usuário ao informar o curso para mostrar os temas cadastrados de acordo com a opção que o usuário informou|

<div id='us03'/>

### **User Story US03 - Manter Usuário**

|                    |      |
| ------------------ | ---- |
|**Descrição**| O sistema deve manter um cadastro de usuário que tem acesso ao sistema via login e senha. Um usuário tem os atributos nome, sobrenome, avatar, email e senha. O email será o login e ele pode registrar-se diretamente no sistema, o avatar é um link para uma foto de seu perfil.|
|**Requisitos envolvidos**| RF01, RF02, RF03 |
|**Prioridade**| Essencial |
|**Estimativa**| 14h |
|**Tamanho Funcional**|8 PF|



### **Testes de Aceitação (TA)**

| Código | Descrição |
| ------ | --------- |
|**TA01.01**|O usuário informa, na tela de cadastro, todos os dados para registrar-se corretamente, ao clicar em concluir ele é notificado com uma mensagem de sucesso. Mensagem: Cadastro salvo! |


<div id='us04'/>

### **User Story US04 - Recuperar Senha**

|                    |      |
| ------------------ | ---- |
|**Descrição**| O sistema deve conter a funcionalidade de recuperação de senha do usuário, onde na tela de login inicial, o sistema deve ter uma opção de recuperação de senha, na qual o usuário vai informar o email de cadastro, e a partir disso vai receber um e-mail com um link para redefinir a senha, depois de redefinir o usuário pode voltar a tela de login;|
|**Requisitos envolvidos**|RF05 |
|**Prioridade**| Essencial |
|**Estimativa**| 8 h  |
|**Tamanho Funcional**|7 PF|

### **Testes de Aceitação (TA)**

| Código | Descrição |
| ------ | --------- |
|**TA01.01**| O usuário ao informar o e-mail para recuperação da senha e deve receber  um link de recuperação no e-mail |


<div id='us05'/>

### **User Story US05 - Favoritar Tema**

|                    |      |
| ------------------ | ---- |
|**Descrição**| O sistema deve manter a favoritação de um tema, quando o usuário clicar em favoritar |
|**Requisitos envolvidos**|RF14 |
|**Prioridade**| Desejável |
|**Estimativa**| 6 h  |
|**Tamanho Funcional**|6 PF|

### *Testes de Aceitação (TA)*

| Código | Descrição |
| ------ | --------- |
|**TA01.01**| O usuário clica em favoritar um tema e permanece favoritado |



### **UNIVERSIDADE FEDERAL DO RIO GRANDE DO NORTE**

### **CENTRO DE ENSINO SUPERIOR DO SERIDÓ**

### **DEPARTAMENTO DE COMPUTAÇÃO E TECNOLOGIA**

### **CURSO DE BACHARELADO EM SISTEMAS DE INFORMAÇÃO**

**Jaine de Senna Santos**
**Maria das Graças Dias Amorim**

## **TCC Theme Ideas: Modelo Conceitual e Modelo de Dados**

**Caicó – RN**
**2020**

---
<div id='sumario'/>
## Sumário

- [**TCC Theme Ideas: Modelo Conceitual e Modelo de Dados**](#tcc-theme-ideas-modelo-conceitual-e-modelo-de-dados)
- [Sumário](#sumário)
- [Descrição](#descrição)
  - [**Histórico de Revisões**](#histórico-de-revisões)
- [Modelo Conceitual](#modelo-conceitual)
- [Modelo de Dados](#modelo-de-dados)

<div id='descricao'/>

## Descrição

Este documento descreve o modelo conceitual do software que é composto por um conjunto de Entidades e seus relacionamentos. No decorrer do desenvolvimento da aplicação web TCC Theme Ideas este documento servirá de referência para a codificação do banco de dados, bem como para a compreensão pelo cliente de como funcionará as relações de dados dentro do sistema em uma linguagem de fácil compreensão a todos os envolvidos.

<div id='revisoes'/>

### **Histórico de Revisões**

| Data       | Versão | Descrição                                                              | Autor                           |
| :--------- | :----: | :--------------------------------------------------------------------- | :------------------------------ |
| 29/09/2020 |  1.0   | Cabeçalho, descrição do documento e sumário;  | Jaine e Maria |
|14/10/2020| 1.1 | Correção do modelo de dados | Jaine e Maria |
|14/10/2020 | 1.2 | Correção do modelo conceitual | Jaine e Maria |
|07/11/2020 | 1.3 | Correção do modelo conceitual, relacional e o dicionário de dados | Jaine e Maria |
|13/11/2020 | 1.4 | Correção do dicionário de dados| Jaine e Maria |
|08/12/2020 | 1.5 | Correção do dicionário de dados| Jaine e Maria |

<div id ='conceitual' />

## Modelo Conceitual

![Modelo Conceitual](/img/modeloConceitual.png)

## Modelo de Dados

![Modelo de dados](/img/modeloRelacional.png)

## Dicionário de dados
### Usuário

| Nome | Descrição | Tipo de dado | Tamanho | Restrições |
|------|-----------|--------------|---------|------------|
|**nome**|Nome do usuário|Varchar|256|Not Null|
|**avatar**|Foto de perfil do usuário|Varchar|256|-|
|**email**|E-mail do usuário|Varchar|256|Not Null|
|**senha**|Senha do usuário|Varchar|256|Not Null|

### Tema

| Nome | Descrição | Tipo de dado | Tamanho | Restrições |
|------|-----------|--------------|---------|------------|
|**tipoDeUsuario**| O usuário define se é do tipo discente ou docente| Varchar | 256 | Not Null|
|**curso**|Curso que o usuário está cursando/dar aula|Varchar|256|Not Null|
|**susgestaoDeTema**|Sugestão de tema para o TCC|Varchar|256|Unique e Not Null|
|**descrição**|Uma breve descrição do tema do TCC sugerido|Varchar|256|Not Null|
|**area**|Área que está relacionada ao tema do TCC sugerido|Varchar|256|Not Null|
|**linksArtigos**|Links de artigos sugerido para ajudar com o tema|Varchar|256|-|


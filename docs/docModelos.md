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

<div id ='conceitual' />

## Modelo Conceitual

![Modelo Conceitual](/img/modeloConceitual.png)

## Modelo de Dados

![Modelo de dados](/img/modeloDados.png)
                            
## Dicionário de dados
### Usuário

| Nome | Descrição | Tipo de dado | Tamanho | Restrições |
|------|-----------|--------------|---------|------------|
|**Nome**|nome|Varchar|256|Not Null|
|**Sobrenome**|sobrenome|Varchar|256|Not Null|
|**E-mail**|email|Varchar|256|Not Null|
|**Senha**|Senha|Varchar|256|Not Null|

### Sugerir 

| Nome | Descrição | Tipo de dado | Tamanho | Restrições |
|------|-----------|--------------|---------|------------|
|**Nome**|nome|Varchar|256|Not Null|
|**Avatar**|avatar|Varchar|256|-|
|**Curso**|curso|Varchar|256|Not Null|
|**Susgestão de tema**|susgestaoDeTema|Varchar|256|Not Null|
|**Descrição**|descricao|Varchar|256|Not Null|
|**Área**|area|Varchar|256|Not Null|
|**Links de Artigos**|linksDeArtigos|Varchar|256|-|

### Buscar

| Nome | Descrição | Tipo de dado | Tamanho | Restrições |
|------|-----------|--------------|---------|------------|
|**Curso**|curso|Varchar|256|Not Null|
|**Área**|area|Varchar|256|Not Null|
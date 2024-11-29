# Projeto Angular - Frontend para Extração de Dados

Este projeto é uma aplicação **Angular** que serve como frontend para interagir com a API de extração de dados, disponível em [extractly-api-chalice](https://github.com/jvrodrigs/extractly-api-chalice).

---

## Requisitos

Certifique-se de que os seguintes requisitos estão instalados no seu ambiente:

- **Node.js**: Versão 18.19.0
- **Caso necessário use nvm, para versionar suas versões do node.js da sua máquina.**
- **Angular CLI**: Versão 15.2.11
- **API Backend**: [extractly-api-chalice](https://github.com/jvrodrigs/extractly-api-chalice) em execução

---

## Instalação

1. **Clone o Repositório**
   
   Clone este projeto para sua máquina local:
   ```bash
   git clone https://github.com/jvrodrigs/extractly-web.git
   cd extractly-web
   ```

2. **Instale as Dependências**

   Use o npm para instalar as dependências:
   ```bash
   npm install
   ```

3. **Configure a API Backend**

   Certifique-se de que a API backend está configurada e em execução. Siga as instruções no repositório [extractly-api-chalice](https://github.com/jvrodrigs/extractly-api-chalice) para configurá-la.

4. **Configure as Variáveis de Ambiente**

   Acesse a pasta `src/environments` e adicione a URL da API backend. Exemplo:
   ```typescript
   export const environment = {
     production: false,
     apiUrl: 'http://localhost:8000', // Altere conforme necessário
   };
   ```

---

## Executando o Projeto

1. **Inicie o Servidor Angular**
   
   Para rodar o projeto em desenvolvimento:
   ```bash
   ng serve
   ```

2. **Acesse no Navegador**
   
   Abra o navegador e acesse:
   ```
   http://localhost:4200
   ```

3. **Verifique a Conexão com a API**

   Certifique-se de que a API backend está rodando e acessível na URL configurada no `environment.ts`.

---

# Prints da Aplicação
- Upload de um PNG do meu extrato!

  ![Exemplo PNG extrato](https://github.com/user-attachments/assets/e94ef427-7ce4-4bdb-b194-94fa026d3ef6)

- Resposta da API

  ![Despesas observadas](https://github.com/user-attachments/assets/04d386f9-958c-4010-8b61-86d8f82c80dd)
  
  ![Analise da OpenAI](https://github.com/user-attachments/assets/367d63a4-c4cc-43b4-b12d-7a032da9e5d4)

  
  
  
  

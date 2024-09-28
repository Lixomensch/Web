# Mural

Um mural simples para posts, construído com Node.js e Express. Este projeto permite que os usuários criem, visualizem e deletam posts.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript no lado do servidor.
- **Express**: Framework para construir APIs e aplicações web.
- **CORS**: Middleware para permitir requisições de diferentes origens.
- **Body-parser**: Middleware para analisar os corpos das requisições.

### Instalação e Execução do Mural

1. **Navegue até a pasta do Mural**:
   Abra o terminal e mude para o diretório onde o projeto Mural está localizado. Por exemplo, execute:

   ```bash
   cd ~/Web/Mural
   ```

2. **Instale as dependências do projeto**:
   Para garantir que todas as bibliotecas necessárias sejam instaladas, execute o seguinte comando:

   ```bash
   npm install
   ```

3. **Inicie o servidor**:
   Você pode iniciar o servidor de duas maneiras:

   - **Modo de Desenvolvimento** (com reinicialização automática ao fazer alterações):

     ```bash
     npm run dev
     ```

   - **Modo de Produção** (iniciando normalmente):

     ```bash
     npm start
     ```

4. **Acesse o aplicativo**:
   Após iniciar o servidor, abra seu navegador e acesse o aplicativo através do seguinte endereço:

   ```
   http://localhost:5000
   ```

## Endpoints da API

- `GET /api/all`: Retorna todos os posts.
- `POST /api/new`: Adiciona um novo post. Envie um JSON no corpo da requisição com os campos `title` e `description`.
- `DELETE /api/delete/:id`: Deleta um post pelo seu ID.

# Chat

Um chat simples em tempo real, construído com Node.js, Express e Socket.IO. Este projeto permite que os usuários se conectem, enviem mensagens e visualizem as mensagens em tempo real.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript no lado do servidor.
- **Express**: Framework para construir APIs e aplicações web.
- **Socket.IO**: Biblioteca para comunicação em tempo real entre clientes e servidores.
- **Bootstrap**: Framework CSS para estilização responsiva e moderna.

### Instalação e Execução do Chat

1. **Navegue até a pasta do Chat**:
   Abra o terminal e mude para o diretório onde o projeto Chat está localizado. Por exemplo, execute:

   ```bash
   cd ~/Web/Chat
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
   http://localhost:3000
   ```

## Funcionalidades

- **Registro de Usuário**: Os usuários podem definir seu nome antes de participar do chat.
- **Envio de Mensagens**: Os usuários podem enviar mensagens que serão exibidas em tempo real para todos os participantes.
- **Exibição de Mensagens**: Todas as mensagens enviadas aparecem na tela em um formato estilizado.

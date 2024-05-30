# PicPay Clone

Este é um projeto de clone da plataforma de pagamentos PicPay, desenvolvido utilizando uma stack moderna incluindo TypeScript, Node.js, JWT, bcrypt, Express, React, Next.js, Tailwind CSS e Prisma.io.

## Índice

- [Sobre](#sobre)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Funcionalidades](#funcionalidades)
- [Instalação](#instalação)
- [Uso](#uso)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Sobre

Este projeto é um clone do PicPay, uma popular plataforma de pagamentos no Brasil. O objetivo é aprender e demonstrar habilidades de desenvolvimento full-stack utilizando algumas das tecnologias mais modernas e populares.

## Tecnologias Utilizadas

- **Backend:**
  - [Node.js](https://nodejs.org/)
  - [Express](https://expressjs.com/)
  - [TypeScript](https://www.typescriptlang.org/)
  - [JWT](https://jwt.io/)
  - [bcrypt](https://www.npmjs.com/package/bcrypt)
  - [Prisma.io](https://www.prisma.io/)

- **Frontend:**
  - [React](https://reactjs.org/)
  - [Next.js](https://nextjs.org/)
  - [Tailwind CSS](https://tailwindcss.com/)

## Funcionalidades

- Autenticação de usuário (registro e login) com JWT e bcrypt
- Visualização de saldo e histórico de transações
- Transferência de dinheiro entre usuários
- Interface de usuário moderna e responsiva

## Instalação

### Pré-requisitos

- Node.js (v14 ou superior)
- npm ou yarn

### Passos

1. Clone o repositório:

   ```sh
   git clone https://github.com/seu-usuario/picpay-clone.git
   cd picpay-clone
   ```

2. Instale as dependências do backend e do frontend:

   ```sh
   cd backend
   npm install
   # ou
   yarn install

   cd ../frontend
   npm install
   # ou
   yarn install
   ```

3. Configure as variáveis de ambiente:

   Crie um arquivo `.env` na raiz do diretório `backend` e adicione suas configurações. Veja o exemplo abaixo:

   ```env
   DATABASE_URL="sua-url-do-banco-de-dados"
   JWT_SECRET="sua-chave-secreta-jwt"
   ```

4. Execute as migrações do Prisma para configurar o banco de dados:

   ```sh
   cd backend
   npx prisma migrate dev
   ```

## Uso

### Backend

1. Inicie o servidor do backend:

   ```sh
   cd backend
   npm run dev
   # ou
   yarn dev
   ```

   O servidor estará rodando em `http://localhost:4000`.

### Frontend

1. Inicie o servidor do frontend:

   ```sh
   cd frontend
   npm run dev
   # ou
   yarn dev
   ```

   O aplicativo estará rodando em `http://localhost:3000`.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests. Para grandes mudanças, por favor abra uma issue primeiro para discutir o que você gostaria de mudar.

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.


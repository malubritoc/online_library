# E-commerce Project

Bem-vindo ao repositório do projeto de e-commerce! Este projeto foi desenvolvido utilizando diversas tecnologias e bibliotecas modernas para fornecer uma experiência de usuário rica e interativa.

## Tecnologias Utilizadas

- **Next.js**: Framework React para construção de aplicações web.
- **TypeScript**: Superconjunto do JavaScript que adiciona tipagem estática.
- **Firebase**: Utilizado para simular o backend e fornecer dados dinâmicos.
- **Jotai**: Utilizado como gerenciador de estado.
- **clsx**: Utilizado para melhorar a visualização da estilização com Tailwind CSS.
- **Zod**: Utilizado para criar esquemas de formulários.
- **Radix**: Utilizado para criar o modal do carrinho.
- **Keen Slider**: Utilizado para criar os sliders de imagens.

## Funcionalidades

- **Páginas de Sign In**: Página para login de usuários.
- **Página de Início**: Página inicial com apresentação de produtos.
- **Categorias Filtradas**: Páginas que permitem a visualização de produtos filtrados por categorias.
- **Produto Individual**: Página de detalhes de um produto específico.
- **Página de Construção**: Interações com elementos que fazem solicitações ainda não implementadas redirecionam para uma página de "Em Construção".
- **Página 404**: Quando solicitada um URL inexistente, o usuário é redirecionado para uma página de "404 - Not Found".
- **Carrinho de Compras**: Usuários podem ver e adicionar produtos ao carrinho.
- **Página de Obrigado**: Quando realizada a solicitação de finalizar compra, o usuário é redirecionado a uma página de agradecimento.

## Instalação

Siga os passos abaixo para configurar e executar o projeto localmente.

### Pré-requisitos

Certifique-se de ter o Node.js e o npm instalados na sua máquina.

### Passo a Passo

1. Clone o repositório:

   ```bash
   git clone https://github.com/malubritoc/online-library.git
   cd online-library
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Execute o projeto:

   ```bash
   npm run dev
   ```

4. Abra o navegador e acesse http://localhost:3000 para ver a aplicação em execução.

## Uso da Aplicação

- **Página de Sign In**: Acesse /signin para fazer login.
- **Página de início**: Acesse / ou /inicio ver a página inicial do ecommerce, podendo visualizar alguns produtos e suas categorias.
- **Páginas de categorias**: Acesse /categoria/[nome-da-categoria-desejada] ou clique em um dos itens do menu de categorias para ver produtos filtrados por categoria.
- **Páginas de detalhes do produto**: Acesse /produto/[id-do-produto-desejado] ou clique em qualquer produto para ver mais detalhes sobre o produto desejado.
- **Carrinho de compras**: Clique no ícone de sacola no cabeçalho da página para abrir o modal de carrinho e visualizar os itens colocados no carrinho, bem como um resumo do estado vigente da quantidade total, valor do frete selecionado e valor total da compra.

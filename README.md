# The Library

Bem-vindo ao repositório do projeto da The Library! Este projeto foi desenvolvido utilizando diversas tecnologias e bibliotecas modernas para fornecer uma experiência de usuário rica e interativa.

## Tecnologias Utilizadas

- **Next.js**: Framework React para construção de aplicações web.
- **Tailwind**: Framework CSS para estilização de componentes.
- **TypeScript**: Superconjunto do JavaScript que adiciona tipagem estática.
- **Firebase**: Utilização do serviço Firestore para banco de dados NoSql e serviços de API.

### Bibliotecas 

- **Jotai**: Utilizado como gerenciador de estado global.
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
   git clone https://github.com/malubritoc/online_library.git
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

- **Página de Sign In**: Acesse /signin para fazer login. Para realizar o login com êxito utilize as credenciais:

Email

```bash
test@email.com
```

Senha

```bash
1234
```

- **Página de início**: Acesse / ou /inicio ver a página inicial do ecommerce, podendo visualizar alguns produtos e suas categorias.
- **Páginas de categorias**: Acesse /categoria/[nome-da-categoria-desejada] ou clique em um dos itens do menu de categorias para ver produtos filtrados por categoria.
- **Páginas de detalhes do produto**: Acesse /produto/[id-do-produto-desejado] ou clique em qualquer produto para ver mais detalhes sobre o produto desejado.
- **Carrinho de compras**: Clique no ícone de sacola no cabeçalho da página para abrir o modal de carrinho e visualizar os itens colocados no carrinho, bem como um resumo do estado vigente da quantidade total, valor do frete selecionado e valor total da compra.

Obs.: Só é possível finalizar a compra e ir para a página de agradecimento se o usuário estiver logado. Caso ele não esteja, poderá clicar na opção "Fazer login para finalizar a compra", fazer o login, e continuar.

## Sugestões de testes de fluxo

### Testes de Sign In

Testar solicitações de login

- Solicitar o login sem os campos do formulário preenchidos;
- Solicitar o login com credenciais aleatórias ou no formato incorrento (ex.: email fora do formato padrão nome@dominio.com);
- Solicitar o login com credenciais cadastradas (vide Uso da Aplicação).

### Testes de Categorias Filtradas

Testar solicitações de filtrar produtos por categoria

- Clicar nas categorias disponíveis no menu de categorias da página inicial e acessar "/categoria/[nome-da-categoria-desejada]";
- Verificar se os produtos exibidos correspondem à categoria selecionada;
- Acessar URLs de categorias inválidas;
- Verificar renderização da página de 404-Not Found.

### Testes de Detalhes dos Produtos

Testar solicitação de ver página de detalhes dos produtos

- Clicar nos cards de produtos e acessar "/produto/[id-do-produto]";
- Verificar renderização da página de produto com os dados do respectivo;
- Acessar URLs de produtos inválidos;
- Verificar renderização da página de 404-Not Found;

### Testes de adição no carrinho

Testar solicitações referentes à adição de um produto no carrinho

- Definir quantidades inválidas no contador;
- Definir quantidades válidas no contador;
- Definir opção de frete;
- Clicar no botão de adicionar carrinho;
- Verificar a quantidade renderizada na notificação do ícone de sacola no header da página;
- Abrir o modal de carrinho e verificar se o card do produto desejado está sendo renderizado e se as informações do resumo conferem;
- Solicitar finalização de compra sem login;
- Solicitar finalização de compra com login.

### Outros

Outros testes de interação

- Testar cliques nas logos;
- Testar clique no botão "Ordenar";
- Testar cliques nas opções de menu;
- Testar opção de Sign In no side menu (caso não esteja logado);
- Testar clique em item do breadcrumbs na página de detalhes de um produto;
- Testar botões da página de detalhes de um produto.

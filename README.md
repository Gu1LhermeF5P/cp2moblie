
# 🛍️ Projeto React Native - Loja de Produtos

## 👥 Integrantes

- **Nome:** Guilherme Francisco   
  **RM:** 554678 
- **Nome:** Larissa de Freitas
  **RM:** 555136
- **Nome:** João Victor Rebello de Santis  
  **RM:** 555287
  
## 📋 Visão Geral
Este é um projeto de aplicativo de loja de produtos desenvolvido em React Native. O aplicativo permite que os usuários naveguem por uma lista de produtos, visualizem detalhes dos produtos e adicionem produtos ao carrinho de compras. O carrinho de compras é gerenciado utilizando Context API e a persistência dos dados é feita com AsyncStorage.

## ✨ Funcionalidades
- 🧭 Navegação entre telas utilizando React Navigation.
- 📜 Exibição de lista de produtos com filtro de busca.
- 🔍 Visualização de detalhes de produtos.
- 🛒 Adição de produtos ao carrinho de compras.
- 🔢 Gerenciamento de quantidade de produtos no carrinho.
- 💾 Persistência do estado do carrinho utilizando AsyncStorage.

## 🗺️ Estrutura de Navegação
O aplicativo possui duas principais navegações:
1. **Stack Navigator** para navegação entre a lista de produtos e os detalhes dos produtos.
2. **Bottom Tab Navigator** para alternar entre a tela de lista de produtos e a tela do carrinho de compras.

## 🚀 Como Rodar o Projeto
1. Clone este repositório.
2. Instale as dependências utilizando `npm install` ou `yarn install`.
3. Execute o aplicativo utilizando `npm start` ou `yarn start`.

## 🛠️ Tecnologias Utilizadas
- React Native
- React Navigation
- Context API
- AsyncStorage
- React Native Vector Icons

## 🗂️ Estrutura do Código
- `App.js`: Arquivo principal que configura a navegação e o provedor de contexto.
- `context/AppProvider.js`: Define o contexto do aplicativo e gerencia o estado do carrinho.
- `pages/JGLListaProdutos.js`: Tela que exibe a lista de produtos com filtro de busca.
- `pages/JGLDetalhesProduto.js`: Tela que exibe os detalhes de um produto específico.
- `pages/JGLCarrinhoPage.js`: Tela que exibe os produtos adicionados ao carrinho e permite alterar a quantidade ou remover produtos.

## 💡 Sugestões de Melhorias
- Implementar autenticação de usuários.
- Adicionar integração com API para buscar produtos de um servidor.
- Melhorar o design das telas com animações e transições.
- Implementar testes unitários e de integração.

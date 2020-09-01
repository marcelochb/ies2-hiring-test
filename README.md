# React Native (iOS) - Hiring Test 
# Teste para vaga na IES2 - Inovações, Educação e Soluções Tecnológicas.

## Objetivo

Desenvolver um aplicativo utilizando React-Native que simula uma loja de compra de filmes.
Aplicativo deve ter no mínimo duas telas, uma com a listagem de filmes e outra com o carrinho de compras.

## Duração

4 dias corridos para resolução

## Lista de Filmes

Utilizar alguma API pública com catálogo de filmes para exibir os filmes. (Ex: The movie DB)
Deve possuir alguma maneira do usuário adicionar os filmes listados.
Utilizar REDUX Thunk para salvar os filmes selecionados na sacola.

## Carrinho de compras

Deve exibir os filmes salvos no REDUX thunk.

## Requisitos

Utilizar React-Navigation para navegação de telas.
Utilizar a versão mais atual do React-Native
Não utilizar o EXPO para criar o projeto
Subir o app em algum repositório GIT.

## Bônus:

Caso analise a necessidade de melhorias, sinta-se livre para implementar. (Ex: telas, filtros, ações, layout...)


# Solução

## Design criado no XD

![alt text](https://github.com/marcelochb/ies2-hiring-test/blob/master/design/design.png)


## Mobile (React Native)

### API Publica utilizada foi: [The Movie Database!](https://www.themoviedb.org/documentation/api)

### Organização do projeto:
  #### O projeto foi iniciado com template typescript
  #### O pathern escolhido foi MVC (incluindo a pasta Services para aliviar o Controller)
    A escolha do MVC foi com a intenção de proporcionar um codigo descritivo, organizado e facil manutenção. 
    O Model ficou responsável por armazenar a modelagem por typescript. 
    A View com o os arquivos JSX puros.
    O Controller através de hooks fica responsável por toda manipulação dos dados, e utiliza a pasta Services para delegar pequenas tarefas.
  
### Estrutura das pastas:
    1 - src  
    1.1 - assets: Imagens, icones e fonts;
    1.2 - components - Components comparilhados UI e de modulos;
    1.3 - config - Typescrypt e Reactotron;
    1.4 - database - Modelagem e api;
    1.5 - pages - Paginas e seus componentes;
    1.6 - routes - Rota de navegação;
    1.7 - store - Redux (config, reducer, actions, modelagem);
    1.8 - styles - Estilizações compartilhadas;
    1.9 - theme - Tema com paleta de cores, metricas e font sizes;
    
 
 ### Para testar o App
  #### dentro da pasta mobile executar os comandos:
    1 - yarn;
    2 - dentro da pasta ios: pod install;
    3 - dentro da pasta mobile: npx react-native run-ios ou run-android
  

### [iOS App!](https://i.diawi.com/Hocf5K) 

### [Android App!](https://i.diawi.com/ECh7BH)

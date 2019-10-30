yarn create react-app nomeDoProjeto

remover o eslintConfig do package.json

limpar os arquivos index, app.css... e serviceworker

EditorConfig

yarn add eslint -D
yarn eslint --init
remover o package.lock e rodar yarn novamente

yarn add -D prettier eslint-config-prettier eslint-plugin-prettier babel-eslint
configurar arquivo .eslintrc
add no extends prettier e prettier/react
add parser: 'babel-eslint' antes do parserOptions
add prettier nos plugins
sobreescrever as regras do airbnb:
rules: {
  'prettier/prettier': 'error',
  'react/jsx-filename-extension': [
    'warn',
    { extensions: ['.jsx', '.js'] }
  ],
  'import/prefer-default-export': 'off'
},

criar o arquivo .prettierrc com o singlequote e o trailingcomma es5

yarn add react-router-dom //lidar com rotas na SPA

yarn add styled-components //lidar com estilos

yarn add react-icons //vários pacotes de icones

yarn add axios // lidar com requisicoes http - melhor que o fetch do browser



#### DEPLOY
para mais detalhes verifique o deployment do create-react-app https://create-react-app.dev/docs/deployment/

para dar suporte ao pushState que é a api de redirecionamento de rotas do html5, no netlify precisamos criar o arquivo public/_redirects com o seguinte conteúdo: <br/>
/*  /index.html  200

o netlify ja é CD, ou seja, ao comitar na master ele ja gera um novo build ;)

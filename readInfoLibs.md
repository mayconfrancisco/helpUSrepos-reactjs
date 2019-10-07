yarn create react-app nomeDoProjeto

remover o eslintConfig do package.json

limpar os arquivos index, app.css... e serviceworker

EditorConfig

yarn add eslint -D <br />
yarn eslint --init <br />
remover o package.lock e rodar yarn novamente <br />

yarn add -D prettier eslint-config-prettier eslint-plugin-prettier babel-eslint <br />
configurar arquivo .eslintrc <br />
add no extends prettier e prettier/react <br />
add parser: 'babel-eslint' antes do parserOptions <br />
add prettier nos plugins <br />
sobreescrever as regras do airbnb: <br />
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


# JSON to Excel Converter

Este projeto é uma aplicação Node.js que permite fazer upload de arquivos JSON e convertê-los em arquivos Excel (.xlsx). Ele utiliza `express` para o servidor, `express-fileupload` para o upload de arquivos e `xlsx` para a conversão de JSON para Excel.

## Funcionalidades

- Upload de arquivos JSON.
- Conversão de JSON para Excel (.xlsx).
- Download automático do arquivo Excel convertido.

## Pré-requisitos

- Node.js instalado em sua máquina.

## Instalação

1. Clone o repositório:

    git clone <URL_DO_REPOSITORIO>
    cd json-to-excel

2. Instale as dependências:

    npm install

## Uso

### Executar o servidor

Para iniciar o servidor, execute:

    npm start

O servidor estará rodando na porta 3000. Você pode acessar a aplicação em http://localhost:3000.

### Estrutura do projeto

```json
json-to-excel/
├── public/
│   ├── css/
│   │   └── style.css
│   ├── files/
│   └── index.html
├── server.js
├── package.json
└── README.md
 ```
- public/css/style.css: Contém o estilo da página HTML.
- public/index.html: Página HTML para upload de arquivos JSON.
- public/files/: Diretório onde os arquivos Excel gerados serão armazenados temporariamente.
- server.js: Script principal do servidor Node.js.

### Upload de JSON e download de Excel

1. Abra seu navegador e vá para http://localhost:3000.
2. Clique no botão "Escolher arquivo" e selecione um arquivo JSON de seu computador.
3. Clique no botão "Enviar".
4. O arquivo será convertido para Excel e o download será iniciado automaticamente.

## Empacotamento com pkg

Para criar um executável do projeto, siga os passos abaixo:

1. Instale o pkg globalmente (se ainda não estiver instalado):

    npm install -g pkg

2. Certifique-se de que o seu package.json está configurado corretamente:


```json
    {
      "name": "json-to-excel",
      "version": "1.0.0",
      "description": "Conversor de JSON para Excel",
      "main": "server.js",
      "bin": "server.js",
      "scripts": {
        "start": "node server.js"
      },
      "dependencies": {
        "express": "^4.17.1",
        "express-fileupload": "^1.2.1",
        "json2xls": "^0.1.2",
        "xlsx": "^0.17.4"
      },
      "pkg": {
        "assets": [
          "public/**/*"
        ],
        "targets": [
          "node16-win-x64"
        ],
        "outputPath": "build"
      }
    }
 ```



3. Gere o executável:

    pkg . --targets node16-win-x64

4. O executável será gerado no diretório build. Para executar o projeto empacotado, navegue até o diretório build e execute o arquivo .exe gerado.

## Problemas Comuns

### O arquivo Excel gerado está corrompido

- Verifique se os caminhos dos arquivos estão corretos e se todos os diretórios necessários existem.
- Certifique-se de que o arquivo JSON é válido e que está sendo lido corretamente.

### O servidor não inicia

- Verifique se todas as dependências estão instaladas corretamente.
- Verifique se a porta 3000 está disponível.

## Contribuição

Sinta-se à vontade para contribuir com este projeto. Envie um pull request com suas melhorias ou correções de bugs.

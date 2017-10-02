# API - NODE - TYPESCRIPT - EXPRESS - POSTGRESQL - SEQUELIZE

## Criação do projeto
```
git clone https://github.com/ricardoub/exemplos-raphaellima-ts-api.git ts-api && cd ts-api
npm init

```

## Dependencias de projeto
```
npm i body-parser express http morgan pg -S
npm i ts-node -D
```












----

## Criação do projeto
```
git add .
git commit -m "first commit - project created"
git push -u origin master
echo 'Ricardo Bomfim' >> contributors.txt
git add contributors.txt
git commit -m 'Initial commit with contributors'
git push -u origin master

```

## Dependencias de projeto
```
npm i body-parser express http morgan pg -S
npm i ts-node -D
npm i @types/express @types/body-parser @types/morgan -D
npm install @types/bluebird@ts2.2
npm i sequelize sequelize-cli -S
npm i sequelize @types/sequelize -D
```
Para trocar a senha do postgres siga o exemplo em [vivaolinux](https://www.vivaolinux.com.br/dica/Alterando-senha-inicial-do-PostgreSQL-[Ubuntu]/)
---

# Conteúdos dos arquivos utilizados no passo a passo do projeto

## Arquivos de configuração da aplicação
### tsconfig.json

```
{
 "compilerOptions": {  "target": "es5",  "module": "commonjs",  "outDir": "build",  "typeRoots": [ "../node_modules/@types" ],  "types": [ "node" ]  },
 "include": [ "server/**/*.ts", "server/*.ts" ],
 "exclude":[ "node_modules" ],
 "buildOnSave": true,
 "compileOnSave": true
}

```

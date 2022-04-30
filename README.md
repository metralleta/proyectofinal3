# Proyecto final - CoderHouse - Tercera entrega parcial.

## Descripción

El objetivo principal de esta etrega es realizar un login mediante passport local, enviar correo al generarse nuevo usuario a un correo determinado por variable y también al finalizar una compra.

| Método  | Endpoint     | Descripción  |
| ------- | -------------| ------------ |
| GET | /api/producto | Permite recuperar todos los productos |
| POST | /api/producto | Permite crear un nuevo producto |
| GET | /api/usuario | Permite recuperar todos los usuarios |
| POST | /api/usuario | Permite crear un nuevo usuario |
| GET | / | Ruta default para probar express-handlebars |

## Paquetes

Los aquetes utilizados hasta ahora son express, mongoose, sequelize, dotenv, mariadb, passport, express-session.

## Observaciones

Ya funciona el endpoint de vista de usuarios, luego voy a terminar el registro de usuarios y el login. Por último voy a hacer el envìo de la información al mail indicado por variable.
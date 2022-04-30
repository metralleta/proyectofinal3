# Proyecto final - CoderHouse - Tercera entrega parcial.

## Descripción

El objetivo principal de esta etrega es realizar un login mediante passport local, enviar correo al generarse nuevo usuario a un correo determinado por variable y también al finalizar una compra.

| Método  | Endpoint     | Descripción  |
| ------- | -------------| ------------ |
| GET | /producto | Permite recuperar todos los productos |
| POST | /producto | Permite crear un nuevo producto |
| GET | /usuario | Permite recuperar todos los usuarios |
| POST | /usuario | Permite crear un nuevo usuario |
| GET | / | Ruta default para el dashboard |
| GET | /login | Permite iniciar sesion |
| GET | /registro | Permite registrar un nuevo usuario |

## Paquetes

Los aquetes utilizados hasta ahora son express, mongoose, sequelize, dotenv, mariadb, passport, express-session.

## Observaciones

Ya configure passport con local strategy y tengo el registro y el login. A la ruta raíz que es el dashboard, le puse el middleware para controlar si se muestra o no dependiendo de si el usuario está autenticado. Ahora bie, si no estoy logueado, no me muestra la ruta raiz, si hago el login con las credenciales correctas, me va a la ruta raíz, pero donde hago refres, me vuelve al login. No se me está grabando el req.session.passport creo.

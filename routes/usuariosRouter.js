import { Router } from "express"
import { getUsuarioController, postUsuarioController, getUsuarioByEmailController } from '../controllers/usuariosController.js'

const routerUsuario = new Router()

routerUsuario.get('/usuario', getUsuarioController)
routerUsuario.get('/usuario/:email', getUsuarioByEmailController)
routerUsuario.post('/usuario', postUsuarioController)

export default routerUsuario
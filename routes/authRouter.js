import { Router } from "express"
import {
    getLoginController,
    postLoginController,
    postRegistroController,
    getLoginErrorController,
    getRegistroErrorController,
    getRegistroController
} from '../controllers/authController.js'
import { passportAuthLogin, passportAuthRegistro } from '../middlewares/passport.js'

const routerAuth = new Router()

routerAuth.get('/login', getLoginController)
routerAuth.get('/login_error', getLoginErrorController)
routerAuth.post('/login', passportAuthLogin, postLoginController)
routerAuth.post('/registro', passportAuthRegistro ,postRegistroController)
routerAuth.get('/registro', getRegistroController)
routerAuth.get('/registro_error', getRegistroErrorController)

export default routerAuth
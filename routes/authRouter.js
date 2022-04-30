import { Router } from "express"
import { getLoginController, postLoginController, postRegistroController, getLoginErrorController } from '../controllers/authController.js'
import { passport } from '../middlewares/passport.js'

const routerAuth = new Router()

routerAuth.get('/login', getLoginController)
routerAuth.get('/login_error', getLoginErrorController)
routerAuth.post('/login', passport.authenticate('login', { failureRedirect: 'login_error' }), postLoginController)
routerAuth.post('/registro', postRegistroController)

export default routerAuth
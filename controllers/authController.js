import { obtenerUsuarioByEmail } from '../services/usuariosService.js'

async function getLoginController(req, res) {
    res.render('login', { layout: false })
}

async function postLoginController(req, res) {
    console.log(req.session.passport)
    res.render('dashboard')
}

async function getLoginErrorController(req, res) {
    res.json('error en el login')
}

async function getRegistroController(req, res) {
    res.render('registro', { layout: false })
}

async function postRegistroController(req, res) {
    res.json('aca va a ir el proceso del form de registro')
}

async function getRegistroErrorController(req, res) {
    res.json('aca va el error de registro')
}

export { getLoginController, postLoginController, postRegistroController, getLoginErrorController, getRegistroErrorController, getRegistroController }
import { obtenerUsuarioByEmail } from '../services/usuariosService.js'

async function getLoginController(req, res) {
    res.render('login', { layout: false })
}

async function postLoginController(req, res) {
    res.json('putos')
}

async function postRegistroController(req, res) {
    const email = req.params.email
    const usuarios = await obtenerUsuarioByEmail(email)
    res.json(usuarios)
}

async function getLoginErrorController(req, res) {
    const email = req.params.email
    const usuarios = await obtenerUsuarioByEmail(email)
    res.json(usuarios)
}

export { getLoginController, postLoginController, postRegistroController, getLoginErrorController }
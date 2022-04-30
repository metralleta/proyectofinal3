import {
    obtenerTodosLosUsuarios,
    crearUsuario, 
    obtenerUsuarioByEmail 
} from '../services/usuariosService.js'

async function getUsuarioController(req, res) {
    const usuarios = await obtenerTodosLosUsuarios()
    res.json(usuarios)
}

async function getUsuarioByEmailController(req, res) {
    const email = req.params.email
    const usuarios = await obtenerUsuarioByEmail(email)
    res.json(usuarios)
}

async function postUsuarioController(req, res) {
    const usuario = req.body
    await crearUsuario(usuario)
    res.status(201).json(usuario)
}

export { getUsuarioController, postUsuarioController, getUsuarioByEmailController }
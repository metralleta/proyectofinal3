import { usuariosDao } from '../model/index.js'

async function obtenerTodosLosUsuarios() {
    return await usuariosDao.obtenerTodos()
}

async function obtenerUsuarioByEmail(email) {
    return await usuariosDao.obtenerByEmail(email)
}

async function crearUsuario(usuario) {
    await usuariosDao.guardar(usuario)
    return usuario
}
export { obtenerTodosLosUsuarios, crearUsuario, obtenerUsuarioByEmail }






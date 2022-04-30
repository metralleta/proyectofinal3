import { productosDao } from '../model/index.js'

async function obtenerTodosLosDatos() {
    return await productosDao.obtenerTodos()
}

async function crearProducto(producto) {
    await productosDao.guardar(producto)
    return producto
}

async function modificarProducto(productoID, producto) {
    await productosDao.modificar(productoID, producto)
    return producto
}

async function eliminarProducto(productoID) {
    return await productosDao.eliminar(productoID)
}

export { obtenerTodosLosDatos, crearProducto, modificarProducto, eliminarProducto }
import { obtenerTodosLosDatos, crearProducto, modificarProducto, eliminarProducto } from '../services/productosService.js'

async function getProductoController(req, res) {
    const obtenerProductos = await obtenerTodosLosDatos()
    console.log(obtenerProductos)
    res.render('productos', { productos: obtenerProductos })
}

async function postProductoController(req, res) {
    const producto = req.body
    await crearProducto(producto)
    res.status(201).json(producto)
}

async function putProductoController(req, res) {
    const producto = req.body
    const productoID = req.params.id
    const productoModificado = await modificarProducto(productoID, producto)
    res.json(productoModificado)
}

async function deleteProductoController(req, res) {
    const productoID = req.params.id
    await eliminarProducto(productoID)
    res.json({ producto: "Eliminado" })
}

export { getProductoController, postProductoController, putProductoController, deleteProductoController }
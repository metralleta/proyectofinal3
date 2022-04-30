import { Router } from "express"
import { getProductoController, postProductoController, putProductoController, deleteProductoController } from '../controllers/productosController.js'

const routerProducto = new Router()

routerProducto.get('/producto', getProductoController)
routerProducto.post('/producto', postProductoController)
routerProducto.put('/producto/:id', putProductoController)
routerProducto.delete('/producto/:id', deleteProductoController)

export default routerProducto
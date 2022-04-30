import mongoose from 'mongoose'
import config from '../../config.js'

/**
 * Conexión a la base de datos MongoDB Atlas.
 */
try {
    await mongoose.connect(config.mongoDBAtlas.uri, config.mongoDBAtlas.options)
    console.log(`Conexión a la base de datos MongoDB Atlas exitosa!`)
} catch (error) {
    console.log(`Error al conectarse a la base de datos.`)
    throw new Error(error)
}

const { ProductosDaoMongoDB } = await import('./dao/ProductosDao.js')
const { UsuariosDaoMongoDB } = await import('./dao/UsuariosDao.js')

const productosDao = new ProductosDaoMongoDB()
const usuariosDao = new UsuariosDaoMongoDB()

export { productosDao, usuariosDao }
import mongoose from 'mongoose'

class ContenedorMongoDB {

    constructor(nombreColeccion, esquema) {
        this.producto = mongoose.model(nombreColeccion, esquema)
    }

    async guardar(producto) {
        try {
            const productoSaveModel = new this.producto(producto)
            return await productoSaveModel.save()
        } catch (error) {
            console.log(`Error al guardar el producto.`)
            throw new Error(error)
        }
    }
    
    async obtenerTodos() {
        try {
            return await this.producto.find({})
        } catch (error) {
            console.log(`Error al obtener todos los productos.`)
            throw new Error(error)
        }
    }

    async modificar(productoID, producto) {
        try {
            return await this.producto.findOneAndUpdate(productoID, producto, { new: true })
        } catch (error) {
            console.log(`Error al modificar el producto.`)
            throw new Error(error)
        }
    }

    async eliminar(productoID) {
        try {
            return await this.producto.deleteOne({ _id: productoID})
        } catch (error) {
            console.log(`Error al eliminar el producto.`)
            throw new Error(error)
        }
    }

}

export default ContenedorMongoDB
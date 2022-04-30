import mongoose from 'mongoose'

class ContenedorMongoDB {

    constructor(nombreColeccion, esquema) {
        this.coleccion = mongoose.model(nombreColeccion, esquema)
    }

    async guardar(usuario) {
        try {
            const usuarioSaveModel = new this.coleccion(usuario)
            return await usuarioSaveModel.save()
        } catch (error) {
            console.log(`Error al guardar el usuario.`)
            throw new Error(error)
        }
    }

    async obtenerTodos() {
        try {
            return await this.coleccion.find({})
        } catch (error) {
            console.log(`Error al obtener todos los usuarios.`)
            throw new Error(error)
        }
    }

    async obtenerByEmail(email) {
        try {
            return await this.coleccion.findOne({email})
        } catch (error) {
            console.log(`Error al obtener el usuario por el mail dado ${email}`)
            throw new Error(error)
        }
    }

}

export default ContenedorMongoDB
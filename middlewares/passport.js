import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local'
import { usuariosDao } from '../model/index.js'

passport.use('register', new LocalStrategy(
    { usernameField: 'email', passReqToCallback: true }, // ver si passReqToCallBack es necesario
    async (req, email, password, done) => {
        try {
            const usuario = await usuariosDao.obtenerByEmail(email)
            if (usuario) return done(null, false, { mensaje: 'El email ya existe' })
            const { nombre, apellido, email, password } = req.body
            const nuevoUsuario = {
                nombre,
                apellido,
                email,
                password // hacer bcript
            }
            const agregarUsuario = await usuariosDao.guardar(nuevoUsuario)
            return done(null, agregarUsuario)
        } catch (error) {
            return done(error)
        }
    }
))

passport.use('login', new LocalStrategy(
    { usernameField: 'email' },
    async (email, password, done) => {
        try {
            const usuario = await usuariosDao.obtenerByEmail(email)
            if (!usuario) return done(null, false, { mensaje: 'El email no existe' })
            return done(null, usuario)
        } catch (error) {
            done(error)
        }
    }
))

passport.serializeUser((usuario, done) => {
    done(null, usuario._id)
})

passport.deserializeUser(async (email, done) => {
    try {
        const usuario = await usuariosDao.obtenerByEmail(email)
        done(null, usuario)
    } catch (error) {
        done(error)
    }
})

export { passport }
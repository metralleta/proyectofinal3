import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local'
import { usuariosDao } from '../model/index.js'

passport.use('registro', new LocalStrategy(
    { usernameField: 'email', passReqToCallback: true },
    async (req, email, password, done) => {
        try {
            const usuario = await usuariosDao.obtenerByEmail(email)
            if (usuario) return done(null, false, { mensaje: 'El email ya existe' })
            const { nombre, apellido } = req.body
            const nuevoUsuario = {
                nombre,
                apellido,
                email,
                password // hacer bcript
            }
            const agregarUsuario = await usuariosDao.guardar(nuevoUsuario)
            return done(null, agregarUsuario)
        } catch (error) {
            done(error)
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
    console.log(usuario)
    done(null, usuario.email)
})

passport.deserializeUser(async (email, done) => {
    try {
        const usuario = await usuariosDao.obtenerByEmail(email)
        done(null, usuario)
    } catch (error) {
        done(error)
    }
})

const passportAuthLogin = passport.authenticate("login", {
    failureRedirect: "/login_error",
    failureMessage: true,
    successRedirect: "/"
})
const passportAuthRegistro = passport.authenticate("registro", {
    failureRedirect: "/registro_error",
    failureMessage: true,
    successRedirect: "/",
})

export { passport, passportAuthLogin, passportAuthRegistro }
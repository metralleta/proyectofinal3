import express from 'express'
import { engine } from 'express-handlebars'
import usuariosRouter from './routes/usuariosRouter.js'
import productosRouter from './routes/productosRouter.js'
import authRouter from './routes/authRouter.js'
import router from './routes/defaultRouter.js'
import config from './config.js'
import { passport } from './middlewares/passport.js'
import session from 'express-session'

const PORT = config.PORT || 8080

const app = express()

app.engine('hbs', engine({
    defaultLayout: 'main',
    extname: 'hbs'
}))
app.set('view engine', 'hbs')

app.use(session({
    secret: 'aspidelas',
    cookie: {
        httpOnly: false,
        secure: false,
        maxAge: 3000
    },
    rolling: true,
    resave: true,
    saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static('public'))
app.use('/', usuariosRouter)
app.use('/', productosRouter)
app.use('/', authRouter)
app.use('/', router)

export { app }
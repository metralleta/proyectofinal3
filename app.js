import { app } from './server.js'
import config from './config.js'

/**
 * Server iniciado.
 */
app.listen(config.PORT, () => console.log(`Server escuchando en el puerto ${config.PORT} . . .`))
import 'dotenv/config'

/**
 * Exporto un objeto con todas las variables del archivo .env.
 */
const config = {
    PORT: process.env.PORT,
    PERS: process.env.PERS,
    mongoDBAtlas: {
        uri: process.env.MONGODB_ATLAS_URI,
        options: {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          serverSelectionTimeoutMS: 5000
        }
    }
}

export default config
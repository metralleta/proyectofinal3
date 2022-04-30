import config from '../config.js'

const { productosDao, usuariosDao } = await import(`./${config.PERS}/index.js`)

export { productosDao, usuariosDao }

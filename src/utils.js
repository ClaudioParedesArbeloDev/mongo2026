// multer: middleware para recibir archivos subidos desde formularios (multipart/form-data)
import multer from "multer";
// fileURLToPath: convierte una URL tipo "file:///ruta/archivo.js" en una ruta normal del sistema
import { fileURLToPath } from "url";
// dirname: devuelve la carpeta que contiene un archivo
// join: une partes de una ruta (actualmente no se usa en este archivo)
import { dirname, join } from "path";

// Con ES Modules ("type": "module") NO existen __filename ni __dirname como en CommonJS,
// así que los recreamos a mano:
// import.meta.url -> URL de ESTE archivo (utils.js)
// __filename      -> ruta absoluta de utils.js, p. ej. /home/.../mongo/src/utils.js
const __filename = fileURLToPath(import.meta.url);
// __dirname       -> carpeta donde está utils.js, p. ej. /home/.../mongo/src
// Por eso utils.js está en src/: así __dirname apunta a src y sirve de referencia
// para construir rutas como path.join(__dirname, 'views') en app.js
const __dirname = dirname(__filename);

// Configuración de multer: dónde y con qué nombre se guardan los archivos subidos
const storage = multer.diskStorage({
  // destination: carpeta donde se guardan los archivos.
  // "public" es relativa a la carpeta desde donde se ejecuta node (la raíz del proyecto),
  // no a src/. cb(error, valor): se pasa null porque no hay error.
  destination: function (req, file, cb) {
    cb(null, "public");
  },
  // filename: nombre con el que se guarda el archivo.
  // Se usa el nombre original, así que si se sube otro archivo con el mismo nombre
  // se sobrescribe el anterior (se podría anteponer Date.now() para evitarlo).
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

// uploader: instancia de multer lista para usar como middleware en una ruta, p. ej.:
//   router.post('/', uploader.single('thumbnail'), (req, res) => { req.file ... })
// Actualmente no se importa en ningún archivo.
export const uploader = multer({ storage: storage });

// Export por defecto: la ruta de la carpeta src, usada en app.js para ubicar las vistas
export default __dirname;

<h1 align="center">Mongo 2026 · Express + MongoDB</h1>

<p align="center">
  Ejemplos de clase: Mongoose, paginación y cookies · Class examples: Mongoose, pagination and cookies
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/Express_5-000000?style=for-the-badge&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/Mongoose-880000?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Handlebars-F0772B?style=for-the-badge&logo=handlebarsdotjs&logoColor=white" />
</p>

<p align="center">
  <a href="#-español">Español</a> · <a href="#-english">English</a>
</p>

> 🎓 Material de clase de mi curso de **Backend con Express** (2026), donde trabajo como docente. El código avanza clase a clase y está comentado para los alumnos.  
> 🎓 Teaching material from my **Express backend** course (2026), where I work as an instructor. The code grows class by class and is commented for students.

---

## 🇪🇸 Español

### Qué es

Continuación del curso de backend: persistencia con **MongoDB** y manejo de **cookies**.

### Temas

- Modelo de usuario con **Mongoose** y CRUD en `/api/users`.
- Paginación con `mongoose-paginate-v2` y vistas Handlebars.
- Cookies con `cookie-parser`: crear, leer, firmar y borrar (`/api/cookies`).
- Variables de entorno con `dotenv`.

### Cómo correrlo

```bash
git clone https://github.com/ClaudioParedesArbeloDev/mongo2026.git
cd mongo2026
npm install
# crear .env con USERNAMEDB y PASSWORDDB (MongoDB Atlas)
npx nodemon src/app.js
```

---

## 🇬🇧 English

### What it is

Follow-up to my backend course: persistence with **MongoDB** and **cookie** handling.

### Topics

- **Mongoose** user model and CRUD at `/api/users`.
- Pagination with `mongoose-paginate-v2` and Handlebars views.
- Cookies with `cookie-parser`: set, read, signed and delete (`/api/cookies`).
- Environment variables with `dotenv`.

### Running it

```bash
npm install
# create .env with USERNAMEDB and PASSWORDDB (MongoDB Atlas)
npx nodemon src/app.js
```

---

<p align="center">
  Hecho por / Built by <a href="https://github.com/ClaudioParedesArbeloDev"><b>Claudio Paredes Arbelo</b></a> · <a href="https://www.claudioparedes.site">Code & Lens Solutions</a>
</p>

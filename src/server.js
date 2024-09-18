import express from "express";

import conn from "./config/conn.js";


//routes
import UsuariosRoutes from "./routes/Usuarios-ROutes.js"


//models
import Usuarios from "./models/Usuarios.js";


const PORT = process.env.PORT || 3333


const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use("/usuarios", UsuariosRoutes)

conn.sync().then(()=>{
    app.listen(PORT, ()=> {
        console.log(`Serveidor on https://localhost:${PORT}`)
    })
}).catch((err) => console.error(err))




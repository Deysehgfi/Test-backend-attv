import {DataTypes } from "sequelize"
import conn from "../config/conn.js"


const Usuarios = conn.define("usuarios", {
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
},{
    tableName: "usuarios"
})


export default Usuarios;
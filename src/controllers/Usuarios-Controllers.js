import { response } from "express";
import Usuarios from "../models/Usuarios.js";




export const create = async (request, response) => {
    const { nome, email, password} = request.body;

    if(!nome){
        response.status(400).json({err:"É obrigatório o nome de usuario"})
        return;
    }
    if(!email){
        response.status(400).json({err:"É obrigatório o email de usuario"})
        return;
    }
    if(!password){
        response.status(400).json({err:"É obrigatório o password de usuario"})
        return;
    }

    const novoUsuario = {
        nome,
        email,
        password
    }

    try {
        await Usuarios.create(novoUsuario)
        response.status(201).json({message: "Usuario cadastrado com sucesso ✨🦄🐬🌈"})
    } catch (error) {
        response.status(500).json({err:"Error ao criar Usuarios"})
    }

}

export const getAll = async (request, response) => {
    try {
        const usuarios = await Usuarios.findAll()
        response.status(200).json(usuarios)
    } catch (error) {
        console.error(err)
        response.status(500).json({ message: "Erro ao listar usuarios" }) 
    }
}
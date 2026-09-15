import { Router } from "express";
import { userModel } from "../model/user.model.js";

const router = Router();

/* const users = [
  { id: 1, name: "Alice", lastName: "Smith" },
  { id: 2, name: "Bob", lastName: "Johnson" },
  { id: 3, name: "Charlie", lastName: "Brown" },
  { id: 4, name: "David", lastName: "Wilson" },
  { id: 5, name: "Eve", lastName: "Davis" },
]; */


/* Crear uno o varios usuarios */
router.post('/', async(req, res)=> {
    try{
        /* si envian un array, creamos varios usuarios */
        if(Array.isArray(req.body)){
            let users = req.body;
            let invalid = users.some(u => !u.first_name || !u.last_name || !u.email);
            if(invalid) return res.send({status:"error", error:"Campos incompletos en uno o más usuarios"});

            let result = await userModel.insertMany(users, {ordered:false});
            return res.send({status:"success", payload:result});
        }

        /* extraer del body los datos */
        let {first_name, last_name, email} = req.body;

        /* si no nos envian los datos marca error */
        if(!first_name || !last_name || !email) return res.send({status:"error", error:"Campos incompletos"});

        /* creamos el usuario */
        let result = await userModel.create({
            first_name,
            last_name,
            email
        });

        res.send({status:"success", payload:result})
    }
    catch(error){
        res.status(500).send({status:"error", error:error.message})
    }
})



/* es llamar a todos los usuarios */
router.get('/', async(req, res)=>{
    try{
        let users = await userModel.find()
        res.send({result:"success", payload:users })
    }
    catch(error){
        console.log('No se encontraron los usuarios' +error)
    }
} )


/* modificamos un usuario */
router.put('/:uid', async(req, res)=>{
    let {uid} = req.params;
    let userToReplace = req.body;
    if(!userToReplace.first_name || !userToReplace.last_name || !userToReplace.email){
        return res.send({status:"error", error:"Valores incompletos"})
    }
    let result = await userModel.updateOne({_id:uid}, userToReplace)
    res.send({status:"success", payload:result})
})

/* eliminar un usuario */

router.delete('/:uid', async(req, res)=>{
    let { uid } = req.params;
    let result = await userModel.deleteOne({_id:uid})
    res.send({status:"success", payload:result})
})

export default router;

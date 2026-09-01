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

export default router;

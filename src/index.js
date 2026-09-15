import  {userModel}  from "./model/user.model.js";
import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

const address = process.env.MONGODB

const enviroment = async() => {
    await mongoose.connect(address)
    let response = await userModel.paginate({first_name:"Martina"},{limit:15, page:1})
    console.log(response)
}

enviroment();
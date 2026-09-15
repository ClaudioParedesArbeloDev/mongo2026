import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2'


const userCollection = 'usuarios'

const userSchema = new mongoose.Schema({
    first_name:{
        type:String,
        index:true
    },
    last_name:String,
    email:{
        type:String,
        unique:true
    }
})

userSchema.plugin(mongoosePaginate)

export const userModel = mongoose.model(userCollection, userSchema)
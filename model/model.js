

import mongoose from 'mongoose';
import  bcrypt  from 'bcryptjs';


const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
}, {
    timestamps: true
});

UserSchema.pre("save", async function(next){
    if(!this.isModified("password")){
        next()
    }
    this.password = await  bcrypt.hashSync(this.password,10)
})

mongoose.models={}

const User =new mongoose.model("User",UserSchema)
export default User

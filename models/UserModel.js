import mongoose from "moongose";

//aqui me encuentro conectandome a mongodb 
mongoose.connect("mongodb://localhost:3000/PROJECT'S ORG - 2023-09-18 > PROJECT 0")

const { Schema } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

const User = mongoose.model("User", userSchema);
const LogInCollection=new mongoose.model('LogInCollection',logInSchema)




export default User;
module.exports=LogInCollection//aqui exporte el modulo 


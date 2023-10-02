import * as mongoose from "mongoose";


const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    }
});

const UserModel = mongoose.model("Users", userSchema);

export default UserModel;
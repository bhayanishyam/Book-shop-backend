import mongoose from 'mongoose'
interface IUser {
    username: string,
    email: string,
    password: string

}
const userSchema = new mongoose.Schema<IUser>({
    username: {
        type: String,
        require: [true, "username is required"]
    },
    email: {
        type: String,
        require: [true, "email is required"]
    },
    password: {
        type: String,
        require: [true, "password is required"]
    }
}, {
    timestamps: true
});

export const User = mongoose.model("user", userSchema);
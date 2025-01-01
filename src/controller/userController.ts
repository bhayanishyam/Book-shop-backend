import asyncHandler from 'express-async-handler';
import { User } from '../models/userModel';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'

interface IUserData {
    username: string;
    _id: string;
    password: string;
    email: string;
    createdAt: string;
    updatedAt: string;
}

//@desc Create the user
//@route Post api/user/signup
//@access public
const signUpUser = asyncHandler(async (req, res) => {

    const { email, username, password } = req.body;
    if (!email || !username || !password) {
        res.status(400);
        throw new Error("user data is missing");
    }

    const isHaveUser = await User.findOne({ email });
    if (isHaveUser) {
        res.status(400);
        throw new Error("user is existed.");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        email, username, password: hashedPassword
    });

    res.status(201).json({ id: user.id });
})



//@desc Login user
//@router Post api/user/login
//@access public
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400);
        throw new Error("information missing");
    }

    const user: IUserData | any = await User.findOne({ email });

    if (user) {

        bcrypt.compare(password, user?.password, (err, result) => {
            if (err) {
                res.status(400);
                throw new Error("check email and password");
            }

            if (result) {
                const token = jwt.sign({
                    id: user._id,
                    username: user.username,
                    email: user.email
                }, process.env.PRIVATE_KEY || "shyam@123",
                    { expiresIn: '1h' }
                );

                res.status(200).json({ accessToken: token });
            } else {
                res.status(400);
                throw new Error("check email and password!")
            }
        });


    } else {
        res.status(400);
        throw new Error("check email and password!")
    }



    // res.json({ message: "user login" })
})

//@desc getUser 
//@router get api/user/current
//@access private
const getUser = asyncHandler(async (req, res) => {
    const user = req.body.user;
    res.json({ user })
});

//@desc updatePassword
//@route Patch api/user/update-password
//@access private
const updatePassword = asyncHandler(async (req, res) => {
    const { id, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.findByIdAndUpdate({ _id: id }, { $set: { password: hashedPassword } })
    if (!user) {
        res.status(400);
        throw new Error("something wrong!")
    }

    res.status(200).json({ message: "Password Updated successfully!" });
})

//@desc Update User Data
//@route Patch api/user/:id
//@access private
const updateUser = asyncHandler(async (req, res) => {

    res.json({ message: "update user" })
})

export { signUpUser, loginUser, getUser, updatePassword, updateUser }
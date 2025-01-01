import asyncHandler from 'express-async-handler'
import jwt from 'jsonwebtoken'

export const validateUserHandler = asyncHandler(async (req, res, next) => {
    let token = '';
    const authData: any = req.headers.authorization || req.headers.Authorization;
    token = authData.split(" ")[1]

    jwt.verify(token, process.env.PRIVATE_KEY || "", (err, result) => {
        if (err) {
            res.status(400);
            throw new Error("session time out!")
        }

        req.body.user = result;
        next()
    })
})
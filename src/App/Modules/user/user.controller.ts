import { NextFunction, Request, Response } from "express";
import { createUserToDB } from "./user.services";


export const welcomeServer = async (req: Request, res: Response, Next: NextFunction) => {
    res.status(200).json({
        message: "Welcome Havetool Your Server is Succesfully running. Remember no pain no gain!!"
    })
}

export const createUser = async (req: Request, res: Response, Next: NextFunction) => {
    const data = req.body;
    const user = await createUserToDB(data);
    res.status(200).json({
        status: "Success",
        data: user
    })
}

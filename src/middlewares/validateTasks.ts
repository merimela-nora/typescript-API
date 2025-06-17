import { NextFunction, Request, Response } from "express";


export const validateTasks = async (req:Request, res: Response, next: NextFunction) => {

    const {title, description}= req.body
    if(!title){
  res.status(400).json ({message: "title is required"});
  return
    }

    if(!description){
    res.status(400).json ({message: "description is required"});
    return
    }

    next();

    }
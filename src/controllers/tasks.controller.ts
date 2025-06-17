import {Request , Response } from 'express';
import { PrismaClient  } from '@prisma/client';



const  client = new PrismaClient();

//get all
export const getAllTasks  =async (_req:Request, res: Response) => {
    try {
     const tasks = await client.task.findMany()
     res.json(tasks);
    } catch (error) {
        const err = error as Error;
     res.status(500).json({message: "Something went wrong", error: err.message });
    }
 };

//create
 export const createNewTasks = async (req:Request, res:Response) => {

    try {
        const {title, description , isCompleted=false}= req.body;
    const newTask = await client.task.create({
        data: { title, description , isCompleted}
     });
     
     res.status(200).json(newTask);
    } catch (error) {
        const err = error as Error;
     res.status(500).json({ message: "Something went wrong", error: err.message });
    }
 };

 //specific
 export const specificTask = async (req:Request, res:Response) => {
    const { id } = req.params;

    try {
    const task = await client.task.findUnique({
        where:{ id: String(id) }
     });
     if (!task) return res.status(404).json({ message: "Task not found" });
    res.json(task);

    } catch (error) {
        const err = error as Error;
     res.status(500).json({ message: "Something went wrong", error: err.message });
    }
 }

 //delete
 export const deletedTask = async (req:Request, res:Response) => {
    try {
        const { id } = req.params;
    const deleteTask = await client.task.delete({
        where:{ id},

     });
    res.json(deleteTask);

    } catch (error) {
        const err =error as Error;
     res.status(500).json({ message: "Something went wrong", error: err.message });
    }
 }
 
 export const updatedTask = async (req:Request, res:Response) => {
    const { id } = req.params;
    const updatedTask= req.body;
    try {
    const updateTask = await client.task.update({
        where:{ id},
        data: updatedTask

     });
    res.json(updateTask);

    } catch (error) {
        const err =error as Error;
     res.status(500).json({ message: "Something went wrong", error: err.message });
    }
 }
import express from 'express';
import taskRouter from './routes/tasks.routes'
import { PrismaClient } from '@prisma/client';



const app= express();
const  client = new PrismaClient();

app.use(express.json());

//routes
app.get("/", (_req, res) => {
    res.send("<h1>TASK TYPESCRIPT-EXPRESS API</h1>");
});


app.use('/tasks', taskRouter);

let port;
if (process.env.PORT){
    port=process.env.PORT
}
        else {
            port=4005
        }

app.listen(port,() => {
    console.log(`app running on port 4005`)
});

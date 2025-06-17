import { Router } from 'express'
import { getAllTasks } from '../controllers/tasks.controller';
import { createNewTasks } from '../controllers/tasks.controller';
import { deletedTask } from '../controllers/tasks.controller';
import { specificTask } from '../controllers/tasks.controller';
import { updatedTask } from '../controllers/tasks.controller';
import { validateTasks } from '../middlewares/validateTasks';



const router = Router();

router.get('/' , getAllTasks);
router.post("/" , validateTasks, createNewTasks );
router.delete('/:id',deletedTask);
//router.get('/:id' , specificTask);
router.put("/:id", validateTasks, updatedTask)


export default router;
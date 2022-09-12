import express from 'express';
import * as todoController from '../controllers/todo.controller';
import { todoValidator } from '../validators/todo.validator';

const router = express.Router();

//router to create to-do list
router.post('', todoValidator,  todoController.newTodo);

//router to retrieve all the lists
router.get('', todoController.gettodo);



export default router;


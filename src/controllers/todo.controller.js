import HttpStatus from 'http-status-codes';
import * as todoService from '../services/todo.service';

// creating a new to-do list
export const newTodo = async (req, res, next) => {
    try {
        console.log("req.body",req.body)
      const data = await todoService.newTodo(req.body);
      res.status(HttpStatus.CREATED).json({
        code: HttpStatus.CREATED,
        data: data,
        message: 'To-Do list created successfully'
      });
    } catch (error) {
      next(error);
    }
  };
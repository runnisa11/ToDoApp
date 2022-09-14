import HttpStatus from 'http-status-codes';
import * as todoService from '../services/todo.service';

// creating a new to-do list
export const newTodo = async (req, res, next) => {
    try {
        console.log("req.body", req.body)
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

//retrieving all the data from the lists
export const gettodo = async (req, res, next) => {
    try {
        console.log("req.body", req.body)
        const data = await todoService.getAllDos(req.body);
        res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            data: data,
            message: 'List fetched successfully'
        });
    } catch (error) {
        next(error);
    }
}

//to geta single list
export const getlist = async (req, res, next) => {
    try {
        console.log("req.body", req.body)
        const data = await todoService.getlist(req.params._id);
        res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            data: data,
            message: 'List fetched successfully'
        });
    } catch (error) {
        next(error);
    }
};

//to update the list
export const updateList = async (req, res, next) => {
    try {
        console.log("req.body", req.body)
        const data = await todoService.updateList(req.params._id, req.body);
        res.status(HttpStatus.ACCEPTED).json({
            code: HttpStatus.ACCEPTED,
            data: data,
            message: 'List updated successfully'
        });
    } catch (error) {
        next(error);
    }
}

//>>>>>>>>to delete the single list
export const deleteList = async (req, res, next) => {
    try {
        const data = await todoService.deleteList(req.params._id);
        res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            data: data,
            message: 'List deleted successfully'
        });
    } catch (error) {
        next(error);
    }
};


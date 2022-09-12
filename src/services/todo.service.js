import Todo from '../models/todo.model';

//creating new to-do list
export const newTodo = async (body) => {
    console.log(body);
    const data = await Todo.create(body);
    return data;
  };
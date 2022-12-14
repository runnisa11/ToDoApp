import Todo from '../models/todo.model';

//>>>>>>>>>creating new to-do list
export const newTodo = async (body) => {
    console.log(body);
    const data = await Todo.create(body);
    return data;
  };

//>>>>>>>>>>>>retrieving data from the lists
export const getAllDos = async () => {
    const data = await Todo.find();
    return data;
  };

  //>>>>>>>>>>>>to geta single list
  export const getlist = async (_id) => {
    const data = await Todo.findById(_id);
    return data;
  };

  //>>>>>>>>>>to update the list
  export const updateList = async (_id, body) => {
    const data = await Todo.findByIdAndUpdate(
      {
        _id 
      },
      body,
      {
        new: true
      }
    );
    return data;
  };

  //>>>>>>>to delete the list
  export const deleteList = async (id) => {
    await Todo.findByIdAndDelete(id);
    return '';
  };
  
function todoReducers(state, action){
  if(action.payload == 'add_todo') {
    let todoText = action.payload.todoText;
    return [
         ...state, {id: state.length + 1, todoData: todoText, finished: false}
    ]
  }
  else if(action.type == 'edit_todo') {
    let todo = action.payload.todo;
    let todoText = action.payload.todoText;
    const updatedList = state.map(t => {
        if(t.id == todo.id) {
            todo.todoData = todoText;
        }
        return t;
      });
    return updatedList;
  }
  else if(action.type == 'delete_todo') {
    let todo = action.payload.todo;
    const updatedList = state.filter(t => t.id != todo.id) 
    return updatedList;
  }
}

export default todoReducers

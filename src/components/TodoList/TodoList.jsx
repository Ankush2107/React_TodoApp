import Todo from "../Todo/Todo.jsx";
import TodoContext from "../../context/TodoContext.js";
import { useContext } from "react";
import TodoDispatchContext from "../../context/TodoDispatchContext.js";

function TodoList(){
    const {list} = useContext(TodoContext);
    const {dispatch} = useContext(TodoDispatchContext);

    function onFinished(todo, isFinished) {
      dispatch({ type: 'finish_todo', payload: {todo, isFinished: isFinished}});
    }

    function onDelete(todo) {
      dispatch({ type: 'delete_todo', payload: {todo}});
    }

    function onEdit(todo, todoText) {
      dispatch({ type: 'edit_todo', payload: {todo, todoText}});
    }
    
  return (
    <div>
      {list.map((todo) => (
            <Todo 
              key={todo.id} 
              id={todo.id} 
              todoData={todo.todoData} 
              isFinished={todo.finished} 

                /*
                    changeFinished is used to update the finished state of the corresponding todo in the list and then calls updateList to update the overall todo list in the parent component.
                */  
              changeFinished={(isFinished) => onFinished(todo, isFinished)}
              onDelete={() => onDelete(todo)}
              onEdit={(todoText) => onEdit(todo, todoText)}
            />
      ))}
    </div>
  )
}

export default TodoList;

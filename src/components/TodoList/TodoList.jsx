import Todo from "../Todo/Todo";
import TodoContext from "../../context/TodoContext";
import { useContext } from "react";

const TodoList = () => {
    const {list, setList} = useContext(TodoContext);

    function onFinished(todo, isFinished) {
      const updatedList = list.map(t => {
        if(t.id == todo.id) {
            todo.finished = isFinished;
        }
        return t;
      });
      setList(updatedList);
    }

    function onDelete(todo) {
      const updatedList = list.filter(t => t.id != todo.id) 
      setList(updatedList);
    }

    function onEdit(todo, todoText) {
      const updatedList = list.map(t => {
        if(t.id == todo.id) {
            todo.todoData = todoText;
        }
        return t;
      });
      setList(updatedList);
    }
    
  return (
    <div>
      { list.length > 0 && list.map((todo) => (
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

export default TodoList

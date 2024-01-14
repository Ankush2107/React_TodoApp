import Todo from "../Todo/Todo";

const TodoList = ({ list, updateList }) => {
    
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
                
                changeFinished={(isFinished) => {
                    const updatedList = list.map(t => {
                        if(t.id == todo.id) {
                            todo.finished = isFinished;
                        }
                        return t;
                    });
                    updateList(updatedList);
                }}
            />
      ))}
    </div>
  )
}

export default TodoList

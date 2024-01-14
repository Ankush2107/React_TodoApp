import { useState } from "react";

const Todo = ({ todoData, isFinished, changeFinished }) => {
    const [ finished, setFinished ] = useState(isFinished);
  return (
    <div>
        <input type="checkbox" checked={finished} onChange={(e) => {
            setFinished(e.target.checked) // Updates the local finished state with the new checked state of the checkbox I mean superficially.

            changeFinished(e.target.checked) // Internally updates the existing finished value.
        }}  
        />
        { todoData }
        <button>Edit</button>
        <button>Delete</button>
    </div>
  )
}

export default Todo;

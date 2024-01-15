import { useState } from "react";

const Todo = ({ todoData, isFinished, changeFinished, onDelete, onEdit }) => {
    const [ finished, setFinished ] = useState(isFinished);
    const [ isEditting, setIsEditting ] = useState(false);
    const [ editText, setEditText ] = useState(todoData);
  return (
    <div>
        <input type="checkbox" checked={finished} onChange={(e) => {
            setFinished(e.target.checked) // Updates the local finished state with the new checked state of the checkbox I mean superficially.
            changeFinished(e.target.checked) // Internally updates the existing finished value.
        }}  
        />

        {/* TodoData */}
        {(isEditting) ? <input type="text" 
                               value={editText} 
                               onChange={(e) => setEditText(e.target.value)} 
                        /> : <span>{todoData}</span> }
 
        <button onClick={() => {setIsEditting(!isEditting)
                                onEdit(editText)
                                }}>{(!isEditting) ? 'Edit' : 'Save'}
        </button>

        <button onClick={onDelete}>Delete</button>
    </div>
  )
}

export default Todo;

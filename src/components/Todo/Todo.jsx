import { useState } from "react";

function Todo({ todoData, isFinished, changeFinished, onDelete, onEdit }) {
    const [ finished, setFinished ] = useState(isFinished);
    const [ isEditting, setIsEditting ] = useState(false);
    const [ editText, setEditText ] = useState(todoData);

    const handleCheckboxChange = (e) => {
      setFinished(e.target.checked); // superficially
      changeFinished(e.target.checked); // Internally
    };

    const handleEditToggle = () => {
      setIsEditting(!isEditting);
      if (isEditting) {
        onEdit(editText);
      }
    };

    const handleInputChange = (e) => {
      setEditText(e.target.value);
    };

  return (
    <div>
        <input type="checkbox" checked={finished} onChange={handleCheckboxChange} />

        {/* TodoData */}
        {(isEditting) ? <input type="text" 
                               value={editText} 
                               onChange={handleInputChange} 
                        /> : <span>{todoData}</span> }
 
        <button onClick={handleEditToggle}>{(!isEditting) ? 'Edit' : 'Save'}</button>

        <button onClick={onDelete}>Delete</button>

    </div>
  )
}

export default Todo;

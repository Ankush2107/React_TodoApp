import { useState } from "react";

const AddTodo = ({ updateList }) => {
    const [ inputText, setInputText ] = useState('');
  return (
    <div>
      <input 
        placeholder="add your todos"
        type="text"
        value={inputText}
        onChange={e => setInputText(e.target.value)}
      />
      <button onClick={() => { updateList(inputText) 
                                setInputText('')
                             }}>Add</button>
    </div>
  )
}

export default AddTodo;

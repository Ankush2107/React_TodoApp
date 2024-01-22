import './App.css'
import TodoList from './components/TodoList/TodoList'
import AddTodo from './components/AddTodo/AddTodo';
import TodoContext from './context/TodoContext';
import TodoDispatchContext from './context/TodoDispatchContext'
import { useReducer } from 'react';
import todoReducers from './reducers/todoReducers';
function App() {

  const [list, dispatch] = useReducer(todoReducers, []);

  return (
    <TodoContext.Provider value={{list}}>
      <TodoDispatchContext.Provider value={{dispatch}}>
        <AddTodo/>
        <TodoList/>
      </TodoDispatchContext.Provider>
    </TodoContext.Provider>
  )
}

export default App

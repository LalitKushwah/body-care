import React, {createContext, useState} from 'react';

const TodoContext = createContext();

const TodoContextProvider = props => {
  const [todos, setTodos] = useState([]);
  const addTodo = title => setTodos(todos => {
    const newTodo =  { title: title, id: new Date() }
    const updated = [...todos, newTodo];
    return updated;
  });


  const removeTodo = id =>
    setTodos(() => todos.filter(item => item.id !== id));

  return (
    <TodoContext.Provider value={{addTodo, removeTodo, todos}}>
      {props.children}
    </TodoContext.Provider>
  );
};

export {TodoContext, TodoContextProvider};

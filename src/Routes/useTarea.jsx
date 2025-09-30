import {  useState } from "react";
import { useLocalStorageItem } from "./Custom-Hooks-useLocalStorange";

function useTareas () {
  const {
    item: todos,
    saveItem,
    loading,
    error  
  } = useLocalStorageItem('TAREAS_V1', []); 
  const [stateSearch, setStateSearch] = useState(''); 

  const completedTodos = todos.filter(todo => !! todo.completed).length 
  const totalTodo = todos.length 
  const searchTodo = todos.filter(todo => { 
    const todoText = todo.text.toLowerCase() 
    const searchText = stateSearch.toLowerCase()
    return todoText.includes(searchText)

  });

  const addTodo = (text) => {
    const trimmedText = text.trim(); // elimina espacios al inicio y final

    if (!trimmedText) return; // si está vacío, no hace nada

    const newItem = [...todos]; // se crea una copia del estado actual de los todos
    newItem.push({ // se añade un nuevo todo al array de todos
      id: crypto.randomUUID(),// se genera un id único para el nuevo todo este metodo es nativo de js
      text,
      completed : false
    });
    saveItem(newItem); // se llama a la función saveItem para guardar los nuevos todos en el localStorage y actualizar el estado
  }


  const getTodo = (id) => {
    const todoIndex = todos.findIndex(
      (todo) => todo.id === id
    );    
    return todos[todoIndex]
  }
  
  const completeTodo = (id) => { // se le pasa el texto del todo que se quiere completar o descompletar
    const newItem = [...todos]; // se crea una copia del estado actual de los todos
    const todoIndex = newItem.findIndex(
      (todo) => todo.id === id // buscamos el índice del todo que coincide con el texto pasado
    );
    newItem[todoIndex].completed = !newItem[todoIndex].completed; // se cambia el estado de completado del todo encontrado si es true se cambia a false y viceversa
    saveItem(newItem); // se llama a la función saveItem para guardar los nuevos todos en el localStorage y actualizar el estado
  };

  const editTodo = (id, ediText) => { 
    const newItem = [...todos];
    const todoIndex = newItem.findIndex( 
      (todo) => todo.id === id 
    );
    newItem[todoIndex].text = ediText
    saveItem(newItem); 
  };

  const deleteTodo = (id) => { 
    const newItem = [...todos];
    const todoIndex = newItem.findIndex(
      (todo) => todo.id === id // buscamos el índice del todo que coincide con el id pasado
    );
    newItem.splice(todoIndex, 1); // eliminamos el todo encontrado en el índice especificado
    saveItem(newItem);
  };

  return (

    {
      addTodo,
      editTodo,
      completeTodo,
      deleteTodo,
      setStateSearch,
      getTodo,
      loading,
      error,
      completedTodos,
      totalTodo,
      stateSearch,
      searchTodo,
    }
  )
}

export {  useTareas };
import { createContext, useState } from "react";
import { useLocalStorageItem } from "./Custom-Hooks-useLocalStorange";

const TodoContext = createContext();

function TodoProvider ({ children }) {
  const {
    item: todos,
    saveItem,
    loading,
    error  
  } = useLocalStorageItem('TAREAS_V1', []); // usamos useState para declarar el estado de los todos, inicializándolo con los todos parseados desde localStorage
  const [stateSearch, setStateSearch] = useState(''); // podemos declarar estados en el padre para que los hijos puedan acceder a ellos
  const [openModal, setOpenModal] = useState(false); // estado para controlar si el modal está abierto o cerrado

  const completedTodos = todos.filter(todo => !! todo.completed).length // !! convierte el valor a booleano en caso de que sea un string o un number
  const totalTodo = todos.length // estos son estados derivados, no son estados que se declaran con useState, sino que se derivan de otros estados por ejemplo, no se crea un useState nuevo se utiliza el que ya existe

  const searchTodo = todos.filter(todo => {  // filtramos los todos para que solo se muestren los que coincidan con el texto de búsqueda
    const todoText = todo.text.toLowerCase() // convertimos el texto a minúsculas para que la búsqueda no sea sensible a mayúsculas y minúsculas
    const searchText = stateSearch.toLowerCase()// convertimos el texto de búsqueda a minúsculas
    return todoText.includes(searchText)// verificamos si el texto del todo esta incluido en el texto de búsqueda

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
  
  const completeTodo = (id) => { // se le pasa el texto del todo que se quiere completar o descompletar
    const newItem = [...todos]; // se crea una copia del estado actual de los todos
    const todoIndex = newItem.findIndex( 
      (todo) => todo.id === id // buscamos el índice del todo que coincide con el texto pasado
    );
    newItem[todoIndex].completed = !newItem[todoIndex].completed; // se cambia el estado de completado del todo encontrado si es true se cambia a false y viceversa
    saveItem(newItem); // se llama a la función saveItem para guardar los nuevos todos en el localStorage y actualizar el estado
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

    <TodoContext.Provider value={{
      loading,
      error,
      completedTodos,
      totalTodo,
      stateSearch,
      setStateSearch,
      searchTodo,
      completeTodo,
      deleteTodo,
      openModal,
      setOpenModal,
      addTodo
    }}>
      { children }
    </TodoContext.Provider>

  )
}

export { TodoContext, TodoProvider };
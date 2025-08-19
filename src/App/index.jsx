import '../App.css'
import { AppUi } from './App-UI';
import { useLocalStorageItem } from './Custom-Hooks-useLocalStorange';
import { useState } from 'react';

// const todoDefault = [
//   { text: 'Cortar Cebolla', completed: true },
//   { text: 'Terminar Curso', completed: false },
//   { text: 'Ver Peliculas', completed: true },
//   { text: 'Cambiar Aceite', completed: false },
// ];

//  localStorage.setItem('TAREAS_V1', JSON.stringify(todoDefault));

function App() {

  const [todos, saveItem] = useLocalStorageItem('TAREAS_V1', []); // usamos useState para declarar el estado de los todos, inicializándolo con los todos parseados desde localStorage
  const [stateSearch, setStateSearch] = useState(''); // podemos declarar estados en el padre para que los hijos puedan acceder a ellos

  const completedTodos = todos.filter(todo => !! todo.completed).length // !! convierte el valor a booleano en caso de que sea un string o un number
  const totalTodo = todos.length // estos son estados derivados, no son estados que se declaran con useState, sino que se derivan de otros estados por ejemplo, no se crea un useState nuevo se utiliza el que ya existe

  const searchTodo = todos.filter(todo => {  // filtramos los todos para que solo se muestren los que coincidan con el texto de búsqueda
    const todoText = todo.text.toLowerCase() // convertimos el texto a minúsculas para que la búsqueda no sea sensible a mayúsculas y minúsculas
    const searchText = stateSearch.toLowerCase()// convertimos el texto de búsqueda a minúsculas
    return todoText.includes(searchText)// verificamos si el texto del todo esta incluido en el texto de búsqueda

  });  

   const completeTodo = (text) => { // se le pasa el texto del todo que se quiere completar o descompletar
    const newItem = [...todos]; // se crea una copia del estado actual de los todos
    const todoIndex = newItem.findIndex( 
      (todo) => todo.text === text // buscamos el índice del todo que coincide con el texto pasado
    );
    newItem[todoIndex].completed = !newItem[todoIndex].completed; // se cambia el estado de completado del todo encontrado si es true se cambia a false y viceversa
    saveItem(newItem); // se llama a la función saveItem para guardar los nuevos todos en el localStorage y actualizar el estado
  };

  const deleteTodo = (text) => {
    const newItem = [...todos];
    const todoIndex = newItem.findIndex(
      (todo) => todo.text == text
    );
    newItem.splice(todoIndex, 1); // eliminamos el todo encontrado en el índice especificado
    saveItem(newItem);
  };

  return (
    <AppUi  // aquí se pasa el estado y las funciones a los componentes hijos
    completedTodos = {completedTodos} 
    totalTodo = {totalTodo} //estos son los estados que se pasan a los componentes hijos
    stateSearch = {stateSearch}
    setStateSearch = {setStateSearch}
    searchTodo = {searchTodo}
    completeTodo = {completeTodo}
    deleteTodo = {deleteTodo}
    />
  )  
}

export default App
